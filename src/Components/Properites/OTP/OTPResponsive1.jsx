import React from 'react'
import OTP from './OTP'

const OTPResponsive1 = ({setOTP, otp}) => {
  return (
    <>
     <div className=" 2xl:block xl:block lg:block md:block sm:block xs:hidden xss:hidden mobile:hidden">
              <OTP
                setValue={setOTP}
                value={otp}
                def="0000"
                height="60px"
                width="60px"
                length="4"
                textColor="#069B56"
                gap="10px"
              />
            </div>

            <div className=" 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:block xss:hidden mobile:block">
              <OTP
                setValue={setOTP}
                value={otp}
                def="0000"
                height="40px"
                width="40px"
                length="4"
                textColor="#069B56"
                gap="10px"
              />
            </div>

            <div className=" 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:hidden xss:block mobile:hidden">
              <OTP
                setValue={setOTP}
                value={otp}
                def="0000"
                height="30px"
                width="30px"
                length="4"
                textColor="#069B56"
                gap="10px"
              />
            </div>
    </>
  )
}

export default OTPResponsive1