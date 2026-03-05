import { create } from "zustand";
import { getCartItems } from "@/app/actions/cart";

interface CartState {
  count: number;
  setCount: (count: number) => void;
  increment: () => void;
  decrement: () => void;
  fetchInitialCount: () => Promise<void>;
}

export const useCartStore = create<CartState>((set) => ({
  count: 0,
  setCount: (count) => set({ count }),
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: Math.max(0, state.count - 1) })),

  fetchInitialCount: async () => {
    try {
      const res = await getCartItems();

      if (res.success && res.cartItems?.length > 0) {
        set({ count: res.cartItems?.length });
      }
    } catch (error) {
      console.error("Error fetching initial cart count:", error);
    }
  },
}));
