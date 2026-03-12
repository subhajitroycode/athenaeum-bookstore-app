"use client";

import { useCartStore } from "@/app/store/cart-store";
import CartItems from "./CartItems";
import SummaryCard from "./SummaryCard";
import { Loader2, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const CartClient = () => {
  const { cartItems, fetchCartItems, clearCart, errorMessage } = useCartStore();

  const [loading, setLoading] = useState<boolean>(true);

  const load = async () => {
    await fetchCartItems();
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, [fetchCartItems]);

  if (loading) {
    return <Loader2 className="mx-auto mt-24 animate-spin" />;
  }

  if (cartItems.length < 1) {
    return (
      <div className="text-center py-24 px-8 bg-card border border-(--border-color)">
        <ShoppingCart
          className="mx-auto mb-6 opacity-30"
          width={80}
          height={80}
        />
        <h2 className="font-playfair text-[2rem] font-semibold text-(--text-primary) mb-3.5">
          Your cart is empty
        </h2>
        <p className="text-lg text-(--text-secondary) mb-8">
          Start adding books to your cart to proceed with checkout.
        </p>
        <Link
          href={"/"}
          className="inline-block font-sans bg-(--accent) text-white py-3.5 px-8 text-sm tracking-wider uppercase font-medium transition-all duration-300 hover:bg-(--accent-light) hover:-translate-y-0.5 hover:shadow-[0_4px_12px_var(--shadow-color)]"
        >
          browse books
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 lg:gap-12">
      <div className="flex flex-col gap-8">
        <div className="bg-card border border-(--border-color) p-6 sm:p-8">
          {errorMessage && (
            <div className="bg-(--bg-error) text-(--text-error) border border-(--border-error) px-4 py-3 mb-6 font-sans text-sm">
              {errorMessage}
            </div>
          )}

          <h2 className="font-playfair text-3xl font-bold text-(--text-primary) mb-6 capitalize">
            shopping cart
          </h2>
          <CartItems />
          <button
            type="button"
            className="font-sans border border-red-700 text-red-700 py-2 px-6 mt-6 cursor-pointer text-xs tracking-wider uppercase transition-all duration-300 hover:bg-red-700 hover:text-white hover:-translate-y-0.5 flex-1"
            onClick={clearCart}
            disabled={cartItems.length < 1}
          >
            clear cart
          </button>
        </div>
      </div>

      <aside className="lg:sticky top-25 h-fit -order-1 lg:order-1">
        <SummaryCard />
      </aside>
    </div>
  );
};

export default CartClient;
