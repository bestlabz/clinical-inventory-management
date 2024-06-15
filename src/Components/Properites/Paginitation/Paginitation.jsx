import React from "react";
import {
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

import ReactPaginate from "react-paginate";

const Pagination = ({
  PrePage,
  pageCount,
  currentpage,
  nextPage,
  changePage,
}) => {
  // const getPagesCut = ({ pagesCutCount = 2 }) => {
  //   const ceiling = Math.ceil(pagesCutCount / 2);
  //   const floor = Math.floor(pagesCutCount / 2);

  //   if (pageCount <= pagesCutCount) {
  //     return { start: 1, end: Number(pageCount) };
  //   } else if (Number(currentpage) <= ceiling) {
  //     return { start: 1, end: pagesCutCount };
  //   } else if (Number(currentpage) + floor >= Number(pageCount)) {
  //     return {
  //       start: Number(pageCount) - Number(pagesCutCount) + 1,
  //       end: Number(pageCount),
  //     };
  //   } else {
  //     return {
  //       start: Number(currentpage) - ceiling + 1,
  //       end: Number(currentpage) + floor,
  //     };
  //   }
  // };

  // const { start, end } = getPagesCut({ pagesCutCount: 3 }); // Adjust pagesCutCount as needed

  // const pageNumbers = Array.from(
  //   { length: end - start + 1 },
  //   (_, i) => start + i
  // );

  const handlePageClick = ({ selected }) => {
    return changePage({ id: selected + 1 });
  };
  return (
    <>

      <ReactPaginate
        breakLabel={
          <span className="flex items-center justify-center px-4 py-2">...</span>
        }
        nextLabel={
          <span className=" w-[100px] h-10 flex items-center justify-center transition-all duration-300  bg-white border-[1px] border-[#d3d3d3] hover:bg-primary_color hover:text-white rounded-md mr-4 gap-2">
            Next <FaArrowRight />
          </span>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={
          <span className=" w-[110px] gap-2 h-10 flex items-center justify-center  border-[1px] border-[#d3d3d3] hover:bg-primary_color hover:text-white bg-white transition-all duration-300 rounded-md mr-4">
            <FaArrowLeft /> Previous
          </span>
        }
        className="w-full flex item-center justify-center mt-4 mb-4 overflow-x-auto"
        pageClassName=" px-4 py-2 flex items-center justify-center rounded-md hover:bg-primary_color hover:text-white mr-4"
        activeClassName="bg-primary_color text-white"
        previousClassName=" absolute left-5"
        nextClassName="absolute right-5"
      />
    </>
  );
};

export default Pagination;
