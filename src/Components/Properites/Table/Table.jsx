import React, { useState } from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import { TbEye } from "react-icons/tb";
import Toggle from "../toggle/toggle";
import ModelResponsive from "./ModelResponsive";

const Table = ({
  headers,
  tableBody,
  tableName,
  model,
  setModel,
  handleChange,
  clear,
  setClear,
  loader
}) => {
  const [details, setDetails] = useState({
    id: "",
    value: "",
  });

  return (
    <>
      <table className="relative text-sm font-medium text-nowrap border-collapse font-poppins w-full ">
        <thead className=" text-[16px] font-semibold border-b-[2px] border-t-[2px] h-[10%] sticky top-0 bg-white">
          <tr>
            {headers?.map((head, i) => (
              <td key={i} className={` text-start py-2 px-10`}>
                {head?.title}
              </td>
            ))}
          </tr>
        </thead>

        <tbody className="bg-white">
          {tableBody?.map((item, i) => {
            if (tableName === "Patients") {
              return (
                <tr className="border-b font-medium text-start" key={i}>
                  <td className={`py-2 px-10`}>{i + 1}</td>
                  <td className={`py-2 px-10`}>{item?.name}</td>
                  <td
                    className={`py-2 px-10 flex items-center justify-start gap-3`}
                  >
                    <div className="w-[50px] h-[50px] overflow-hidden rounded-full">
                      {item.doctor_image && (
                        <img
                          src={item?.doctor_image}
                          className="w-full h-full object-cover "
                        />
                      )}
                    </div>
                    {item.doctor_name}
                  </td>
                  <td className={`py-2 px-10 `}>
                    <p className="text-dark_purple border-[2px] border-[#dfc5fd] bg-[#f0e5fd] rounded-full w-[100px] h-[25px] flex items-center justify-center">
                      {item?.specialist}
                    </p>
                  </td>
                  <td className={`py-2 px-10`}>{item?.appointment_time}</td>
                  <td className={`py-2 px-10`}>
                    <div className="flex items-center justify-start gap-6">
                      <TbEye
                        size={30}
                        className="text-gray-400 hover:text-blue-400 cursor-pointer"
                      />
                    </div>
                  </td>
                </tr>
              );
            }
            if (tableName === "Doctor") {
              return (
                <tr className="border-b font-medium text-start" key={i}>
                  <td className={`py-2 px-10`}>{i + 1}</td>
                  <td
                    className={`py-2 px-10 flex items-center justify-start gap-3`}
                  >
                    <div className="w-[50px] h-[50px] overflow-hidden rounded-full">
                      {item.doctor_image && (
                        <img
                          src={item?.doctor_image}
                          className="w-full h-full object-cover "
                        />
                      )}
                    </div>
                    {item.doctor_name}
                  </td>
                  <td className={`py-2 px-10 `}>
                    <p className="text-dark_purple border-[2px] border-[#dfc5fd] bg-[#f0e5fd] rounded-full w-[100px] h-[25px] flex items-center justify-center">
                      {item?.specialist}
                    </p>
                  </td>
                  <td className={`py-2 px-10`}>
                    {item?.availability ? (
                      <p className="text-green_dark border-[2px] border-green-100 bg-green-50 rounded-full text-[14px] w-[80px] h-[25px] flex items-center justify-center">
                        Available
                      </p>
                    ) : (
                      <p className="text-orange_dark border-[1px] border-orange-200 bg-orange-100 rounded-full w-[80px] h-[25px] text-[14px] flex items-center justify-center">
                        On leave
                      </p>
                    )}
                  </td>
                  <td className={`py-2 px-10`}>
                    <div className=" flex items-center space-x-4">
                      <p
                        className={`${
                          !item.status ? "text-red-400" : "text-gray-300"
                        } font-semibold w-[60px] text-end`}
                      >
                        {item.status ? "UnBlock" : "Block"}
                      </p>
                      <Toggle
                        checked={item.status}
                        onChange={(e) => {
                          setDetails({
                            id: item.id,
                            value: e,
                          });
                          setModel(!model);
                        }}
                      />
                    </div>
                  </td>
                  <td className={`py-2 px-10`}>
                    <div className="flex items-center justify-start gap-6">
                      <TbEye
                        size={30}
                        className="text-gray-300 hover:text-blue-400 cursor-pointer"
                      />
                    </div>
                  </td>
                </tr>
              );
            }
            if (tableName === "Receptionist") {
              return (
                <tr className="border-b font-medium text-start" key={i}>
                  <td className={`py-2 px-10`}>{i + 1}</td>
                  <td
                    className={`py-2 px-10 flex items-center justify-start gap-3`}
                  >
                    <div className="w-[50px] h-[50px] overflow-hidden rounded-full">
                      <img
                        src={item?.receptionist_image}
                        className="w-full h-full object-cover "
                      />
                    </div>
                    {item.receptionist_name}
                  </td>
                  <td className={`py-2 px-10`}>
                    {item?.availability ? (
                      <p className="text-green_dark border-[2px] border-green-100 bg-green-50 rounded-full text-[14px] w-[80px] h-[25px] flex items-center justify-center">
                        Available
                      </p>
                    ) : (
                      <p className="text-orange_dark border-[1px] border-orange-200 bg-orange-100 rounded-full w-[80px] h-[25px] text-[14px] flex items-center justify-center">
                        On leave
                      </p>
                    )}
                  </td>
                  <td className={`py-2 px-10`}>
                    <div className=" flex items-center space-x-4">
                      <p
                        className={`${
                          !item.status ? "text-red-400" : "text-gray-300"
                        } font-semibold w-[60px] text-end`}
                      >
                        {item.status ? "UnBlock" : "Block"}
                      </p>
                      <Toggle
                        checked={item.status}
                        onChange={(e) => {
                          setDetails({
                            id: item.id,
                            value: e,
                          });
                          setModel(!model);
                        }}
                      />
                    </div>
                  </td>
                  <td className={`py-2 px-10`}>
                    <div className="flex items-center justify-start gap-6">
                      <TbEye
                        size={30}
                        className="text-gray-300 hover:text-blue-400 cursor-pointer"
                      />
                    </div>
                  </td>
                </tr>
              );
            }
            if (tableName === "Medicine") {
              return (
                <tr className="border-b font-medium text-start" key={i}>
                  <td className={`py-4 px-10`}>{item.medicine_name}</td>
                  <td className={`py-4 px-10`}>{item.dosage_form}</td>
                  <td className={`py-4 px-10`}>
                    {item.dosage_strength} {item.dosage_unit}
                  </td>
                  <td className={`py-4 px-10`}>
                    {item?.status === "Available" ? (
                      <p className="text-green_dark border-[2px] border-green-100 bg-green-50 rounded-full text-[14px] w-[100px] h-[25px] flex items-center justify-center">
                        Available
                      </p>
                    ) : (
                      <p className="text-orange_dark border-[1px] border-orange-200 bg-orange-100 rounded-full w-[100px] h-[25px] text-[14px] flex items-center justify-center">
                        Out of stock
                      </p>
                    )}
                  </td>
                  {/* <td className={`py-4 px-10`}>
                    <div className="flex items-center justify-end gap-6">
                      <MdOutlineModeEdit
                        size={20}
                        className="text-primary_color hover:text-blue-400 cursor-pointer"
                      />
                    </div>
                  </td> */}
                </tr>
              );
            }
          })}
        </tbody>
      </table>

        <ModelResponsive
          modalpopup={model}
          openModal={setModel}
          trigger={handleChange}
          details={details}
          clear={clear}
          setClear={setClear}
          loader={loader}
        />
    </>
  );
};

export default Table;
