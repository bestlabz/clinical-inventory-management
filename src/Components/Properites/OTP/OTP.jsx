import React, { useEffect } from "react";

import OTPFunction from "../../../hooks/Authentication/Login";

const OTP = ({err}) => {
  const { otp, handelChange } = OTPFunction();

  return (
    <div className="otp-box">
      {otp.map((data, i) => {
        return (
          <input
            value={data}
            onChange={(e) => handelChange({ e, i })}
            maxLength={1}
            className={`otp-box-input ${err && data.length === 0 && 'err-border' }`}
            key={i}
            type="text"
            autoFocus={i === 0}
          />
        );
      })}
      
    </div>
  );
};

export default OTP;
