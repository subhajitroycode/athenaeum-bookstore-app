import type { Book } from "@/lib/generated/prisma/client";
import BookCard from "../common/BookCard";

const SearchResult = ({
  books,
  query,
  clearSearch,
}: {
  books: Book[];
  query: string;
  clearSearch: () => void;
}) => {
  return (
    <section className="max-w-350 mx-auto pt-8 px-12 pb-16">
      <div className="flex justify-between items-center mb-10 pb-4 border-b border-(--border-color)">
        <div className="flex-1">
          <h2 className="font-playfair text-[1.8rem] font-semibold text-(--text-primary) mb-[0.3rem]">
            Search Results for "{query}"
          </h2>
          <p className="font-sans text-[0.9rem] text-(--text-secondary)">
            {books.length} book{books.length !== 1 ? "s" : ""} found
          </p>
        </div>
        <button
          className="font-sans border-[1.5px] border-(--border-color) text-(--text-primary) py-[0.6rem] px-6 cursor-pointer text-[0.85rem] transition-all duration-300 uppercase tracking-wider font-medium hover:border-(--accent) hover:text-(--accent) hover:-translate-y-0.5"
          onClick={clearSearch}
        >
          Clear Search
        </button>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-10 mb-12">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
};

export default SearchResult;
