import Link from "next/link";

const Breadcrumb = ({ genre, title }: { genre?: string; title?: string }) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className="max-w-350 mx-auto px-12 py-[1.2rem] flex items-center gap-[0.6rem] font-sans text-[0.85rem] text-(--text-secondary)"
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
