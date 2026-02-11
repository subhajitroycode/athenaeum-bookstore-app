"use server";

import { db } from "@/lib/db";

export const searchBooks = async (formData: FormData) => {
  const query = formData.get("query") as string;
  if (!query) return [];

  try {
    const res = await db.book.findMany({
      where: {
        OR: [
          { title: { contains: query, mode: "insensitive" } },
          { author: { contains: query, mode: "insensitive" } },
          { isbn: { contains: query, mode: "insensitive" } },
        ],
      },
    });

    return res;
  } catch (error) {
    console.error("Error searching books:", error);
    return [];
  }
};
