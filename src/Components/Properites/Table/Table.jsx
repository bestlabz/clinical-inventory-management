import React from 'react'
import { MdOutlineModeEdit } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';

const Table = ({headers, tableBody}) => {
  return (
    <>
     <table className="relative text-sm font-medium text-nowrap border-collapse font-poppins w-full ">
        <thead className=" text-[16px] font-semibold border-b-[2px] border-t-[2px] h-[10%] sticky top-0 bg-white">
          <tr>
            {headers?.map((head, i) => (
              <td
                key={i}
                className={` text-start py-2 px-10`}
              >
                {head?.title}
              </td>
            ))}
          </tr>
        </thead>
       
        <tbody className="bg-white">
          {tableBody?.map((item, i) => (
            <tr className="border-b font-medium text-start" key={i}>
              <td className={`py-2 px-10`}>{i + 1}</td>
              <td className={`py-2 px-10`}>{item?.name}</td>
              <td className={`py-2 px-10 flex items-center justify-start gap-3`}>
                <div className="w-[50px] h-[50px] overflow-hidden rounded-full">
                  <img
                    src={item?.doctor_image}
                    className="w-full h-full object-cover "
                  />
                </div>
                {item.doctor_name}
              </td>
              <td className={`py-2 px-10 `}>
                <p className='text-dark_purple border-[2px] border-[#dfc5fd] bg-[#f0e5fd] rounded-full text-center min-w-[100px]'>

                {item?.specialist}
                </p>
              </td>
              <td className={`py-2 px-10`}>
                {item?.appointment_time}
              </td>
              <td className={`py-2 px-10`}>
                <div className="flex items-center justify-start gap-6">
                  <MdOutlineModeEdit
                    size={20}
                    className="text-primary_color hover:text-blue-400 cursor-pointer"
                  />
                 
                </div>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </>
  )
}

export default Table