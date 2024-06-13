import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const Pagination = ({
  PrePage,
  pageCount,
  currentpage,
  nextPage,
  changePage,
}) => {
  const getPagesCut = ({ pagesCutCount = 2 }) => {
    const ceiling = Math.ceil(pagesCutCount / 2);
    const floor = Math.floor(pagesCutCount / 2);

    if (pageCount <= pagesCutCount) {
      return { start: 1, end: Number(pageCount) };
    } else if (Number(currentpage) <= ceiling) {
      return { start: 1, end: pagesCutCount };
    } else if (Number(currentpage) + floor >= Number(pageCount)) {
      return {
        start: Number(pageCount) - Number(pagesCutCount) + 1,
        end: Number(pageCount),
      };
    } else {
      return {
        start: Number(currentpage) - ceiling + 1,
        end: Number(currentpage) + floor,
      };
    }
  };

  const { start, end } = getPagesCut({ pagesCutCount: 3 }); // Adjust pagesCutCount as needed

  const pageNumbers = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  return (
    <>
      <button
        onClick={PrePage}
        disabled={currentpage === 1}
        className={`flex items-center justify-center gap-3 border-[2px] px-3 py-1 rounded-md ${
          currentpage !== 1 ? "text-black" : "text-gray-300"
        } text-center cursor-pointer`}
      >
        <FaArrowLeft
          className={`${currentpage !== 1 ? "text-black" : "text-gray-300"}`}
        />
        Previous
      </button>
      <div className="flex-1 flex items-center justify-center gap-4">
        {pageNumbers.map((items) => (
          <span
            key={items}
            onClick={() => changePage({ id: items })}
            className={`${
              currentpage === items
                ? "bg-black text-white transition-all duration-200"
                : "bg-transparent text-black"
            } cursor-pointer rounded-md items-center justify-center w-[30px] h-[30px] font-bold text-base 2xl:flex xl:flex lg:flex md:flex sm:hidden xs:hidden xss:hidden mobile:hidden`}
          >
            {items}
          </span>
        ))}
      </div>
      {pageCount && (
        <span
          className={`bg-black text-white transition-all duration-200 cursor-pointer rounded-md w-[30px] h-[30px] font-bold text-base 2xl:hidden xl:hidden lg:hidden md:hidden sm:block xs:block xss:block mobile:block`}
        >
          <h1 className="w-full h-full flex items-center justify-center">
            {currentpage}
          </h1>
        </span>
      )}
      <button
        onClick={nextPage}
        disabled={currentpage === pageCount}
        className={`flex items-center justify-center gap-3 border-[2px] px-3 py-1 rounded-md ${
          currentpage !== pageCount ? "text-black" : "text-gray-300"
        } text-center cursor-pointer`}
      >
        Next
        <FaArrowRight
          className={`${currentpage !== pageCount ? "text-black" : "text-gray-300"}`}
        />
      </button>
    </>
  );
};

export default Pagination;
