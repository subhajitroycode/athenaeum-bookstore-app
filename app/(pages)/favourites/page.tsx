import { getfavourites } from "@/app/actions/favourites";
import BookCard from "@/app/components/common/BookCard";
import FilterBooks from "@/app/components/common/FilterBooks";
import { filterBooks } from "@/app/utils/filter";
import Link from "next/link";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ sort?: string }>;
}) {
  const { success, favourites, error } = await getfavourites();
  const resolvedSearchParams = await searchParams;
  const sort = resolvedSearchParams?.sort || "newest";
  const favouriteBooks = favourites.map((fav) => fav.book);
  const filteredBooks = filterBooks(favouriteBooks, sort);

  if (!success && error !== "Unauthorized") {
    return (
      <div className="text-center py-12">
        <p className="text-lg mb-6">
          You must be logged in to view your favourites.
        </p>
        <Link
          href="/auth?tab=signin"
          className="font-sans border-[1.5px] border-(--border-color) text-(--text-primary) px-[1.8rem] py-[0.6rem] cursor-pointer text-sm tracking-wider uppercase transition-all duration-300 ease-in hover:bg-(--accent) hover:border-(--accent) hover:text-white hover:shadow-[0_4px_12px_var(--shadow)]"
        >
          Sign In
        </Link>
      </div>
    );
  }

  if (!success) {
    return (
      <div className="text-center py-12">
        <p className="text-lg mb-6">
          An error occurred while fetching your favourites. Please try again
          later.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-between sm:items-end flex-col sm:flex-row pt-12 gap-4 pb-10 border-b border-(--border-color) animate-fade-in-scale">
        <div>
          <div className="inline-flex items-center gap-3 font-sans py-2 px-5 bg-[#e74c3c14] border border-[#e74c3c33] text-[#e74c3c] uppercase tracking-wider font-medium mb-6">
            <span>💕</span>
            your collection
          </div>
          <h1 className="font-playfair text-5xl font-bold mb-3 text-(--text-primary)">
            My Favourites
          </h1>
          <p className="text-lg text-(--text-secondary) font-light">
            Books you've saved for later
          </p>
        </div>

        <Suspense fallback={null}>
          <FilterBooks />
        </Suspense>
      </div>
      <div className="pt-8 pb-10">
        {favouriteBooks.length === 0 ? (
          <div>
            <p className="py-12 text-center text-lg text-(--text-secondary)">
              You haven't marked any books as favourites yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10 mb-12">
            {filteredBooks.map((book) => (
              <BookCard book={book} key={book.id} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
