import { TEST_ADMIN } from '../config/auth';

export const isTestAdmin = (email: string, password: string): boolean => {
  return email === TEST_ADMIN.email && password === TEST_ADMIN.password;
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string): boolean => {
  return password.length >= 6;
};