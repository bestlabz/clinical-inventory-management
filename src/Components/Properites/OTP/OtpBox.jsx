import React, { useEffect } from "react";

//Hooks
import OTPBOX from "../../../hooks/Authentication/OtpBox";

import { useSelector } from "react-redux";

const OtpBox = ({
  err,
  width = "50px",
  height = "50px",
  gap = "10px",
  length = 6,
  fontSize = "30px",
}) => {
  const {
    otp,
    handleInputChange,
    handelClick,
    currentIndex,
    handleInputChange1,
    inputRefs,
    handleBackSpace,
    setotp,
  } = OTPBOX();

  const { Err } = useSelector((state) => state.otpValue);

  useEffect(() => {
    if (Err) {
      setotp(new Array(6).fill(""));
    }
  }, [Err]);

  return (
    <div className="otp-box">
      {otp.map((data, index) => {
        return (
          <input
            ref={inputRefs}
            autoFocus={currentIndex === index && true}
            type="text"
            maxLength={1}
            value={data}
            key={index}
            onKeyDown={(e) => {
              if (currentIndex === index && data && /^\d*$/.test(e.key)) {
                handleInputChange1(e.key, currentIndex + 1, e.target);
              }
              if (e.key === "Backspace") {
                handleBackSpace(e.target, index);
              }
              if (e.key === "Enter") {
                handelClick();
              }
            }}
            style={{
              width: `${width}`,
              height: `${height}`,
              border: `2px solid ${Err ? "#F83005" : "#d3d3d3"}`,
              marginRight: `${gap}`,
              borderRadius: "5px",
              outlineColor: "#0073EE",
              cursor: "pointer",
              color: "transparent",
              textShadow: "0 0 0 #000",
              fontSize: fontSize,
              fontWeight: "bold",
              paddingBottom: "3px",
              textAlign: "center",
            }}
            onChange={(e) => handleInputChange(e.target, index)}
          />
        );
      })}
    </div>
  );
};

export default OtpBox;
