"use client";

import { addToCart, removeFromCart } from "@/app/actions/cart";
import {
  addFavourite,
  isFavourite,
  removeFavourite,
} from "@/app/actions/favourites";
import { useBookStore } from "@/app/store/book-store";
import { useCartStore } from "@/app/store/cart-store";
import { Heart, HeartMinus, HeartPlus, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  const { incrementLovedByCount, decrementLovedByCount } = useBookStore();
  // const incrementCount = useCartStore((state) => state.increment);
  // const decrementCount = useCartStore((state) => state.decrement);

  // const handleAddToCart = async () => {
  //   const res = await addToCart(bookId);

  //   console.log(res);

  //   if (res.success) incrementCount();
  // };

  // const handleRemoveFromCart = async () => {
  //   const res = await removeFromCart(bookId);

  //   console.log(res);

  //   if (res.success) decrementCount();
  // };

  const checkFavourite = async () => {
    setStatus((prev) => ({ ...prev, loading: true }));

    const res = await isFavourite(bookId);

    if (res.success)
      setStatus((prev) => ({
        ...prev,
        isFavourite: res.isFavourite,
        loading: false,
      }));
    else if (!res.success && res.error === "Unauthorized")
      setStatus((prev) => ({
        ...prev,
        isSignedIn: false,
        loading: false,
        error: res.error,
      }));
    else
      setStatus((prev) => ({
        ...prev,
        loading: false,
        error: res.error,
      }));
  };

  useEffect(() => {
    checkFavourite();
  }, [bookId]);

  const handleAddFavourite = async () => {
    setStatus((prev) => ({ ...prev, loading: true }));

    const res = await addFavourite(bookId);

    if (res.success) {
      setStatus((prev) => ({
        ...prev,
        isFavourite: !!res.favourite,
        loading: false,
      }));
      incrementLovedByCount();
    } else {
      setStatus((prev) => ({
        ...prev,
        loading: false,
        error: res.error,
      }));
    }
  };

  const handleRemoveFavourite = async () => {
    setStatus((prev) => ({ ...prev, loading: true }));

    const res = await removeFavourite(bookId);

    if (res.success) {
      setStatus((prev) => ({
        ...prev,
        isFavourite: false,
        loading: false,
      }));
      decrementLovedByCount();
    } else {
      setStatus((prev) => ({
        ...prev,
        loading: false,
        error: res.error,
      }));
    }
  };

  return (
    <div className="flex items-center justify-between gap-4">
      <button
        className="flex items-center justify-center gap-2 flex-1 py-4 bg-(--accent) text-white font-sans text-[0.95rem] uppercase tracking-widest font-medium cursor-pointer transition-all duration-300 hover:bg-(--accent-light) hover:-translate-y-0.5 hover:shadow-[0_8px_20px_var(--shadow-color)] relative overflow-hidden before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-linear-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-[left] before:duration-500 hover:before:left-full"
        // onClick={handleRemoveFromCart}
      >
        <ShoppingCart /> add to cart
      </button>
      {!status.isSignedIn ? (
        <button
          disabled={status.loading}
          className={`bg-(--color-card) border-[1.5px] hover:text-white border-(--border-color) p-4 transition-all duration-300 hover:bg-(--accent-light) hover:-translate-y-0.5 hover:shadow-[0_8px_20px_var(--shadow-color)] ${status.loading ? "cursor-wait" : "cursor-pointer"}`}
          onClick={() => router.push("/auth?tab=signin")}
        >
          <Heart />
        </button>
      ) : status.isFavourite ? (
        <button
          disabled={status.loading}
          className={`bg-(--color-card) border-[1.5px] hover:text-white border-(--border-color) p-4 transition-all duration-300 hover:bg-(--accent-light) hover:-translate-y-0.5 hover:shadow-[0_8px_20px_var(--shadow-color)] ${status.loading ? "cursor-wait" : "cursor-pointer"}`}
          onClick={handleRemoveFavourite}
        >
          <HeartMinus />
        </button>
      ) : (
        <button
          disabled={status.loading}
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
