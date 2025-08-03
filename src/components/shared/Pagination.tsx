// components/shared/pagination.tsx
"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface IProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    siblingCount?: number;
}

export default function Pagination({
    currentPage,
    totalPages,
    onPageChange,
    siblingCount = 1,
}: IProps) {
    if (totalPages <= 1) return null;

    const getPageRange = () => {
        const totalVisible = siblingCount * 2 + 5;

        if (totalPages <= totalVisible) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        const left = Math.max(currentPage - siblingCount, 2);
        const right = Math.min(currentPage + siblingCount, totalPages - 1);

        const pages: (number | "...")[] = [1];

        if (left > 2) pages.push("...");

        for (let i = left; i <= right; i++) {
            pages.push(i);
        }

        if (right < totalPages - 1) pages.push("...");

        pages.push(totalPages);

        return pages;
    };

    const pages = getPageRange();

    return (
        <div className="flex items-center justify-center gap-2 mt-6">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded-full text-sm font-medium bg-white text-black dark:bg-white/10 dark:text-white disabled:opacity-50"
            >
                <ChevronLeft size={16} />
            </button>

            {pages.map((page, i) =>
                page === "..." ? (
                    <span
                        key={`ellipsis-${i}`}
                        className="px-3 py-1 rounded-full text-sm font-medium text-gray-400"
                    >
                        ...
                    </span>
                ) : (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={cn(
                            "px-3 py-1 rounded-full text-sm font-medium",
                            page === currentPage
                                ? "bg-black text-white dark:bg-white dark:text-black"
                                : "bg-white text-black dark:bg-white/10 dark:text-white"
                        )}
                    >
                        {page}
                    </button>
                )
            )}

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 rounded-full text-sm font-medium bg-white text-black dark:bg-white/10 dark:text-white disabled:opacity-50"
            >
                <ChevronRight size={16} />
            </button>
        </div>
    );
}
