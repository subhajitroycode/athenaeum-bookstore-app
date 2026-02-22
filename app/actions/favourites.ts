"use server";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { headers } from "next/headers";

export const getSession = async () => {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) throw new Error("Unauthorized");

  return session;
};

export const addFavourite = async (bookId: string) => {
  try {
    const session = await getSession();

    const favourite = await db.favourite.create({
      data: {
        userId: session.user.id,
        bookId,
      },
      include: { book: true },
    });

    return { success: true, favourite };
  } catch (error: any) {
    if (error?.message === "Unauthorized")
      return {
        success: false,
        isFavourite: false,
        error: error.message,
      };
    console.error("Error adding favourite:", error);
    return { success: false, error: "Failed to add favourite" };
  }
};

export const removeFavourite = async (bookId: string) => {
  try {
    const session = await getSession();

    await db.favourite.delete({
      where: {
        userId_bookId: {
          userId: session.user.id,
          bookId,
        },
      },
    });

    return { success: true };
  } catch (error: any) {
    if (error?.message === "Unauthorized") {
      return {
        success: false,
        error: error.message,
      };
    }
    console.error("Error removing favourite:", error);
    return { success: false, error: "Failed to remove favourite" };
  }
};

export const getfavourites = async () => {
  try {
    const session = await getSession();

    const favourites = await db.favourite.findMany({
      where: { userId: session.user.id },
      include: { book: true },
      orderBy: { createdAt: "desc" },
    });

    return { success: true, favourites };
  } catch (error: any) {
    if (error?.message === "Unauthorized") {
      return {
        success: false,
        favourites: [],
        error: error.message,
      };
    }
    console.error("Error fetching favourites:", error);
    return {
      success: false,
      error: "Failed to fetch favourites",
      favourites: [],
    };
  }
};

export const isFavourite = async (bookId: string) => {
  try {
    const session = await getSession();

    const favourite = await db.favourite.findUnique({
      where: {
        userId_bookId: {
          userId: session.user.id,
          bookId,
        },
      },
    });

    return { success: true, isFavourite: !!favourite };
  } catch (error: any) {
    if (error?.message === "Unauthorized") {
      return {
        success: false,
        isFavourite: false,
        error: error.message,
      };
    }
    console.error("Error checking favourite:", error);
    return {
      success: false,
      isFavourite: false,
      error: "Failed to check for favourites",
    };
  }
};

export const getLovedBy = async (bookId: string) => {
  try {
    const lovedBy = await db.favourite.findMany({
      where: { bookId },
      include: { user: true },
      orderBy: { createdAt: "desc" },
    });
    return { success: true, lovedBy };
  } catch (error) {
    return { success: false, error: "Failed to fetch loved by", lovedBy: [] };
  }
};
