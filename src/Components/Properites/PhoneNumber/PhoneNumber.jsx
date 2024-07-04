import React from "react";

//Third pary library
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneNumber = ({ country = "in", value, setValue, err }) => {
  return (
    <div className=" 2xl:w-[40%] xl:w-[40%] lg:w-[60%] md:w-[80%] sm:w-[80%] xs:w-[100%] xss:w-[100%] mobile:w-[100%] flex items-center justify-center flex-col relative">
      <PhoneInput
        inputStyle={{
          height: "50px",
          paddingLeft: "70px",
          width: "100%",
        }}
        containerStyle={{
          display: "block",
          flexDirection: "column",
          border: `1px solid #${err ? "FF2D00" : "E8E8E8"}`,
          borderRadius: "5px",
        }}
        country={country}
        value={value}
        onChange={setValue}
      />


      {err && <p className=" w-full items-start pt-3 text-red-500 absolute  top-[90%]">Required</p>}
    </div>
  );
};

export default PhoneNumber;
