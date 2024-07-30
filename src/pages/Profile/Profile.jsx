import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdOutlineModeEdit } from "react-icons/md";

import ProfileFunction from "../../hooks/Profile/Profile";
import Input from "../../Components/Properites/Inputs/Input";
import ClipLoader from "react-spinners/ClipLoader";

const Profile = () => {
  const {
    handleClick,
    profileRef,
    goBack,
    errors,
    handleChange,
    handleSubmit,
    setFieldValue,
    values,
    error,
    validationCheck,
    base64Image,
    loader,
  } = ProfileFunction();

  return (
    <div className="container">
      <div className="View-page-top">
        <h1 className="view-page-top-text flex items-center gap-3">
          <IoMdArrowRoundBack className="cursor-pointer" onClick={goBack} />
          Profile
        </h1>
      </div>

      <div className="flex items-center flex-col w-full mt-6 gap-6">
        <form
          autoComplete="off"
          onSubmit={handleSubmit}
          className="flex items-center flex-col w-full"
        >
          <div
            className={`w-[100px] h-[100px] flex items-center justify-center border-[3px] ${
              error && errors.profile ? "border-red-500" : "border-black"
            } rounded-full relative`}
          >
            {(base64Image || values.profile) && (
              <img
                className="w-[95px] h-[95px] overflow-hidden rounded-full object-cover"
                src={base64Image ? base64Image : values.profile}
                alt="profile"
              />
            )}
            <div
              onClick={handleClick}
              className=" cursor-pointer absolute w-[30px] h-[30px] bg-gray-200 right-0 -bottom-1 rounded-full flex items-center justify-center"
            >
              <MdOutlineModeEdit size={16} />
            </div>
            <input
              ref={profileRef}
              name="profile"
              id="profile"
              type="file"
              className="hidden"
              onChange={(e) => setFieldValue("profile", e.target.files[0])}
            />
          </div>

          <div className="w-[90%] grid  gap-6 mt-6 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 mobile:grid-cols-1 xss:grid-cols-1">
            <Input
              label="Name"
              name="name"
              id="name"
              value={values.name}
              setValue={handleChange}
              err={error && errors.name}
            />
            <Input
              label="Clinic Name"
              name="clinic_name"
              id="clinic_name"
              value={values.clinic_name}
              setValue={handleChange}
              err={error && errors.clinic_name}
            />
            <Input
              label="Email"
              name="email"
              id="email"
              value={values.email}
              setValue={handleChange}
              err={error && errors.email}
            />
            <Input
              label="Mobile Numer"
              name="mobile_number"
              id="mobile_number"
              value={values.mobile_number}
              setValue={handleChange}
              err={error && errors.mobile_number}
            />
          </div>

          {loader ? (
            <button
              type="submit"
              className=" mt-10 bg-blue w-[200px] py-2 rounded-md text-white font-medium hover:bg-opacity-[.8]"
            >
              <ClipLoader size={20} color="#fff" />
            </button>
          ) : (
            <button
              onClick={validationCheck}
              type="submit"
              className=" mt-10 bg-blue w-[200px] py-2 rounded-md text-white font-medium hover:bg-opacity-[.8]"
            >
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Profile;
