import React from 'react'
import OTP from './OTP'

const OTPResponsive = ({otpValue, error, length, handelChange}) => {
  return (
    <>
    <div className=" 2xl:block xl:hidden lg:hidden md:hidden sm:hidden xs:hidden xss:hidden mobile:hidden">
              <OTP error={error} length={length} value={otpValue} setValue={handelChange} width="45px" height="45px"/>
            </div>
            <div className=" 2xl:hidden xl:block lg:hidden md:hidden sm:hidden xs:hidden xss:hidden mobile:hidden">
              <OTP error={error} length={length} value={otpValue} setValue={handelChange} width="55px" height="55px"/>
            </div>

            <div className=" 2xl:hidden xl:hidden lg:block md:hidden sm:hidden xs:hidden xss:hidden mobile:hidden">
              <OTP error={error} length={6} value={otpValue} setValue={handelChange} width="45px" height="45px" gap="9px"/>
            </div>

            <div className=" 2xl:hidden xl:hidden lg:hidden md:block sm:block xs:hidden xss:hidden mobile:hidden">
              <OTP error={error} length={6} value={otpValue} setValue={handelChange} width="60px" height="60px" gap="25px"/>
            </div>

            <div className=" 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:block xss:hidden mobile:hidden">
              <OTP error={error} length={6} value={otpValue} setValue={handelChange} width="48px" height="48px" gap="9px"/>
            </div>

            <div className=" 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:hidden xss:hidden mobile:block">
              <OTP error={error} length={6} value={otpValue} setValue={handelChange} width="40px" height="40px" gap="9px"/>
            </div>

            <div className=" 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:hidden xss:block mobile:hidden">
              <OTP error={error} length={6} value={otpValue} setValue={handelChange} width="40px" height="40px" gap="6px"/>
            </div>
    </>
  )
}

export default OTPResponsive