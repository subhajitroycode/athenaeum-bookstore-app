"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const FilterBooks = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    const params = new URLSearchParams(searchParams);
    params.set("sort", value);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <select
      name="sort-filter"
      id="sort-filter"
      className="font-sans py-3 px-5 text-sm border border-(--border-color) bg-card text-(--text-primary) cursor-pointer uppercase tracking-wider transition-all duration-300 appearance-none pr-10 hover:border-(--accent)"
      defaultValue={searchParams.get("sort")?.toString()}
      onChange={handleFilter}
    >
      <option value="newest">Newest First</option>
      <option value="oldest">Oldest First</option>
      <option value="price-low">Price: Low to High</option>
      <option value="price-high">Price: High to Low</option>
      <option value="title-asc">Title: A to Z</option>
      <option value="author-asc">Author: A to Z</option>
    </select>
  );
};

export default FilterBooks;
