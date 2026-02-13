interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  showPageInfo?: boolean;
  scrollTargetRef?: React.RefObject<HTMLElement>;
}

const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
  showPageInfo = true,
  scrollTargetRef,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const goToPage = (page: number) => {
    onPageChange(page);

    if (scrollTargetRef?.current) {
      const headerOffset = 100;
      const elementPosition =
        scrollTargetRef.current.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) goToPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) goToPage(currentPage - 1);
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages,
        );
      }
    }

    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="mt-12 flex flex-col items-center gap-6">
      {showPageInfo && (
        <p className="font-sans text-sm text-(--text-secondary)">
          Showing {startIndex + 1} to {Math.min(endIndex, totalItems)} of{" "}
          {totalItems} items
        </p>
      )}

      <div className="flex items-center gap-2 max-sm:flex-wrap max-sm:justify-center">
        <button
          onClick={goToPrevPage}
          disabled={currentPage === 1}
          className="font-sans px-4 py-2 border-[1.5px] border-(--border-color) text-(--text-primary) text-sm uppercase tracking-wider transition-all duration-300 hover:border-(--accent) hover:text-(--accent) disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-(--border-color) disabled:hover:text-(--text-primary) max-sm:order-1"
        >
          previous
        </button>

        <div className="flex items-center gap-1">
          {getPageNumbers().map((page, index) =>
            typeof page === "number" ? (
              <button
                key={index}
                onClick={() => goToPage(page)}
                className={`font-sans min-w-10 px-3 py-2 border-[1.5px] text-sm transition-all duration-300 ${currentPage === page ? "bg-(--accent) border-(--accent) text-white" : "border-(--border-color) text-(--text-primary) hover:border-(--accent) hover:text-(--accent)"}`}
              >
                {page}
              </button>
            ) : (
              <span key={index} className="px-2 text-(--text-secondary)">
                {page}
              </span>
            ),
          )}
        </div>

        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="font-sans px-4 py-2 border-[1.5px] border-(--border-color) text-(--text-primary) text-sm uppercase tracking-wider transition-all duration-300 hover:border-(--accent) hover:text-(--accent) disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-(--border-color) disabled:hover:text-(--text-primary) max-sm:order-1"
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
