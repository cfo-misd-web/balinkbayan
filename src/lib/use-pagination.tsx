
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";

import { Button,  } from "@/components/ui/button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    const halfVisible = Math.floor(maxVisiblePages / 2);

    let startPage = Math.max(1, currentPage - halfVisible);
    let endPage = Math.min(totalPages, currentPage + halfVisible);

    if (endPage - startPage + 1 < maxVisiblePages) {
      if (currentPage <= halfVisible) {
        endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
      } else if (currentPage + halfVisible >= totalPages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <Button
          key={i}
          variant={i === currentPage ? "default" : "outline"}
          onClick={() => onPageChange(i)}
        >
          {i}
        </Button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <Button
        variant="outline"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeftIcon className="h-4 w-4" />
      </Button>
      {renderPageNumbers()}
      <Button
        variant="outline"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRightIcon className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default Pagination;
