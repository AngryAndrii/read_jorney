import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useStore = create(
  persist(
    (set, get) => ({
      token: null,
      setToken: token => set(() => ({ token: token })),
    }),
    {
      name: 'readJorneyToken',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
