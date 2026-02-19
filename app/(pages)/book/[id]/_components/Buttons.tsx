"use client";

import { addFavourite, isFavourite } from "@/app/actions/favourites";
import { Heart, HeartMinus, HeartPlus, ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";

interface Status {
  loading: boolean;
  isFavourite: boolean;
  isSignedIn: boolean;
  error?: string;
}

const Buttons = ({ bookId }: { bookId: string }) => {
  const [status, setStatus] = useState<Status>({
    loading: false,
    isFavourite: false,
    isSignedIn: true,
    error: undefined,
  });

  const checkFavourite = async () => {
    setStatus((prev) => ({ ...prev, loading: true }));

    const res = await isFavourite(bookId);

    if (!res.success)
      setStatus((prev) => ({
        ...prev,
        loading: false,
        error: res.error,
      }));

    if (!res.success && res.error === "Unauthorized")
      setStatus((prev) => ({
        ...prev,
        isSignedIn: false,
        loading: false,
        error: res.error,
      }));

    if (res.success)
      setStatus((prev) => ({
        ...prev,
        isFavourite: res.isFavourite,
        loading: false,
      }));
  };

  useEffect(() => {
    checkFavourite();
  }, [bookId]);

  const handleAddFavourite = async () => {
    setStatus((prev) => ({ ...prev, loading: true }));

    const res = await addFavourite(bookId);

    if (!res.success) {
      setStatus((prev) => ({
        ...prev,
        loading: false,
        error: res.error,
      }));
    }

    if (res.success) {
      setStatus((prev) => ({
        ...prev,
        isFavourite: !!res.favourite,
        loading: false,
      }));
    }
  };

  return (
    <div className="flex items-center justify-between gap-4">
      <button className="flex items-center justify-center gap-2 flex-1 py-4 bg-(--accent) text-white font-sans text-[0.95rem] uppercase tracking-widest font-medium cursor-pointer transition-all duration-300 hover:bg-(--accent-light) hover:-translate-y-0.5 hover:shadow-[0_8px_20px_var(--shadow-color)] relative overflow-hidden before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-linear-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-[left] before:duration-500 hover:before:left-full">
        <ShoppingCart /> add to cart
      </button>
      {!status.isSignedIn ? (
        <button
          className={`bg-(--color-card) border-[1.5px] hover:text-white border-(--border-color) p-4 transition-all duration-300 hover:bg-(--accent-light) hover:-translate-y-0.5 hover:shadow-[0_8px_20px_var(--shadow-color)] ${status.loading ? "cursor-wait" : "cursor-pointer"}`}
        >
          <Heart />
        </button>
      ) : status.isFavourite ? (
        <button
          className={`bg-(--color-card) border-[1.5px] hover:text-white border-(--border-color) p-4 transition-all duration-300 hover:bg-(--accent-light) hover:-translate-y-0.5 hover:shadow-[0_8px_20px_var(--shadow-color)] ${status.loading ? "cursor-wait" : "cursor-pointer"}`}
        >
          <HeartMinus />
        </button>
      ) : (
        <button
          className={`bg-(--color-card) border-[1.5px] hover:text-white border-(--border-color) p-4 transition-all duration-300 hover:bg-(--accent-light) hover:-translate-y-0.5 hover:shadow-[0_8px_20px_var(--shadow-color)] ${status.loading ? "cursor-wait" : "cursor-pointer"}`}
          onClick={handleAddFavourite}
        >
          <HeartPlus />
        </button>
      )}
    </div>
  );
};

export default Buttons;
