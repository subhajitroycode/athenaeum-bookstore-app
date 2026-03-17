import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Details",
  description:
    "Explore detailed information about your favorite books, including descriptions, publication details, and user interactions.",
};

export default function BookLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
