"use client";

import Pagination from "@/app/components/common/Pagination";
import CoverImagesByGenre from "@/app/(pages)/genres/_components/CoverImagesByGenre";
import { usePagination } from "@/app/hooks/usePagination";
import { useResponsiveItemsPerPage } from "@/app/hooks/useResponsiveItemsPerPage";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface Genre {
  genre: string;
  _count: { genre: number };
}

const genreIcons: Record<string, string> = {
  "classic fiction": "📜",
  "historical fiction": "🏛️",
  adventure: "⚔️",
  fantasy: "🐉",
  "dystopian fiction": "🏚️",
  "war fiction": "🎖️",
  "gothic horror": "🕯️",
  "philosophical fiction": "🤔",
  "epic poetry": "✍️",
  "psychological fiction": "🧠",
  "gothic romance": "🥀",
  "magical realism": "✨",
  "science fiction": "🚀",
  "post-apocalyptic fiction": "☢️",
  "mystery thriller": "🔍",
  romance: "💕",
};

const GenreGrid = ({ genres }: { genres: Genre[] }) => {
  const itemsPerPage = useResponsiveItemsPerPage({
    mobile: 4,
    tablet: 6,
    desktop: 8,
    xl: 12,
  });

  const { currentPage, getPaginatedItems, goToPage, totalPages } =
    usePagination<Genre>({ totalItems: genres.length, itemsPerPage });

  const paginatedGenres = getPaginatedItems(genres);

  return (
    <div className="pt-4 pb-12 sm:pt-6 sm:pb-16 md:pt-8 md:pb-20">
      <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(320px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(360px,1fr))] gap-6 md:gap-8">
        {paginatedGenres.map(({ genre, _count }) => {
          const slug = genre.toLowerCase().replace(/\s+/g, "-");
          const icon = genreIcons[genre.toLowerCase()] || "📚";

          return (
            <Link
              key={genre}
              href={`/genres/${slug}`}
              className="bg-card border border-(--border-color) overflow-hidden cursor-pointer relative book-card hover:-translate-y-2 hover:shadow-[0_20px_40px_var(--shadow)] hover:border-(--accent) before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-(--accent) before:scale-x-0 before:transition-transform before:duration-400 hover:before:scale-x-100 group"
            >
              <div className="p-8 border-b border-(--border-color) flex justify-between items-center text-left">
                <div className="flex-1 overflow-hidden">
                  <h2 className="font-playfair text-[1.8rem] font-bold text-(--text-primary) mb-2 truncate">
                    {genre}
                  </h2>
                  <p className="font-sans text-[0.9rem] text-(--text-secondary) uppercase tracking-wider">
                    {_count.genre} books
                  </p>
                </div>
                <div className="text-[2.5rem] opacity-20 transition-all duration-400 group-hover:opacity-50 group-hover:scale-110 group-hover:rotate-5">
                  {icon}
                </div>
              </div>

              <CoverImagesByGenre genre={genre} />

              <div className="py-6 px-8 flex items-center justify-between bg-(--bg-secondary) border-t border-(--border-color)">
                <p className="font-sans text-[0.9rem] text-(--accent) uppercase tracking-wider font-medium flex items-center gap-2 transition-all duration-300 group-hover:gap-[0.8rem] group-hover:text-(--accent-light)">
                  Browse {genre} <ArrowRight width={16} height={16} />
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="max-[456px]:mx-16 max-[524px]:mx-24 max-[640px]:mx-36">
        <Pagination
          currentPage={currentPage}
          totalItems={genres.length}
          itemsPerPage={itemsPerPage}
          onPageChange={goToPage}
        />
      </div>
    </div>
  );
};

export default GenreGrid;
