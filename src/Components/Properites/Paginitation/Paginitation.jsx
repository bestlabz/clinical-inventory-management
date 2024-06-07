import React from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const Paginitation = ({PrePage, pageCount, currentpage, nextPage, changePage}) => {
  
  return (
    <>
     <button
          onClick={PrePage}
          className={`flex items-center justify-center  rounded-full ${currentpage !== 1 ? "text-navigationColor" : " text-gray-300"}   text-center cursor-pointer `}
        >
          <FaAngleLeft className={`${currentpage !== 1 ? "text-navigationColor" : " text-gray-300"}`} />
          Previous
        </button>
        {pageCount &&
          pageCount?.map((items) => (
            <span
              key={items}
              onClick={() => changePage({ id: items })}
              className={`${
                currentpage === items
                  ? "bg-navigationColor text-white transition-all duration-200"
                  : "bg-transparent text-navigationColor"
              } cursor-pointer rounded-md  items-center justify-center w-[30px] h-[30px] font-bold text-base 2xl:flex xl:flex lg:flex md:flex sm:hidden xs:hidden xss:hidden mobile:hidden`}
            >
              {items}
            </span>
          ))}
             {pageCount &&
            <span
              className={`bg-navigationColor text-white transition-all duration-200 cursor-pointer rounded-md w-[30px] h-[30px] font-bold text-base 2xl:hidden xl:hidden lg:hidden md:hidden sm:block xs:block xss:block mobile:block`}
            >
              <h1 className=' w-full h-full flex items-center justify-center'>
              {currentpage}

              </h1>
            </span>
          }
        <button
     
          onClick={nextPage}
          className={`flex items-center justify-center  rounded-full ${currentpage < pageCount?.length ? "text-navigationColor" : "text-gray-300"}   text-center cursor-pointer `}
        >
          next
          <FaAngleRight className={`${currentpage < pageCount?.length ? "text-navigationColor" : ""} `} />
        </button>
    </>
  )
}

export default Paginitation