import { useState, useEffect } from "react";
import { getBooksByGenre } from "@/app/actions/books";
import Image from "next/image";
import { Book } from "@/lib/generated/prisma/client";

const CoverImagesByGenre = ({ genre }: { genre: string }) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await getBooksByGenre(genre);
      if (data) {
        setBooks(data);
      } else {
        setBooks([]);
      }
      setLoading(false);
    };

    fetchBooks();
  }, [genre]);

  if (loading) {
    return (
      <div className="grid grid-cols-3 gap-px bg-(--border-color) animate-pulse">
        {[1, 2, 3].map((i) => (
          <div key={i} className="aspect-2/3 bg-gray-200" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-px bg-(--border-color)">
      {books.slice(0, 3).map((book) => (
        <div
          key={book.id}
          className="aspect-2/3 flex items-center justify-center relative overflow-hidden"
        >
          {book.coverImage ? (
            <Image
              src={book.coverImage}
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt={`Cover of ${book.title}`}
            />
          ) : (
            <div className="bg-gray-200 w-full h-full flex items-center justify-center">
              <span className="text-gray-400 text-[10px]">No Cover</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CoverImagesByGenre;
