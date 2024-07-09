import React from "react";
import Dropdown from "react-select";

const Select = ({ options, value, SelectedValue, placeholder, styles, clear=false }) => {
  return (
    <>
      
      <Dropdown
      styles={{
        control: (baseStyle) => ({
          ...baseStyle,
          ...styles
         
         })
      }}
        className=" w-full "
        value={value}
        onChange={SelectedValue}
        options={options}
        placeholder={placeholder}
        isClearable={clear}
      />
    </>
  );
};

export default Select;
