import { useMemo, useState } from "react";

interface UsePaginationProps {
  totalItems: number;
  itemsPerPage?: number;
  initialPage?: number;
}

interface UsePaginationReturn<T> {
  currentPage: number;
  totalPages: number;
  startIndex: number;
  endIndex: number;
  setCurrentPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  goToPage: (page: number) => void;
  getPaginatedItems: (items: T[]) => T[];
}

export const usePagination = <T>({
  totalItems,
  itemsPerPage = 12,
  initialPage = 1,
}: UsePaginationProps): UsePaginationReturn<T> => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const totalPages = useMemo(
    () => Math.ceil(totalItems / itemsPerPage),
    [totalItems, itemsPerPage],
  );

  const startIndex = useMemo(
    () => (currentPage - 1) * itemsPerPage,
    [currentPage, itemsPerPage],
  );

  const endIndex = useMemo(
    () => startIndex + itemsPerPage,
    [startIndex, itemsPerPage],
  );

  const goToPage = (page: number) => {
    const pageNumber = Math.max(1, Math.min(page, totalPages));
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const getPaginatedItems = (items: T[]): T[] => {
    return items.slice(startIndex, endIndex);
  };

  return {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    setCurrentPage: goToPage,
    nextPage,
    prevPage,
    goToPage,
    getPaginatedItems,
  };
};
