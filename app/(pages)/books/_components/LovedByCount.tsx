"use client";

import { useBookStore } from "@/app/store/book-store";
import { useEffect } from "react";

const LovedByCount = ({ initialCount }: { initialCount: number }) => {
  const { lovedByCount, setLovedByCount } = useBookStore();

  useEffect(() => {
    setLovedByCount(initialCount);
  }, [initialCount]);

  return (
    <div className="px-6 py-5 sm:border-r border-(--border-color)">
      <p className="font-sans text-[0.78rem] uppercase tracking-widest text-(--text-secondary) mb-1">
        loved by
      </p>
      <p className="font-playfair text-[1.1rem] font-semibold text-(--text-primary)">
        {lovedByCount} people
      </p>
    </div>
  );
};

export default LovedByCount;
