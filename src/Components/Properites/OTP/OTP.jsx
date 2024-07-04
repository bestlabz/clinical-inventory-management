import React from 'react'

//Third party libraries
import OtpInput from 'react-otp-input';


const OTP = ({value, setValue, length=4, width="40px", height="40px", textColor="#111", gap="13px", error, def}) => {

  return (
    <div className=' w-[100%] overflow-hidden mx-auto flex items-center justify-center'>
    <OtpInput
      value={value}
      onChange={setValue}
      numInputs={length}
      renderSeparator={<span></span>}
      renderInput={(props) => <input {...props} />}
      inputType='tel'
      placeholder={def}     
      inputStyle={{
        width: width,
        height: height,
        border: `2px solid ${error ? "#F83005" : "#d3d3d3"}`,
        margin: `0 ${gap}`,
        borderRadius: "5px",
        outlineColor: "#0073EE",
        cursor: "pointer",
        color: textColor,
        fontSize: "30px",
        fontWeight: "bold",
        paddingBottom: "3px"
        
      }}
    />
    </div>
  )
}

export default OTP