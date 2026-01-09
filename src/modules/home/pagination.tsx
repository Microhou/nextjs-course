"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

interface PaginationProps {
  totalPages: number;
}

const Pagination = ({ totalPages }: PaginationProps) => {
  const currentPage = useSearchParams().get("page") || "1";
  // const [time, setTime] = useState(0);
  // useEffect(() => {
  //   setTime(Date.now());
  // }, [currentPage]);
  // const time = Date.now();
  return (
    <div className="flex gap-4 text-sm font-semibold">
      {Array.from({ length: totalPages }).map((_, index) => (
        <Link
          href={`?page=${index + 1}`}
          key={index}
          className={`${currentPage === `${index + 1}` ? "text-white" : "text-white/50"}`}
        >
          {index + 1}
        </Link>
      ))}
      {/* {time.toString()} */}
    </div>
  );
};

export default Pagination;
