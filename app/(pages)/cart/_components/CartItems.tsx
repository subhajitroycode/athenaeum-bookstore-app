"use client";

import { useCartStore } from "@/app/store/cart-store";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

const CartItems = () => {
  const {
    cartItems,
    fetchCartItems,
    removeItem,
    errorMessage,
    increaseQuantity,
    decreaseQuantity,
  } = useCartStore();

  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

  return (
    <div className="flex flex-col gap-6">
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex gap-6 pb-6 border-b border-(--border-color) last:border-none last:pb-0"
        >
          <div className="w-20 h-30 border border-(--border-color) aspect-2/3 relative overflow-hidden">
            <Image
              src={item.book.coverImage!}
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt={`Cover of the book ${item.book.title}`}
              quality={60}
            />
          </div>

          <div className="flex flex-col flex-1 gap-2">
            <h3 className="font-playfair text-lg font-semibold text-(--text-primary)">
              {item.book.title}
            </h3>
            <p className="text-[0.9rem] text-(--text-secondary)">
              by {item.book.author}
            </p>
            <div className="flex gap-4 mt-[0.3rem] font-sans text-[0.85rem] text-(--text-secondary)">
              <span>{item.book.genre}</span>
              <span>•</span>
              <span>{item.book.publishedYear}</span>
            </div>
          </div>

          <div className="flex flex-col items-end justify-between">
            <span className="font-sans text-xl font-semibold text-(--accent)">
              ${item.book.price}
            </span>

            <div className="flex items-center gap-2 border border-(--border-color)">
              <button
                disabled={item.quantity <= 1}
                type="button"
                className={`w-8 h-8 text-(--text-primary) flex justify-center items-center transition-all duration-200 hover:bg-(--bg-secondary) ${item.quantity <= 1 ? "cursor-not-allowed" : "cursor-pointer"}`}
                onClick={() => decreaseQuantity(item.bookId)}
              >
                <Minus width={20} height={20} />
              </button>
              <span className="w-10 text-center font-sans text-[0.9rem] font-medium">
                {item.quantity}
              </span>
              <button
                type="button"
                className="w-8 h-8 text-(--text-primary) cursor-pointer flex justify-center items-center transition-all duration-200 hover:bg-(--bg-secondary)"
                onClick={() => increaseQuantity(item.bookId)}
              >
                <Plus width={20} height={20} />
              </button>
            </div>

            <button
              type="button"
              className="font-sans text-(--text-secondary) cursor-pointer text-[0.8rem] uppercase tracking-wider py-[0.3rem] transition-all duration-300 underline hover:text-[#d32f2f]"
              onClick={() => removeItem(item.bookId)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
