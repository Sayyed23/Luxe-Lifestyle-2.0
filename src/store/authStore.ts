import { create } from 'zustand';
import { supabase } from '../lib/supabase';
import { sendWelcomeEmail } from '../utils/emailService';
import { isTestAdmin, validateEmail, validatePassword } from '../utils/authHelpers';
import { TEST_ADMIN } from '../config/auth';

interface User {
  id: string;
  email: string;
  username: string;
  avatar_url?: string;
  isAdmin?: boolean;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  setUser: (user: User | null) => void;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, username: string) => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,
  setUser: (user) => set({ user, loading: false }),
  
  signIn: async (email: string, password: string) => {
    if (!validateEmail(email)) {
      throw new Error('Invalid email format');
    }

    if (!validatePassword(password)) {
      throw new Error('Password must be at least 6 characters');
    }

    // Check for test admin credentials
    if (isTestAdmin(email, password)) {
      set({
        user: {
          id: 'admin-id',
          email: TEST_ADMIN.email,
          username: TEST_ADMIN.username,
          isAdmin: true
        },
        loading: false
      });
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    if (error) throw error;
    
    if (data.user) {
      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', data.user.id)
        .single();
        
      set({ user: { ...profile, isAdmin: false }, loading: false });
    }
  },
  
  signUp: async (email: string, password: string, username: string) => {
    if (!validateEmail(email)) {
      throw new Error('Invalid email format');
    }

    if (!validatePassword(password)) {
      throw new Error('Password must be at least 6 characters');
    }

    if (email === TEST_ADMIN.email) {
      throw new Error('This email is reserved');
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    
    if (error) throw error;
    
    if (data.user) {
      const { error: profileError } = await supabase
        .from('profiles')
        .insert([
          {
            id: data.user.id,
            username,
            email,
            isAdmin: false
          },
        ]);
        
      if (profileError) throw profileError;
      
      try {
        await sendWelcomeEmail(email, username);
      } catch (emailError) {
        console.error('Error sending welcome email:', emailError);
      }
      
      set({
        user: {
          id: data.user.id,
          email,
          username,
          isAdmin: false
        },
        loading: false,
      });
    }
  },
  
  signOut: async () => {
    await supabase.auth.signOut();
    set({ user: null, loading: false });
  },

  resetPassword: async (email: string) => {
    if (!validateEmail(email)) {
      throw new Error('Invalid email format');
    }

    if (email === TEST_ADMIN.email) {
      throw new Error('Cannot reset admin password');
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'https://your-luxe-website.com/reset-password',
    });
    
    if (error) throw error;
  },
}));