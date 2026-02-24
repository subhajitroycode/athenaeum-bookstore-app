"use client";

import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRef } from "react";

const SearchComponent = ({ genre }: { genre: string }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(async () => {
      const params = new URLSearchParams(searchParams);

      if (query) params.set("q", query);
      else params.delete("q");

      replace(`${pathname}?${params.toString()}`);
    }, 500);
  };

  return (
    <div className="relative flex-1 sm:max-w-sm md:max-w-md">
      <Search
        width={16}
        height={16}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-(--text-secondary) pointer-events-none"
      />
      <input
        type="text"
        placeholder={`Search within ${genre}...`}
        className="w-full py-3 pr-4 pl-11 text-[0.95rem] border border-(--border-color) bg-card text-(--text-primary) outline-none transition-all duration-300 focus:border-(--accent) focus:shadow-[0_0_0_3px_rgba(139,69,19,0.1)] placeholder:text-(--text-secondary) placeholder:opacity-50"
        defaultValue={searchParams.get("q")?.toString()}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchComponent;
