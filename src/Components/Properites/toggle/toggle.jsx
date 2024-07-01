import React from "react";

const Toggle = ({ checked, onChange }) => {
  console.log('checked', checked);
  return (
    <div>
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onChange={(e) => onChange(e.target.checked)}
          checked={checked}
        />
        <div
          className={`
        ${checked && "bg-gray-300"}
        relative 
        w-11 h-5 
        ${checked ? "bg-gray-300" : "bg-red-400"} 
        peer-focus:outline-none 
        rounded-full 
        peer 
        dark:bg-gray-700 
        peer-checked:after:translate-x-full 
        rtl:peer-checked:after:-translate-x-full 
        peer-checked:after:border-white 
        after:content-[''] 
        after:absolute 
        ${checked ? "after:top-[2px] " : "after:top-[1.5px] "}
        ${checked ? "after:start-[10px]" : "after:start-[3px]"}
        after:bg-white 
        after:border-gray-300 
        after:border 
        after:rounded-full 
        after:h-4
        after:w-4
        after:transition-all 
        peer-checked:bg-textMain`}
        ></div>
      </label>
    </div>
  );
};

export default Toggle;
