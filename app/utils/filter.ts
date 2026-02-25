import { Book } from "@/lib/generated/prisma/client";

export const filterBooks = (books: Book[], filter: string): Book[] => {
  const sortedBooks = [...books];

  switch (filter) {
    case "oldest":
      sortedBooks.sort((a, b) => a.publishedYear - b.publishedYear);
      break;
    case "price-low":
      sortedBooks.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      sortedBooks.sort((a, b) => b.price - a.price);
      break;
    case "title-asc":
      sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "author-asc":
      sortedBooks.sort((a, b) => a.author.localeCompare(b.author));
      break;
    default:
      sortedBooks;
  }

  return sortedBooks;
};
