"use client";

import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useThemeStore } from "../store/theme-store";

const Header = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <header className="bg-card border-b border-(--border-color) sticky top-0 z-50 backdrop-blur-md transition-all duration-400 ease-in">
      <div className="max-w-350 mx-auto py-6 px-12 flex items-center justify-between gap-8">
        <Link
          className="text-(--text-primary) font-playfair text-[1.8rem] font-bold tracking-wider relative transition-colors duration-300 ease-in after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-(--accent) after:transition-[width] after:duration-300 after:ease-in-out hover:after:w-full"
          href="/"
        >
          Athenaeum
        </Link>

        <nav className="flex gap-10 flex-1 justify-center">
          <Link className="nav-link" href="/">
            Books
          </Link>
          <Link className="nav-link" href="/genres">
            Genres
          </Link>
          <Link className="nav-link" href="/bestsellers">
            Bestsellers
          </Link>
          <Link className="nav-link" href="/about">
            About
          </Link>
        </nav>

        <div className="flex items-center gap-6">
          <button
            onClick={toggleTheme}
            title="Toggle dark mode"
            className="bg-transparent border-none text-(--text-secondary) cursor-pointer text-lg p-2 transition-all duration-300 ease-in relative hover:text-(--accent) hover:-translate-y-0.5"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
          <Link
            href="/login"
            className="font-sans bg-transparent border-[1.5px] border-(--border-color) text-(--text-primary) px-[1.8rem] py-[0.6rem] cursor-pointer text-sm tracking-wider uppercase transition-all duration-300 ease-in hover:bg-(--accent) hover:border-(--accent) hover:text-white hover:-translate-y-0.5 hover:shadow-[0_4px_12px_var(--shadow)]"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
