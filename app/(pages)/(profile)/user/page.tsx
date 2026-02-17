"use client";

import { deleteAccount, signOutApp } from "@/app/actions/auth";
import SignInSkeleton from "@/app/components/layout/SignInSkeleton";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

function page() {
  const { data: session, isPending } = authClient.useSession();
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const initials = session?.user.name
    .split(" ")
    .map((namePart) => namePart[0])
    .join("")
    .toUpperCase();

  const handleSignOut = () => {
    setIsSigningOut(true);
    signOutApp();
  };

  const handleDeleteAccount = () => {
    setIsDeleting(true);
    deleteAccount();
  };

  return (
    <div className="max-w-200 my-8 md:my-16 mx-auto py-0 px-4 md:px-8 animate-fade-in-scale">
      {isPending ? (
        <SignInSkeleton />
      ) : (
        <div className="bg-card border border-(--border-color) py-8 px-6 md:p-12 shadow-[0_8px_24px_var(--shadow)]">
          <div className="text-center pb-8 mb-8 border-b border-(--border-color)">
            <div
              className="w-30 h-30 rounded-[50%] flex items-center justify-center font-playfair text-5xl text-white font-semibold mt-0 mx-auto mb-6 border-4 border-(--bg-primary) shadow-[0_4px_16px_var(--shadow)]"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%)",
              }}
            >
              {initials}
            </div>
            <h1 className="font-playfair text-[2rem] font-bold mt-2 text-(--text-primary)">
              {session?.user.name}
            </h1>
            <p className="font-sans text-(--text-secondary) mb-2">
              {session?.user.email}
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-2 md:gap-0 py-4 border-b border-(--border-color)">
              <div className="font-sans text-[0.9rem] uppercase tracking-wider text-(--text-secondary) w-full md:w-45 shrink-0">
                Full Name
              </div>
              <div className="text-[1.05rem] text-(--text-primary) flex-1">
                {session?.user.name}
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-0 py-4 border-b border-(--border-color)">
              <div className="font-sans text-[0.9rem] uppercase tracking-wider text-(--text-secondary) w-full md:w-45 shrink-0">
                Email Address
              </div>
              <div className="text-[1.05rem] text-(--text-primary) flex-1">
                {session?.user.email}
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-0 py-4 border-b border-(--border-color)">
              <div className="font-sans text-[0.9rem] uppercase tracking-wider text-(--text-secondary) w-full md:w-45 shrink-0">
                Email Verified
              </div>
              <div className="text-[1.05rem] text-(--text-primary) flex-1">
                {session?.user.emailVerified ? "Yes" : "No"}
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-0 py-4 border-b border-(--border-color)">
              <div className="font-sans text-[0.9rem] uppercase tracking-wider text-(--text-secondary) w-full md:w-45 shrink-0">
                Member Since
              </div>
              <div className="text-[1.05rem] text-(--text-primary) flex-1">
                {new Date(session?.user.createdAt || "").getFullYear()}
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-8 pt-8">
            <button
              disabled={isSigningOut}
              className={`font-sans bg-(--accent) text-white py-[0.9rem] px-8 cursor-pointer text-[0.9rem] tracking-wider uppercase transition-all duration-300 font-medium flex-1 hover:bg-(--accent-light) hover:-translate-y-0.5 hover:shadow-[0_4px_12px_var(--shadow-color)] ${isSigningOut ? "opacity-70 cursor-not-allowed" : ""}`}
              onClick={handleSignOut}
            >
              {isSigningOut ? "Signing Out..." : "Sign Out"}
            </button>
            <button
              disabled={isDeleting}
              className="font-sans border-[1.5px] border-red-700 text-red-700 py-[0.9rem] px-8 cursor-pointer text-[0.9rem] tracking-wider uppercase transition-all duration-300 hover:bg-red-700 hover:text-white hover:-translate-y-0.5 flex-1"
              onClick={handleDeleteAccount}
            >
              {isDeleting ? "Deleting Account..." : "Delete Account"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default page;
