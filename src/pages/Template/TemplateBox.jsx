import React from "react";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoMdTrash } from "react-icons/io";

const TemplateBox = ({
  open,
  setOpen,
  title,
  edit,
  enableEdit,
  onChange,
  value,
  index,
  dynamicText,
}) => {
  return (
    <>
      <div className="template ">
        <div className="template-top">
          <p className=" flex-1 text-[16px] font-semibold pl-2">{title}</p>
          {open ? (
            <IoIosArrowDown
              onClick={() => setOpen(false)}
              size={22}
              className=" cursor-pointer"
            />
          ) : (
            <IoIosArrowUp
              onClick={() => setOpen(true)}
              size={22}
              className=" cursor-pointer"
            />
          )}
        </div>
        <div
          className={`template-body ${
            open
              ? "h-[400px] border-[1px] border-t-0 flex items-start justify-center"
              : " h-[0px] border-[0px]"
          } `}
        >
          <textarea
            className={`template-body-input ${
              edit ? "bg-gray-200" : "bg-white shadow-md"
            }`}
            placeholder="Template"
            disabled={edit}
            autoFocus={edit ? true : false}
            onChange={(e) => onChange({ index, value: e.target.value })}
            value={value}
          />
          {/* <div className="template-body-dynamic-text">
            {dynamicText.length !== 0 && (
              <div className="w-full h-full flex flex-col flex-1 gap-2 overflow-auto py-1">
                {dynamicText?.map((_, index) => {
                  return (
                    <div key={index} className="flex items-center gap-1">
                      <input className=" flex-1 bg-gray-200 outline-none py-2 rounded-lg px-3" />
                      <IoMdTrash
                        size={20}
                        className="cursor-pointer hover:text-red-500 text-gray-400 transition-all duration-300"
                      />
                    </div>
                  );
                })}
              </div>
            )}

            <button className="bg-blue py-2 mt-1 w-[120px] text-[12px] text-white rounded-lg font-medium ">
              Add Dynamic value
            </button>
          </div> */}
          <div className="template-bottom">
            <button
              onClick={() => enableEdit(!edit)}
              className=" template-btn text-black border-black  hover:bg-blue-700 "
            >
              Edit
            </button>
            <button className="template-btn border-blue bg-blue text-white">
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TemplateBox;
