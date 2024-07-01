import React from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

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
          <span className="  flex items-center h-full gap-2">
            Next <FaAngleRight />
          </span>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={
          <span className="  flex items-center h-full gap-2">
            <FaAngleLeft /> Previous
          </span>
        }
        className="w-full flex item-center justify-end px-3 overflow-x-auto space-x-3 "
        pageClassName=" w-[35px] h-[35px] flex items-center justify-center rounded-lg hover:bg-primary_color hover:text-white"
        activeClassName="bg-primary_color text-white"
        // previousClassName=" absolute left-5"
        // nextClassName="absolute right-5"
      />
    </>
  );
};

export default Pagination;
