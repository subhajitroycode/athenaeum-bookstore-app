import {
  getBooksByGenre,
  getBooksByGenreWithSearch,
} from "@/app/actions/books";
import BookCard from "@/app/components/common/BookCard";
import Breadcrumb from "@/app/components/common/Breadcrumb";
import { LoaderCircle } from "lucide-react";
import SearchComponent from "../_components/SearchComponent";
import FilterBooks from "@/app/components/common/FilterBooks";
import { filterBooks } from "@/app/utils/filter";
import type { Metadata } from "next";
import { Suspense } from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const genreString = slug
    .split("%20")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${genreString}`,
    description: `Explore books in the ${genreString} genre.`,
  };
}

export default async function page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ q?: string; sort?: string }>;
}) {
  const { slug } = await params;
  const resolvedSearchParams = await searchParams;
  const query = resolvedSearchParams?.q || "";
  const sort = resolvedSearchParams?.sort || "newest";
  const genreString = slug.replace(/%20/g, " ");

  const displayedBooks = query
    ? await getBooksByGenreWithSearch(genreString, query)
    : await getBooksByGenre(genreString);

  const filteredBooks = filterBooks(displayedBooks, sort);

  return (
    <>
      <Breadcrumb genre={genreString} />

      <section className="max-w-350 mx-auto px-4 sm:px-8 md:px-12">
        <div className="pt-8 pb-10 animate-fade-in-scale border-b border-(--border-color)">
          <div className="mb-6">
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-(--text-primary) capitalize">
              {genreString}
            </h1>
            <p className="font-sans text-sm text-(--text-secondary)">
              📚 {displayedBooks.length}{" "}
              {`${displayedBooks.length <= 1 ? "book" : "books"}`}
            </p>
          </div>
          <Suspense fallback={null}>
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <SearchComponent genre={genreString} />
              <div className="self-start sm:self-auto">
                <FilterBooks />
              </div>
            </div>
          </Suspense>
        </div>

        <div className="pt-8 pb-10">
          {!displayedBooks ? (
            <div className="flex justify-center items-center min-h-40">
              <LoaderCircle className="animate-spin text-(--accent)" />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10 mb-12">
              {displayedBooks.length === 0 && query && (
                <p className="text-(--text-secondary) col-span-full text-center">
                  No books found matching "{query}".
                </p>
              )}
              {filteredBooks.map((book) => {
                return <BookCard key={book.id} book={book} />;
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
