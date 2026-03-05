"use server";

import { db } from "@/lib/db";
import { getSession } from "./favourites";

export const getCartItems = async () => {
  try {
    const session = await getSession();

    const cart = await db.cart.findUnique({
      where: { userId: session.user.id },
      include: { items: { include: { book: true } } },
    });

    return { success: true, cartItems: cart?.items ?? [] };
  } catch (error: any) {
    if (error?.message === "Unauthorized") {
      return {
        success: false,
        error: error.message,
        cartItems: [],
      };
    }
    console.error("Error fetching cart items:", error);
    return { success: false, error: error.message, cartItems: [] };
  }
};

export const isBookInCart = async (bookId: string) => {
  try {
    const session = await getSession();

    const cartItem = await db.cartItem.findFirst({
      where: {
        bookId,
        cart: { userId: session.user.id },
      },
    });

    return { success: true, inCart: !!cartItem };
  } catch (error: any) {
    if (error?.message === "Unauthorized") {
      return { success: false, error: error.message, inCart: false };
    }
    return { success: false, error: error.message, inCart: false };
  }
};

export const addToCart = async (bookId: string) => {
  try {
    const session = await getSession();

    await db.cart.upsert({
      where: { userId: session.user.id },
      create: {
        userId: session.user.id,
        items: {
          create: { bookId },
        },
      },
      update: {
        items: { create: { bookId } },
      },
    });

    return { success: true, message: "Book added to cart" };
  } catch (error: any) {
    if (error?.message === "Unauthorized") {
      return {
        success: false,
        error: error.message,
      };
    }
    console.error("Error adding book to cart:", error);
    return { success: false, error: error.message };
  }
};

export const removeFromCart = async (bookId: string) => {
  try {
    const session = await getSession();

    const cart = await db.cart.findUnique({
      where: { userId: session.user.id },
      select: { id: true },
    });

    if (!cart) return { success: false, error: "Cart not found" };

    await db.cartItem.delete({
      where: {
        cartId_bookId: {
          cartId: cart.id,
          bookId,
        },
      },
    });

    return { success: true, message: "Book removed from cart" };
  } catch (error: any) {
    if (error?.message === "Unauthorized") {
      return {
        success: false,
        error: error.message,
      };
    }
    console.error("Error removing book from cart:", error);
    return { success: false, error: error.message };
  }
};

export const updateQuantity = async (bookId: string, quantity: number) => {
  try {
    if (quantity < 1) return removeFromCart(bookId);

    const session = await getSession();

    const cart = await db.cart.findUnique({
      where: {
        userId: session.user.id,
      },
      select: { id: true },
    });

    if (!cart) return { success: false, error: "Cart not found!" };

    await db.cartItem.update({
      where: {
        cartId_bookId: {
          cartId: cart.id,
          bookId,
        },
      },
      data: { quantity },
    });

    return { success: true, message: "Quantity updated" };
  } catch (error: any) {
    if (error?.message === "Unauthorized") {
      return {
        success: false,
        error: error.message,
      };
    }
    console.error("Error updating quantity:", error);
    return { success: false, error: error.message };
  }
};

export const clearCart = async () => {
  try {
    const session = await getSession();

    await db.cartItem.deleteMany({
      where: {
        cart: {
          userId: session.user.id,
        },
      },
    });

    return { success: true, message: "Cart cleared" };
  } catch (error: any) {
    if (error?.message === "Unauthorized") {
      return { success: false, error: error.message };
    }
    console.error("Error clearing cart:", error);
    return { success: false, error: error.message };
  }
};
