import React from "react";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
// style using tailwindcss
// pagination toolbar for next and prev button and page number
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  };
  return (
    <div className="flex justify-center items-center my-5">
      <button
        className=" text-blue-500 font-bold py-2 px-4 rounded"
        onClick={() => handlePageChange(currentPage - 1)}
      >
      <FaChevronLeft
         className="inline"
      />
        Prev
      </button>
      <div className="mx-5
        italic text-md
      ">
        Page {currentPage} 
      </div>
      <button
        className=" text-blue-500 font-bold py-2 px-4 rounded"
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
        <FaChevronRight 
            className="inline"
        />
      </button>
    </div>
  );
}
export default Pagination;