"use client";

import { useCartStore } from "@/app/store/cart-store";
import { Shield } from "lucide-react";
import { useRouter } from "next/navigation";

const SummaryCard = () => {
  const { cartItems } = useCartStore();
  const router = useRouter();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.book.price * item.quantity,
    0,
  );
  const shippingRate = 0.1;
  const taxRate = 0.08;
  const shipping = subtotal * shippingRate;
  const tax = subtotal * taxRate;
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-card border border-(--border-color) p-6 sm:p-8">
      <h3 className="font-playfair text-2xl font-bold text-(--text-primary) mb-6 pb-4 border-b border-b-(--border-color) capitalize">
        order summary
      </h3>

      <div className="flex justify-between items-center py-3 font-sans text-sm">
        <span className="text-(--text-secondary)">
          Subtotal ({cartItems?.length})
        </span>
        <span className="text-(--text-primary) font-medium">
          ${subtotal.toFixed(2)}
        </span>
      </div>
      <div className="flex justify-between items-center py-3 font-sans text-sm">
        <span className="text-(--text-secondary)">Shipping (10%)</span>
        <span className="text-(--text-primary) font-medium">
          ${shipping.toFixed(2)}
        </span>
      </div>
      <div className="flex justify-between items-center py-3 font-sans text-sm">
        <span className="text-(--text-secondary)">Tax (8%)</span>
        <span className="text-(--text-primary) font-medium">
          ${tax.toFixed(2)}
        </span>
      </div>

      <div className="h-px bg-(--border-color) my-4"></div>

      <div className="flex justify-between items-center py-4 mt-2 border-t-2 border-(--border-color) font-playfair font-bold">
        <span className="text-xl text-(--text-primary)">Total</span>
        <span className="text-2xl text-(--accent)">${total.toFixed(2)}</span>
      </div>

      <button
        className="w-full font-sans bg-(--accent) text-white p-5 cursor-pointer text-sm tracking-[0.08em] uppercase transition-all duration-300 font-medium mt-6 relative overflow-hidden before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-linear-90 before:from-transparent before:via-[rgba(255,255,255,0.2)] before:to-transparent before:transition-[left] before:duration-500 hover:bg-(--accent-light) hover:-translate-y-0.5 hover:shadow-[0_8px_20px_var(--shadow-color)] hover:before:left-full"
        type="button"
        onClick={() => router.push("/checkout")}
      >
        Proceed to Payment
      </button>

      <div className="flex items-center justify-center gap-2 mt-4 font-sans text-xs text-(--text-secondary) uppercase tracking-wider">
        <Shield width="14px" height="14px" />
        Secure Checkout
      </div>
    </div>
  );
};

export default SummaryCard;
