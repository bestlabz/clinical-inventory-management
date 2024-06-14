import React from 'react'

//Third party libraries
import OtpInput from 'react-otp-input';


const OTPNPM = ({value, setValue, length=4, width="60px", height="60px"}) => {
  return (
    <div className=' w-full flex items-center justify-center'>
    <OtpInput
      value={value}
      onChange={setValue}
      numInputs={length}
      renderSeparator={<span></span>}
      renderInput={(props) => <input {...props} />}
      inputType='text'
      inputStyle={{
        width: width,
        height: height,
        border: "1px solid #d3d3d3",
        margin: "0 10px",
        borderRadius: "5px",
        outlineColor: "#0073EE",
        cursor: "pointer",
        color: "#069B56",
        fontSize: "30px",
        fontWeight: "bold",
        paddingBottom: "3px"
        
      }}
    />
    </div>
  )
}

export default OTPNPM