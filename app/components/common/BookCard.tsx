import type { Book } from "@/lib/generated/prisma/client";
import Image from "next/image";
import Link from "next/link";

const BookCard = ({ book }: { book: Book }) => {
  return (
    <Link
      href={`/book/${book.id}`}
      className="bg-card border border-(--border-color) overflow-hidden hover:-translate-y-2 hover:shadow-[0_12px_30px_var(--shadow)] hover:border-(--accent) book-card"
    >
      {book.coverImage ? (
        <div className="w-full aspect-2/3 bg-linear-135 from-(--bg-secondary) to-(--border-color) relative overflow-hidden">
          <Image
            src={book.coverImage}
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={`Cover of the book ${book.title}`}
            loading="lazy"
          />
        </div>
      ) : (
        <div className="w-full aspect-2/3 bg-linear-135 from-(--bg-secondary) to-(--border-color) relative overflow-hidden">
          Book Cover
        </div>
      )}
      <div className="p-6">
        <h3 className="font-playfair text-[1.15rem] font-semibold mb-2 text-(--text-primary) leading-[1.4] truncate">
          {book.title}
        </h3>
        <p className="text-[0.95rem] text-(--text-secondary) mb-[0.8rem] font-light">
          {book.author}
        </p>
        <div className="flex justify-between items-center pt-4 border-t border-(--border-color)">
          <span className="font-sans text-[1.1rem] font-semibold text-(--accent)">
            ${book.price}
          </span>
          <span className="font-sans text-[0.85rem] text-(--text-secondary)">
            {book.genre}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
