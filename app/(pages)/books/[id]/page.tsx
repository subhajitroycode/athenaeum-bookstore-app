import { getBookById } from "@/app/actions/books";
import Breadcrumb from "@/app/components/common/Breadcrumb";
import Image from "next/image";
import Buttons from "./_components/Buttons";
import { getLovedBy } from "@/app/actions/favourites";
import LovedByCount from "./_components/LovedByCount";

async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const book = await getBookById(id);
  const lovedByRes = await getLovedBy(id);

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(book?.price as number);

  return (
    <>
      <Breadcrumb genre={book?.genre} title={book?.title} />

      <section className="max-w-350 mx-auto pt-4 px-6 pb-12 sm:pt-6 sm:px-8 sm:pb-16 md:pt-0 md:px-12 md:pb-20 grid grid-cols-1 md:grid-cols-[260px_1fr] lg:grid-cols-[320px_1fr] gap-12 lg:gap-16 items-start animate-fade-in-scale">
        <aside className="static md:sticky max-w-70 w-full md:w-auto md:max-w-full mx-auto md:mx-0 top-25 flex flex-col gap-6">
          <div className="relative w-full aspect-2/3 bg-(--bg-secondary) border border-(--border-color) flex items-center justify-center text-(--text-secondary) font-playfair shadow-[0_20px_50px_var(--shadow-color),6px_6px_0_var(--border-color)] hover:shadow-[0_28px_60px_var(--shadow-color),8px_8px_0_var(--accent)] transition-shadow duration-300 overflow-hidden">
            {book?.coverImage ? (
              <Image
                src={book.coverImage}
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={`Cover of the book ${book.title}`}
                priority={true}
              />
            ) : (
              <span className="text-sm opacity-50">No Cover Available</span>
            )}
          </div>

          <Buttons bookId={book?.id as string} />
        </aside>

        <div className="flex flex-col gap-10">
          <div className="border-b border-(--border-color) pb-8">
            <h1 className="font-playfair text-[1.8rem] sm:text-4xl md:text-5xl font-bold leading-[1.15] mb-3 text-(--text-primary)">
              {book?.title}
            </h1>

            <p className="text-[1.3rem] text-(--text-secondary) font-light mb-6">
              by{" "}
              <span className="text-(--accent) border-b border-dotted border-(--accent)">
                {book?.author}
              </span>
            </p>

            <span className="font-playfair text-4xl font-bold text-(--accent)">
              {formattedPrice}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 border border-(--border-color)">
            <div className="px-6 py-5 border-b sm:border-r border-(--border-color)">
              <p className="font-sans text-[0.78rem] uppercase tracking-widest text-(--text-secondary) mb-1">
                genre
              </p>
              <p className="font-playfair text-[1.1rem] font-semibold text-(--text-primary)">
                {book?.genre}
              </p>
            </div>
            <div className="px-6 py-5 border-b sm:border-r border-(--border-color)">
              <p className="font-sans text-[0.78rem] uppercase tracking-widest text-(--text-secondary) mb-1">
                published year
              </p>
              <p className="font-playfair text-[1.1rem] font-semibold text-(--text-primary)">
                {book?.publishedYear}
              </p>
            </div>
            {lovedByRes.success && (
              <LovedByCount initialCount={lovedByRes.lovedBy.length} />
            )}
          </div>

          {book?.description && (
            <div>
              <p className="font-sans text-[0.85rem] uppercase tracking-widest text-(--text-secondary) pb-3 border-b border-(--border-color) mb-5">
                short description
              </p>
              <p className="text-[1.15rem] text-(--text-secondary) leading-[1.9] font-light">
                {book.description}
              </p>
            </div>
          )}

          <div className="flex items-center gap-4 px-6 py-4 bg-(--bg-secondary) border border-(--border-color)">
            <span className="font-sans text-[0.8rem] uppercase tracking-widest text-(--text-secondary) shrink-0">
              ISBN
            </span>
            <span className="font-sans text-[0.95rem] font-medium tracking-wider text-(--text-primary)">
              {book?.isbn}
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
