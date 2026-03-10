import { create } from "zustand";
import { getCartItems } from "@/app/actions/cart";
import { CartItem, Book } from "@/lib/generated/prisma/client";

type CartItemWithBook = CartItem & { book: Book };

interface CartState {
  count: number;
  cartItems: CartItemWithBook[];
  setCount: (count: number) => void;
  increment: () => void;
  decrement: () => void;
  fetchCartItems: () => Promise<void>;
  fetchInitialCount: () => Promise<void>;
}

export const useCartStore = create<CartState>((set) => ({
  count: 0,
  cartItems: [],
  setCount: (count) => set({ count }),
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: Math.max(0, state.count - 1) })),

  fetchCartItems: async () => {
    try {
      const res = await getCartItems();

      if (res.success && res.cartItems?.length > 0) {
        set({ cartItems: res.cartItems });
      }
    } catch (error) {
      console.error("Error fetching the cart items:", error);
    }
  },

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
