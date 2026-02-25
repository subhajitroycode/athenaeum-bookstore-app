import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
  description:
    "View and manage your profile information, order history, and account settings.",
};

export default function ProfileLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <section>{children}</section>;
}
