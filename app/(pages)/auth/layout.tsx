import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication",
  description:
    "Sign in or create an account to access your personalized book collection and recommendations.",
};

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="flex flex-1 items-center justify-center py-8 px-4 sm:py-12 sm:px-8 animate-fade-in-scale">
      {children}
    </section>
  );
}
