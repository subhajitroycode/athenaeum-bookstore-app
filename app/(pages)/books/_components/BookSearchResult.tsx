import BookCard from "@/app/components/common/BookCard";
import type { Book } from "@/lib/generated/prisma/client";

const BookSearchResult = ({
  books,
  query,
}: {
  books: Book[];
  query: string;
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10 mb-12">
      {books.length === 0 && query ? (
        <p className="text-(--text-secondary) col-span-full text-center">
          No books found matching "{query}"
        </p>
      ) : (
        books.map((book) => <BookCard key={book.id} book={book} />)
      )}
    </div>
  );
};

export default BookSearchResult;
