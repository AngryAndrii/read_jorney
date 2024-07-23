import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useStore = create(
  persist(
    (set, get) => ({
      token: null,
      user: null,
      setToken: token => set(() => ({ token: token })),
      setUser: user => set(() => ({ user: user })),
    }),
    {
      name: 'readJorneyToken',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
