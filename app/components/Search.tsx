"use client";

import { useState } from "react";
import { searchBooks } from "../actions/books";

const Search = () => {
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = async (formData: FormData) => {
    const results = await searchBooks(formData);
    setResults(results);
    console.log(results);
  };

  return (
    <section className="max-w-350 mx-auto pt-16 px-12 pb-12 text-center animate-fade-in-scale">
      <h1 className="font-playfair text-5xl/relaxed font-semibold mb-4 text-(--text-primary) tracking-wide">
        Discover Your Next Read
      </h1>
      <p className="text-xl text-(--text-secondary) mb-10 font-light">
        Explore our curated collection of timeless literature
      </p>

      <form className="max-w-175 mx-auto relative" action={handleSearch}>
        <input
          type="text"
          name="query"
          id="query"
          placeholder="Search by title, author, or ISBN..."
          className="w-full pt-5 pr-14 pb-5 pl-6 text-[1.05rem] border-2 border-(--border) bg-card text-(--text-primary) outline-none transition-all duration-300 focus:border-(--accent) focus:shadow-[0_0_0_4px_rgba(139,69,19,0.1)] placeholder:text-(--text-secondary) placeholder:opacity-60"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-(--accent) text-white py-[0.7rem] px-6 cursor-pointer text-[0.95rem] font-sans font-medium transition-all duration-300 hover:bg-(--accent-light)"
        >
          Search
        </button>
      </form>
    </section>
  );
};

export default Search;
