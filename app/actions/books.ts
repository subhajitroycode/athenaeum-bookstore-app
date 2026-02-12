"use server";

import { db } from "@/lib/db";

export const searchBooks = async (formData: FormData) => {
  const query = formData.get("query") as string;
  if (!query) return { books: [], query };

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

    return {
      books: res,
      query,
    };
  } catch (error) {
    console.error("Error searching books:", error);
    return {
      books: [],
      query,
    };
  }
};

export const getBooks = async () => {
  try {
    const books = await db.book.findMany();
    return books;
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};
