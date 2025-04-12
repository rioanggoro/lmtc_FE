import React from "react";
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}
const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const getPages = () => {
    const pages = [];

    if (totalPages <= 10) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 6) {
        pages.push(...[1, 2, 3, 4, 5, 6, 7, "...", totalPages - 1, totalPages]);
      } else if (currentPage >= totalPages - 5) {
        pages.push(
          ...[
            1,
            2,
            "...",
            totalPages - 6,
            totalPages - 5,
            totalPages - 4,
            totalPages - 3,
            totalPages - 2,
            totalPages - 1,
            totalPages,
          ],
        );
      } else {
        pages.push(
          1,
          2,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages - 1,
          totalPages,
        );
      }
    }

    return pages;
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="text-sm text-gray-700">
        Showing {(currentPage - 1) * 30 + 1} to{" "}
        {Math.min(currentPage * 30, 1736)} of 1736 results
      </div>

      <div className="flex items-center gap-1">
        {/* Prev Button */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="rounded border px-3 py-1 text-sm hover:bg-gray-100 disabled:opacity-50"
        >
          « Previous
        </button>

        {/* Page Numbers */}
        {getPages().map((page, index) =>
          page === "..." ? (
            <span key={index} className="px-2 py-1 text-gray-500">
              ...
            </span>
          ) : (
            <button
              key={index}
              onClick={() => typeof page === "number" && onPageChange(page)}
              className={`rounded border px-3 py-1 text-sm ${
                page === currentPage
                  ? "bg-blue-600 text-white"
                  : "text-blue-600 hover:bg-blue-100"
              }`}
            >
              {page}
            </button>
          ),
        )}

        {/* Next Button */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="rounded border px-3 py-1 text-sm hover:bg-gray-100 disabled:opacity-50"
        >
          Next »
        </button>
      </div>
    </div>
  );
};

export default Pagination;
