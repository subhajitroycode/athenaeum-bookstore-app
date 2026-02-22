import { create } from "zustand";

interface BookStore {
  lovedByCount: number;
  setLovedByCount: (count: number) => void;
  incrementLovedByCount: () => void;
  decrementLovedByCount: () => void;
}

export const useBookStore = create<BookStore>((set) => ({
  lovedByCount: 0,
  setLovedByCount: (count: number) => set({ lovedByCount: count }),
  incrementLovedByCount: () =>
    set((state) => ({ lovedByCount: state.lovedByCount + 1 })),
  decrementLovedByCount: () =>
    set((state) => ({ lovedByCount: state.lovedByCount - 1 })),
}));
