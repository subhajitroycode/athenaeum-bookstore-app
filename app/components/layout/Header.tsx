"use client";

import { Moon, ShoppingBag, Sun } from "lucide-react";
import Link from "next/link";
import { useThemeStore } from "../../store/theme-store";
import { authClient } from "@/lib/auth-client";
import UserDropdown from "./UserDropdown";
import { usePathname, useRouter } from "next/navigation";
import { useCartStore } from "@/app/store/cart-store";
import { useEffect } from "react";

const Header = () => {
  const { theme, toggleTheme } = useThemeStore();
  // const { count, fetchInitialCount } = useCartStore();
  const { data: session, isPending } = authClient.useSession();
  const pathname = usePathname();
  const router = useRouter();

  // useEffect(() => {
  //   fetchInitialCount();
  // }, [session, fetchInitialCount]);

  return (
    <header className="bg-card border-b border-(--border-color) sticky top-0 z-50 backdrop-blur-md transition-all duration-400 ease-in">
      <div className="max-w-350 mx-auto py-5 px-4 sm:px-8 lg:py-6 lg:px-12 flex flex-wrap lg:flex-nowrap items-center justify-between gap-y-2 sm:gap-x-32">
        <Link
          className="text-(--text-primary) font-playfair text-2xl sm:text-[1.8rem] font-bold tracking-wider relative transition-colors duration-300 ease-in after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-(--accent) after:transition-[width] after:duration-300 after:ease-in-out hover:after:w-full"
          href="/"
        >
          Athenaeum
        </Link>

        <nav className="flex gap-6 lg:gap-10 flex-1 justify-between sm:justify-start mt-4 lg:mt-0 lg:justify-center order-3 lg:order-0 w-full lg:w-auto">
          <Link
            className={`nav-link ${pathname === "/" ? "active" : ""}`}
            href="/"
          >
            Books
          </Link>
          <Link
            className={`nav-link ${pathname === "/genres" ? "active" : ""}`}
            href="/genres"
          >
            Genres
          </Link>
          {session && (
            <Link
              className={`nav-link ${pathname === "/favourites" ? "active" : ""}`}
              href="/favourites"
            >
              Favourites
            </Link>
          )}
          <Link
            className={`nav-link ${pathname === "/about" ? "active" : ""}`}
            href="/about"
          >
            About
          </Link>
        </nav>

        <div
          className={`flex items-center gap-2 sm:gap-6 ${session ? "ml-12 md:ml-28 lg:ml-0" : "ml-0"}`}
        >
          {session && (
            <div className="relative">
              <button
                type="button"
                className="text-(--text-secondary) cursor-pointer text-lg p-2 transition-all duration-300 relative hover:text-(--accent) hover:-translate-y-0.5"
                onClick={() => router.push("/cart")}
              >
                <ShoppingBag className="w-5 h-5" />
                {/* {count > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-(--accent) text-white font-sans text-xs font-semibold w-4 h-4 rounded-full flex items-center justify-center pointer-events-none">
                    {count > 99 ? "99+" : count}
                  </span>
                )} */}
              </button>
            </div>
          )}
          <button
            onClick={toggleTheme}
            title="Toggle dark mode"
            className="text-(--text-secondary) cursor-pointer text-lg p-2 transition-all duration-300 relative hover:text-(--accent) hover:-translate-y-0.5"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
          {isPending ? (
            <div className="w-8 h-8 rounded-full bg-(--bg-secondary) animate-pulse" />
          ) : session ? (
            <UserDropdown />
          ) : (
            <button
              className="font-sans bg-transparent border-[1.5px] border-(--border-color) text-(--text-primary) px-[1.8rem] py-[0.6rem] cursor-pointer text-sm tracking-wider uppercase transition-all duration-300 ease-in hover:bg-(--accent) hover:border-(--accent) hover:text-white hover:-translate-y-0.5 hover:shadow-[0_4px_12px_var(--shadow)]"
              type="button"
              onClick={() => router.push("/auth?tab=signin")}
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
