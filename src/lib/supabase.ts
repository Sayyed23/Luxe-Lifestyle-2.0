import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Mock data for development
export const mockPosts = [
  {
    id: '1',
    content: 'Exploring the finest boutiques in Paris. The attention to detail in French fashion is unmatched.',
    image_url: 'https://images.unsplash.com/photo-1502274464241-b5c4621694ce',
    created_at: new Date().toISOString(),
    user: {
      username: 'admin',
      avatar_url: null
    },
    likes: 42,
    comments: 8,
    liked_by_user: false
  },
  {
    id: '2',
    content: 'Just experienced a remarkable wine tasting session in Tuscany. The complexity of Italian wines never ceases to amaze.',
    image_url: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb',
    created_at: new Date(Date.now() - 86400000).toISOString(),
    user: {
      username: 'admin',
      avatar_url: null
    },
    likes: 35,
    comments: 12,
    liked_by_user: false
  }
];

export const mockProfile = {
  username: 'admin',
  avatar_url: null,
  bio: 'Luxury lifestyle curator and travel enthusiast',
  location: 'Paris, France',
  created_at: '2024-01-01T00:00:00.000Z'
};