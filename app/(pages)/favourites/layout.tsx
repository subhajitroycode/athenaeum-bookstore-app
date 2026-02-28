import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Favourites",
  description: "Books you've saved for later",
};

export default function FavouritesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-350 mx-auto px-4 sm:px-8 md:px-12">
      {children}
    </section>
  );
}
