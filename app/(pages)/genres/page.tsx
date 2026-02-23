import { getGenres } from "@/app/actions/books";
import GenreGrid from "./_components/GenreGrid";

async function page() {
  const genresData = await getGenres();

  return (
    <section className="max-w-350 mx-auto pt-8 px-6 pb-6 sm:pt-12 sm:px-8 sm:pb-8 md:pt-16 md:px-12 md:pb-12 text-center animate-fade-in-scale">
      <h1 className="font-playfair text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] font-bold mb-4 text-(--text-primary) tracking-wide">
        Explore by Genre
      </h1>
      <p className="text-sm md:text-[1.3rem] text-(--text-secondary) font-light max-w-150 mx-auto mb-6 sm:mb-0">
        Navigate our collection through curated genres from timeless classics to
        contemporary masterpieces
      </p>

      {genresData.length > 0 ? (
        <GenreGrid genres={genresData} />
      ) : (
        <p className="text-(--text-secondary) mt-8">No genres found.</p>
      )}
    </section>
  );
}

export default page;
