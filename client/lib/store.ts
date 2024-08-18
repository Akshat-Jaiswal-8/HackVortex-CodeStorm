import { create } from "zustand";

export interface GkStore {
  score: number;
  increaseScore: () => void;
}

export const useGkStore = create<GkStore>()((set) => ({
  score: 0,
  increaseScore: () => set((state: GkStore) => ({ score: state.score + 1 })),
}));
