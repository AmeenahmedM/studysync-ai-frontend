import { create } from 'zustand';
import { UserProfile } from '../types';

type AuthUser = UserProfile & {
  token: string;
};

type AuthState = {
  user: AuthUser | null;
  setUser: (user: AuthUser | null) => void;
};

const savedUser = localStorage.getItem('studysync-user');

export const useAuthStore = create<AuthState>((set) => ({
  user: savedUser ? JSON.parse(savedUser) as AuthUser : null,
  setUser: (user) => {
    if (user) {
      localStorage.setItem('studysync-user', JSON.stringify(user));
    } else {
      localStorage.removeItem('studysync-user');
    }
    set({ user });
  }
}));
