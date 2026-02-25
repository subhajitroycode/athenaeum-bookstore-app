import type { Book } from "@/lib/generated/prisma/client";
import { useEffect, useRef, useState } from "react";
import { getBooks } from "../../actions/books";
import { LoaderCircle } from "lucide-react";
import { usePagination } from "../../hooks/usePagination";
import { useResponsiveItemsPerPage } from "../../hooks/useResponsiveItemsPerPage";
import Pagination from "../common/Pagination";
import BookCard from "../common/BookCard";
import FilterBooks from "../common/FilterBooks";
import { useSearchParams } from "next/navigation";
import { filterBooks } from "@/app/utils/filter";

const FeaturedList = () => {
  const [books, setBooks] = useState<Book[]>();
  const sectionRef = useRef<HTMLElement>(null);
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

  return (
    <section ref={sectionRef} className="max-w-350 mx-auto pt-8 px-12 pb-16">
      <div className="flex justify-between items-center mb-10 pb-4 border-b border-(--border-color)">
        <h2 className="font-playfair text-[1.8rem] font-semibold text-(--text-primary)">
          Featured Collection
        </h2>
        <FilterBooks />
      </div>

      {!books ? (
        <div className="flex justify-center items-center min-h-40">
          <LoaderCircle className="animate-spin text-(--accent)" />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-10 mb-12">
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
            scrollTargetRef={sectionRef as React.RefObject<HTMLElement>}
          />
        </>
      )}
    </section>
  );
};

export default FeaturedList;
