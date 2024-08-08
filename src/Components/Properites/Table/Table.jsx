import React, { useState } from "react";
import { TbEye } from "react-icons/tb";
import Toggle from "../toggle/toggle";
import ModelResponsive from "./ModelResponsive";
import { FaTrashAlt } from "react-icons/fa";
import dayjs from "dayjs";
import { ClimbingBoxLoader, ClipLoader } from "react-spinners";

const Table = ({
  headers,
  tableBody,
  tableName,
  model,
  setModel,
  handleChange,
  clear,
  setClear,
  loader,
  setviewPage,
  id,
  filtervalue,
  setAction = "",
  date,
  tableLoader,
}) => {
  const [details, setDetails] = useState({
    id: "",
    value: "",
  });
  const [popUpModel, setPopUpModel] = useState("");


  // Current date
  const currentDateFormat = dayjs().format('YYYY-MM-DD')
  const currentTime = dayjs().format('HH:mm:ss')

  return (
    <>
      <table className="relative text-sm font-medium text-nowrap border-collapse font-poppins w-full ">
        <thead className=" text-[16px] font-semibold border-b-[2px] border-t-[2px] h-[10%] sticky z-30 top-0 bg-white">
          <tr>
            {tableName === "Doctor" || tableName === "Receptionist" ? (
              <>
                {headers()?.map((head, i) => (
                  <td key={i} className={` text-start py-2 px-10`}>
                    {head?.title}
                  </td>
                ))}
              </>
            ) : (
              <>
                {headers?.map((head, i) => (
                  <td key={i} className={` text-start py-2 px-10`}>
                    {head?.title}
                  </td>
                ))}
              </>
            )}
          </tr>
        </thead>

        <tbody className="bg-white">
          {tableLoader && (
            <div className=" w-full h-full flex items-center justify-center absolute">
              <ClipLoader size={40} color="#000" />
            </div>
          )}

          {!tableLoader && tableBody.length === 0 && (
            <div className=" w-full h-full flex items-center justify-center absolute">
              <h1 className="text-[22px] text-center">No record found</h1>
            </div>
          )}

          {!tableLoader &&
            tableBody?.length !== 0 &&
            tableBody?.map((item, i) => {
              const DateString = item?.subscription_enddate?.split(" ")?.[0];
            const DateTime = item?.subscription_enddate?.split(" ")?.[1];
            const dueDate = dayjs(DateString).format('YYYY-MM-DD')
            const planDate = `${dueDate}T${DateTime}`;
            const currentDate  = `${currentDateFormat}T${currentTime}`; // Example of another date
            const planDateObj = dayjs(planDate);
            const currentDateObj = dayjs(currentDate);

            // Check if date is greater than otherDate
            const isGreaterThan = currentDateObj.isAfter(planDateObj);
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
                      <p className="text-dark_purple border-[2px] border-[#dfc5fd] bg-[#f0e5fd] rounded-full flex items-center justify-center">
                        {item?.specialist}
                      </p>
                    </td>
                    <td className={`py-2 px-10`}>{item?.appointment_time}</td>
                    <td className={`py-2 px-10`}>
                      <div
                        onClick={() => {
                          id(item?.id);
                          setviewPage(true);
                        }}
                        className="flex items-center justify-start gap-6"
                      >
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
                if (filtervalue === "recently_joined") {
                  return (
                    <tr className="border-b font-medium text-start" key={i}>
                      <td className={`py-2 px-10`}>{i + 1}</td>
                      <td
                        className={`py-2 px-10 flex items-center justify-start gap-3`}
                      >
                        {item.mobile_number}
                      </td>
                      <td className={`py-2 px-10`}>
                        <div
                          onClick={() => {
                            id(item.id);
                            setviewPage(true);
                          }}
                          className="flex items-center justify-start gap-6"
                        >
                          <TbEye
                            size={30}
                            className="text-gray-300 hover:text-blue-400 cursor-pointer"
                          />
                        </div>
                      </td>
                    </tr>
                  );
                } else {
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
                        <p className="text-dark_purple border-[2px] border-[#dfc5fd] bg-[#f0e5fd] rounded-full flex items-center justify-center">
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
                      <td className={`py-2 `}>
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
                        <div
                          onClick={() => {
                            id(item.id);
                            setviewPage(true);
                          }}
                          className="flex items-center justify-start gap-6"
                        >
                          <TbEye
                            size={30}
                            className="text-gray-300 hover:text-blue-400 cursor-pointer"
                          />
                        </div>
                      </td>
                    </tr>
                  );
                }
              }
              if (tableName === "Receptionist") {
                if (filtervalue === "recently_joined") {
                  return (
                    <tr className="border-b font-medium text-start" key={i}>
                      <td className={`py-2 px-10`}>{i + 1}</td>
                      <td
                        className={`py-2 px-10 flex items-center justify-start gap-3`}
                      >
                        {item.mobile_number}
                      </td>

                      <td className={`py-2 px-10`}>
                        <div
                          onClick={() => {
                            id(item.id);
                            setviewPage(true);
                          }}
                          className="flex items-center justify-start gap-6"
                        >
                          <TbEye
                            size={30}
                            className="text-gray-300 hover:text-blue-400 cursor-pointer"
                          />
                        </div>
                      </td>
                    </tr>
                  );
                } else {
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
                      <td className={`py-2`}>
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
                        <div
                          onClick={() => {
                            id(item.id);
                            setviewPage(true);
                          }}
                          className="flex items-center justify-start gap-6"
                        >
                          <TbEye
                            size={30}
                            className="text-gray-300 hover:text-blue-400 cursor-pointer"
                          />
                        </div>
                      </td>
                    </tr>
                  );
                }
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
                    <td className={`py-4 px-10`}>
                      <div
                        onClick={() => {
                          setDetails({
                            id: item?.id,
                            value: item?.name,
                          });
                          setPopUpModel("medicine");
                          setModel();
                        }}
                        className="flex items-center justify-start gap-6"
                      >
                        <FaTrashAlt
                          size={20}
                          className="text-gray-400 cursor-pointer hover:text-red-500"
                        />
                      </div>
                    </td>
                  </tr>
                );
              }
              if (tableName === "DosageForm") {
                return (
                  <tr className="border-b font-medium text-start" key={i}>
                    <td className={`py-4 px-10`}>{i + 1}</td>
                    <td className={`py-4 px-10`}>{item.form_name}</td>
                    <td className={`py-4 px-10`}>
                      <p
                        onClick={() => {
                          setAction("edit");
                          setPopUpModel("edit");
                          setModel(true);
                          setDetails({ id: item?._id, value: item?.form_name });
                        }}
                        className=" text-primary_color cursor-pointer font-medium"
                      >
                        Edit
                      </p>
                    </td>
                    <td className={`py-4 px-10`}>
                      <FaTrashAlt
                        onClick={() => {
                          setPopUpModel("DosageForm");
                          setModel(true);
                          setDetails({ id: item?._id, value: item?.form_name });
                        }}
                        size={20}
                        className="text-gray-400 cursor-pointer hover:text-red-500"
                      />
                    </td>
                  </tr>
                );
              }
              if (tableName === "DosageStrength") {
                return (
                  <tr className="border-b font-medium text-start" key={i}>
                    <td className={`py-4 px-10`}>{i + 1}</td>
                    <td className={`py-4 px-10`}>{item.unit_name}</td>
                    <td className={`py-4 px-10`}>
                      <p
                        onClick={() => {
                          setAction("edit");
                          setPopUpModel("edit");
                          setModel(true);
                          setDetails({ id: item?._id, value: item?.unit_name });
                        }}
                        className=" text-primary_color cursor-pointer font-medium"
                      >
                        Edit
                      </p>
                    </td>
                    <td className={`py-4 px-10`}>
                      <FaTrashAlt
                        onClick={() => {
                          setPopUpModel("DosageStrength");
                          setModel(true);
                          setDetails({ id: item?._id, value: item?.unit_name });
                        }}
                        size={20}
                        className="text-gray-400 cursor-pointer hover:text-red-500"
                      />
                    </td>
                  </tr>
                );
              }
              if (tableName === "subscription") {
                return (
                  <tr className="border-b font-medium text-start" key={i}>
                    <td className={`py-2 px-10`}>{i + 1}</td>
                    <td className={`py-2 px-10`}>
                      {item?.subscription_id?.title?.title}
                    </td>
                    <td className={`py-2 px-10`}>
                      {item?.subscription_id?._id}
                    </td>
                    <td className={`py-2 px-10`}>{item?.transaction_id}</td>
                    <td className={`py-2 px-10`}>
                      {item?.subscription_id?.durationInNo}{" "}
                      {item?.subscription_id?.duration}
                    </td>
                    <td className={`py-2 px-10`}>
                    {dayjs(DateString).diff(currentDate, "day") < 0
                      ? "Plan Expired"
                      : dayjs(DateString).diff(currentDate, "day") === 0 &&
                        isGreaterThan
                      ? "Plan Expired"
                      : `${dayjs(DateString).diff(currentDate, "day")} Day`}
                    </td>
                    <td className={`py-2 px-10`}>
                      ₹ {item?.subscription_id?.pricePerMonth}
                    </td>
                  </tr>
                );
              }
            })}
        </tbody>
      </table>

      <ModelResponsive
        popUpModel={popUpModel}
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
