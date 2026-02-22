import Link from "next/link";

const Breadcrumb = ({ genre, title }: { genre?: string; title?: string }) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className="max-w-350 mx-auto px-4 py-6 sm:px-12 sm:py-5 flex items-center flex-wrap md:flex-nowrap gap-[0.6rem] font-sans text-[0.85rem] text-(--text-secondary)"
    >
      <Link
        href={"/"}
        className="hover:text-(--accent) transition-colors duration-300"
      >
        Books
      </Link>
      <span className="opacity-40">/</span>
      <Link
        href={"/genres"}
        className="hover:text-(--accent) transition-colors duration-300"
      >
        Genres
      </Link>
      <span className="opacity-40">/</span>
      <Link
        href={`/genres/${genre?.toLowerCase()}`}
        className="hover:text-(--accent) transition-colors duration-300"
      >
        {genre}
      </Link>
      <span className="opacity-40">/</span>
      <span className="text-(--text-primary)">{title}</span>
    </nav>
  );
};

export default Breadcrumb;
