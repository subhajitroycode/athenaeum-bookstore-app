import type { Book } from "@/lib/generated/prisma/client";
import { useEffect, useState } from "react";
import { getBooks } from "../actions/books";
import { LoaderCircle } from "lucide-react";
import { usePagination } from "../hooks/usePagination";
import Pagination from "./Pagination";

const FeaturedList = () => {
  const [books, setBooks] = useState<Book[]>();

  const fetchBooks = async () => {
    const result = await getBooks();
    setBooks(result);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const { currentPage, setCurrentPage, getPaginatedItems } =
    usePagination<Book>({
      totalItems: books?.length || 0,
      itemsPerPage: 12,
    });

  const currentBooks = books ? getPaginatedItems(books) : [];

  return (
    <section className="max-w-350 mx-auto pt-8 px-12 pb-16">
      <div className="flex justify-between items-center mb-10 pb-4 border-b border-(--border-color)">
        <h2 className="font-playfair text-[1.8rem] font-semibold text-(--text-primary)">
          Featured Collection
        </h2>
        <button
          className="font-sans border border-(--border-color) text-(--text-secondary) py-2 px-5 cursor-pointer text-sm uppercase tracking-wider transition-all duration-300 hover:text-(--accent) hover:border-(--accent)"
          type="button"
        >
          Filter & Sort
        </button>
      </div>

      {!books ? (
        <div className="flex justify-center items-center min-h-40">
          <LoaderCircle className="animate-spin text-(--accent)" />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-10 mb-12">
            {currentBooks.map((book) => (
              <div key={book.id}>{book.title}</div>
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalItems={books.length}
            itemsPerPage={12}
            onPageChange={setCurrentPage}
            showPageInfo={true}
          />
        </>
      )}
    </section>
  );
};

export default FeaturedList;
