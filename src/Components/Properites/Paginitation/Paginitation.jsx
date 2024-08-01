import React from "react";

//Third party libraries
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const Paginitation = ({ currentpage, PrePage, nextPage, pageNumbers }) => {

  console.log('pageNumbers', pageNumbers);
  return (
    <>
      <button
        onClick={PrePage}
        className={`flex items-center justify-center  h-[30px] ${
          currentpage !== 1 ? "text-balck" : " text-gray-300"
        }   text-center cursor-pointer `}
      >
        <FaAngleLeft
          className={`${
            currentpage !== 1 ? "text-balck" : " text-gray-300"
          }`}
        />
        Previous
      </button>
      {pageNumbers &&
        pageNumbers?.map((items) => (
          <span
            key={items}
            // onClick={() => changePage({ id: items })}
            className={`${
              currentpage === items
                ? "bg-primary_color text-white transition-all duration-200 mx-2"
                : "bg-transparent text-navigationColor"
            } cursor-pointer rounded-md   items-center justify-center w-[30px] h-[30px] font-bold text-base 2xl:flex xl:flex lg:flex md:flex sm:hidden xs:hidden xss:hidden mobile:hidden`}
          >
            {items}
          </span>
        ))}
      {pageNumbers && (
        <span
          className={`bg-primary_color mx-2 text-white transition-all duration-200 cursor-pointer rounded-md w-[30px] h-[30px] font-bold text-base 2xl:hidden xl:hidden lg:hidden md:hidden sm:block xs:block xss:block mobile:block`}
        >
          <h1 className=" w-full h-full flex items-center justify-center">
            {currentpage}
          </h1>
        </span>
      )}
      <button
        onClick={nextPage}
        className={`flex items-center justify-center   h-[30px]  ${
          currentpage === pageNumbers[pageNumbers?.length - 1]
            ? "text-gray-300"
            : "text-balck"
        }   text-center cursor-pointer `}
      >
        next
        <FaAngleRight
          className={`${
            currentpage === pageNumbers[pageNumbers?.length - 1]
              ? ""
              : "text-balck"
          } `}
        />
      </button>
    </>
  );
};

export default Paginitation;
