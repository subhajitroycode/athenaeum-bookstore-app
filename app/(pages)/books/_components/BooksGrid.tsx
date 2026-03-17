"use client";

import { getBooks } from "@/app/actions/books";
import BookCard from "@/app/components/common/BookCard";
import Pagination from "@/app/components/common/Pagination";
import { usePagination } from "@/app/hooks/usePagination";
import { useResponsiveItemsPerPage } from "@/app/hooks/useResponsiveItemsPerPage";
import { filterBooks } from "@/app/utils/filter";
import type { Book } from "@/lib/generated/prisma/client";
import { LoaderCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const BooksGrid = () => {
  const [books, setBooks] = useState<Book[]>();
  const topScrollRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const sort = searchParams.get("sort") || "";

  const itemsPerPage = useResponsiveItemsPerPage({
    mobile: 6,
    tablet: 8,
    desktop: 12,
    xl: 16,
  });

  const fetchBooks = async () => {
    const result = await getBooks();
    const sortedBooks = filterBooks(result, sort);
    setBooks(sortedBooks);
  };

  useEffect(() => {
    fetchBooks();
  }, [sort]);

  const { currentPage, setCurrentPage, getPaginatedItems } =
    usePagination<Book>({
      totalItems: books?.length || 0,
      itemsPerPage,
    });

  const currentBooks = books ? getPaginatedItems(books) : [];

  return !books ? (
    <div className="flex justify-center items-center min-h-40">
      <LoaderCircle className="animate-spin text-(--accent)" />
    </div>
  ) : (
    <>
      <div
        className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-6 md:gap-8 lg:gap-10 mb-12"
        ref={topScrollRef}
      >
        {currentBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalItems={books.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
        showPageInfo={true}
        scrollTargetRef={topScrollRef as React.RefObject<HTMLDivElement>}
      />
    </>
  );
};

export default BooksGrid;
