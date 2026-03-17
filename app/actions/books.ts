"use server";

import { db } from "@/lib/db";

export const searchBooks = async (query: string) => {
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
    };
  } catch (error) {
    console.error("Error searching books:", error);
    return {
      books: [],
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

export const getBookById = async (id: string) => {
  try {
    const book = await db.book.findUnique({
      where: {
        id,
      },
    });

    return book;
  } catch (error) {
    console.error("Error fetching books:", error);
    return;
  }
};

export const getGenres = async () => {
  try {
    const genres = await db.book.groupBy({
      by: ["genre"],
      _count: { genre: true },
      orderBy: { _count: { genre: "desc" } },
    });
    return genres;
  } catch (error) {
    console.error("Error fetching genres:", error);
    return [];
  }
};

export const getBooksByGenre = async (genre: string) => {
  try {
    const books = await db.book.findMany({
      where: {
        genre: {
          equals: genre,
          mode: "insensitive",
        },
      },
    });

    return books;
  } catch (error) {
    console.error("Error fetching books by genre:", error);
    return [];
  }
};

export const getBooksByGenreWithSearch = async (
  genre: string,
  query: string,
) => {
  try {
    const books = await db.book.findMany({
      where: {
        genre: {
          equals: genre,
          mode: "insensitive",
        },
        OR: [
          { title: { contains: query, mode: "insensitive" } },
          { author: { contains: query, mode: "insensitive" } },
        ],
      },
    });

    return books;
  } catch (error) {
    console.error("Error fetching books by genre with search:", error);
    return [];
  }
};
