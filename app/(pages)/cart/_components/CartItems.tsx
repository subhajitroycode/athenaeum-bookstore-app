"use client";

import { useCartStore } from "@/app/store/cart-store";
import Image from "next/image";
import { useEffect } from "react";

const CartItems = () => {
  const { cartItems, fetchCartItems } = useCartStore();

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
              loading="lazy"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
