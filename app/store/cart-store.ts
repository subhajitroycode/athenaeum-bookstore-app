import { create } from "zustand";
import {
  getCartItems,
  removeFromCart,
  updateQuantity,
} from "@/app/actions/cart";
import { CartItem, Book } from "@/lib/generated/prisma/client";

type CartItemWithBook = CartItem & { book: Book };

interface CartState {
  count: number;
  cartItems: CartItemWithBook[];
  errorMessage: null;
  setCount: (count: number) => void;
  increaseItem: () => void;
  decreaseItem: () => void;
  increaseQuantity: (bookId: string) => Promise<void>;
  decreaseQuantity: (bookId: string) => Promise<void>;
  fetchCartItems: () => Promise<void>;
  fetchInitialCount: () => Promise<void>;
  removeItem: (bookId: string) => Promise<void>;
}

export const useCartStore = create<CartState>((set, get) => ({
  count: 0,
  cartItems: [],
  errorMessage: null,
  setCount: (count) => set({ count }),
  increaseItem: () => set((state) => ({ count: state.count + 1 })),
  decreaseItem: () => set((state) => ({ count: Math.max(0, state.count - 1) })),

  fetchCartItems: async () => {
    const res = await getCartItems();

    if (res.success && res.cartItems?.length > 0)
      set({ cartItems: res.cartItems });
    else set({ cartItems: res.cartItems, errorMessage: res.error });
  },

  fetchInitialCount: async () => {
    const res = await getCartItems();

    if (res.success && res.cartItems?.length > 0)
      set({ count: res.cartItems.length });
    else set({ count: res.cartItems.length, errorMessage: res.error });
  },

  removeItem: async (bookId: string) => {
    const res = await removeFromCart(bookId);

    if (res.success) {
      set((state) => ({
        cartItems: state.cartItems.filter((item) => item.bookId !== bookId),
        count: Math.max(0, state.count - 1),
      }));
    } else set({ errorMessage: res.error });
  },

  increaseQuantity: async (bookId: string) => {
    const item = get().cartItems.find((i) => i.bookId === bookId);
    if (!item) return;

    const res = await updateQuantity(bookId, item.quantity + 1);

    if (res.success) {
      set((state) => ({
        cartItems: state.cartItems.map((i) =>
          i.bookId === bookId ? { ...i, quantity: item.quantity + 1 } : i,
        ),
      }));
    } else set({ errorMessage: res.error });
  },

  decreaseQuantity: async (bookId: string) => {
    const item = get().cartItems.find((i) => i.bookId === bookId);
    if (!item) return;

    if (item.quantity < 1) {
      get().removeItem(bookId);
      return;
    }

    const res = await updateQuantity(bookId, item.quantity - 1);

    if (res.success) {
      set((state) => ({
        cartItems: state.cartItems.map((i) =>
          i.bookId === bookId ? { ...i, quantity: item.quantity - 1 } : i,
        ),
      }));
    } else set({ errorMessage: res.error });
  },
}));
