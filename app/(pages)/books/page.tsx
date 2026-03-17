import FilterBooks from "@/app/components/common/FilterBooks";
import BooksGrid from "./_components/BooksGrid";
import SearchBooks from "./_components/SearchBooks";
import { searchBooks } from "@/app/actions/books";
import BookSearchResult from "./_components/BookSearchResult";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const resSearchParams = await searchParams;
  const query = resSearchParams?.q || "";

  const queryResults = await searchBooks(query);

  return (
    <section className="max-w-350 mx-auto">
      <div className="p-6 md:pt-8 md:px-8 md:pb-6 lg:pt-12 lg:px-12 pb-8 animate-fade-in-scale">
        <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-(--text-primary)">
          All Books
        </h1>
        <p className="text-lg text-(--text-secondary) font-light">
          Explore our complete collection of carefully curated titles
        </p>
      </div>

      <div className="py-4 px-6 md:px-8 md:py-6 lg:px-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-6 flex-wrap bg-(--bg-secondary) border-y border-y-(--border-color)">
        <FilterBooks />
        <SearchBooks />
      </div>

      <div className="pt-4 px-6 pb-8 md:pt-6 md:px-8 md:pb-12 lg:pt-8 lg:px-12 lg:pb-16">
        {query ? (
          <BookSearchResult books={queryResults.books} query={query} />
        ) : (
          <BooksGrid />
        )}
      </div>
    </section>
  );
}
