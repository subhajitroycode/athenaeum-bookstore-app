"use server";

import { db } from "@/lib/db";
import { getSession } from "./favourites";

export const getCartItems = async () => {
  try {
    const session = await getSession();

    const cartItems = await db.cart.findUnique({
      where: { userId: session.user.id },
      include: { items: { include: { book: true } } },
    });

    return { success: true, cartItems };
  } catch (error: any) {
    if (error?.message === "Unauthorized") {
      return {
        success: false,
        error: error.message,
      };
    }
    console.error("Error fetching cart items:", error);
    return { success: false, error: error.message };
  }
};

export const addToCart = async (bookId: string) => {
  try {
    const session = await getSession();

    await db.cart.create({
      data: {
        userId: session.user.id,
        items: {
          create: {
            bookId,
          },
        },
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

    await db.cart.delete({
      where: {
        userId: session.user.id,
        items: {
          some: {
            bookId,
          },
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
