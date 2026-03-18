import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center justify-center py-12 px-6 md:py-16 md:px-8 animate-fade-in-scale">
      <div className="max-w-175 text-center">
        <div className="font-playfair text-8xl sm:text-9xl md:text-[12rem] font-bold text-(--accent) leading-none mb-4 opacity-15 relative animate-float">
          404
        </div>
        <div className="text-[4rem] md:text-[5rem] mb-8 animate-bounce">📖</div>

        <h1 className="font-playfair text-[1.6rem] sm:text-[2rem] md:text-5xl font-bold text-(--text-primary) mb-4 leading-[1.2]">
          Page Not Found
        </h1>
        <p className="text-lg md:text-xl text-(--text-secondary) mb-4 font-light">
          This chapter seems to be missing
        </p>
        <p className="text-lg text-(--text-secondary) mb-12 leading-[1.8] font-light">
          The page you're looking for has been moved, removed, or perhaps never
          existed. But don't worry, our collection has plenty more to discover.
        </p>

        <Link
          className="font-sans bg-(--accent) text-white py-5 px-12 text-[0.95rem] tracking-[0.08em] uppercase transition-all duration-300 font-medium relative overflow-hidden before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-linear-90 before:from-transparent before:via-[rgba(255,255,255,0.2)] before:to-transparent before:transition-[left] before:duration-500 hover:bg-(--accent-light) hover:-translate-y-0.5 hover:shadow-[0_8px_20px_var(--shadow)] hover:before:left-full"
          href={"/"}
        >
          Return Home
        </Link>
      </div>
    </section>
  );
}
