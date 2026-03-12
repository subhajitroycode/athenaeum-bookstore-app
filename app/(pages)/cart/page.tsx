import type { Metadata } from "next";
import CartClient from "./_components/CartClient";

export const metadata: Metadata = {
  title: "Cart",
  description:
    "This is the cart page for all the books that has been added to the cart.",
};

export default function page() {
  return (
    <section className="max-w-350 mx-auto pt-4 px-6 pb-8 sm:pt-6 sm:px-8 sm:pb-12 md:pt-8 md:px-12 md:pb-20 animate-fade-in-scale">
      <CartClient />
    </section>
  );
}
