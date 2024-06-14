import React from 'react'

//Third pary library
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const PhoneNumber = ({country="in", value, setValue}) => {
  return <div className=' 2xl:w-[40%] xl:w-[40%] lg:w-[60%] md:w-[80%] sm:w-[80%] xs:w-[100%] xss:w-[100%] mobile:w-[100%] flex items-center justify-center'>
   <PhoneInput
  inputStyle={{
    height: "50px",
    paddingLeft: "70px",
    width: "100%",
  }}
  country={country}
  value={value}
  onChange={setValue}
/>
  </div>
}

export default PhoneNumber