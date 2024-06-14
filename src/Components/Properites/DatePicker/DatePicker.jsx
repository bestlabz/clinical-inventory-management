import React, { useRef } from "react";

//Third party libraries
import SelectDate from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CiCalendarDate } from "react-icons/ci";

const DatePicker = ({ date, handleDateSelect }) => {
    const dateRef = useRef(null);
  
    const clickDate = () => {
      if (dateRef.current) {
        dateRef.current.setFocus();  // Use setFocus() to focus on the date picker
      }
    };
  
    return (
      <div className=" flex items-center justify-center w-full px-2 mx-auto gap-1 border-[2px] border-gray-200 overflow-hidden rounded-md">
        <CiCalendarDate onClick={clickDate} className="cursor-pointer text-[35px] ml-1"/>
        <SelectDate
          ref={dateRef}
          className="w-[100%] p-1 outline-none border-0 text-[16px] font-medium text-gray-500"
          selected={date}
          onChange={handleDateSelect}
          dateFormat="dd-MM-yyyy"
        />
      </div>
    );
  };
  
  export default DatePicker;