import React from "react";

import Cliploader from "react-spinners/ClipLoader";

import Input from "../../Components/Properites/Inputs/Input";

import { TbEdit } from "react-icons/tb";
import { IoIosAdd } from "react-icons/io";
import { MdOutlineModeEdit } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

//Hooks
import RightSideFunction from "../../hooks/Prescription/rightSide";
import { useSelector } from "react-redux";
import ModelPopup from "../../Components/Properites/ModelPopup/ModelPopup";
import Select from "../../Components/Properites/Select/Select";

const RightSide = ({
  validationError,
  addDynamicFeild,
  headerLoader,
  mainLoader,
  removeDynamicFeild,
  setReFetch,
}) => {
  const {
    ImageInputRef,
    clinicLogoupdate,
    colorChange,
    colorOptions,
    handelImage,
    modelHandel,
    openModel,
    option,
    option1,
    option2,
    selectedColor,
    selectedFont,
    selectedsize,
    selectedweight,
    setColorChange,
    setSelectedColor,
    styles,
    styles1,
    styles2,
    setselectedFont,
    setselectedKey,
    setselectedSize,
    setselectedWeight,
    setUpdateValue,
    closePopup,
    update,
    loader,
    imageLoader,
    setImageUpload,
  } = RightSideFunction({ setReFetch });

  const {
    clinicLogo,
    clinicDetails,
    doctorDetails,
    headerDetails,
    mainDetails,
  } = useSelector((state) => state.PrescriptionDetails);

  const { userDetails } = useSelector((state) => state.userinfo);

  return (
    <>
      <div className="prescription-right-top">
        <div className="prescription-right-top-inside">
          <div
            // onClick={handelImage}
            className="prescription-right-top-inside-image"
          >
            <div className="w-full h-full flex items-center justify-center overflow-hidden">
              {imageLoader ? (
                <Cliploader size={20} color="#17B26A" />
              ) : (
                <img
                  src={clinicLogo?.logo}
                  className="w-[100px] h-[100px] rounded-full object-cover"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                />
              )}
            </div>

            <input
              type="file"
              ref={ImageInputRef}
              className="hidden"
              onChange={(e) => setImageUpload(e.target.files[0])}
            />

            <button
              onClick={handelImage}
              className="prescription-right-top-inside-image-edit-button"
            >
              <MdOutlineModeEdit size={16} />
            </button>
          </div>
          {/* <input
            name="title"
            id="title"
            placeholder="Title"
            className="prescription-right-top-input"
            value={clinicLogo.title}
            onChange={(e) => clinicLogoupdate({ title: e.target.value })}
          /> */}
        </div>
      </div>

      <div className="prescription-right-content-container">
        <div className="prescription-right-content-container-header">
          <h1 className="prescription-right-content-container-header-text">
            Clinic Details
          </h1>
          <button
            onClick={() => {
              setColorChange("clinicDetails");
              modelHandel();
            }}
            className="prescription-right-content-container-header-button"
          >
            <span className="prescription-right-content-container-header-button-text">
              Edit
            </span>{" "}
            <TbEdit size={25} />{" "}
          </button>
        </div>
        <div className="prescription-right-content-container-input">
          {clinicDetails?.map((i, index) => {
            return (
              <div key={index}>
                {i?.name === "Address" ? (
                  <div className="flex flex-col gap-1">
                    <label className="mt-2">{i?.name}</label>
                    <textarea
                      style={{
                        color: i?.styles?.color,
                        fontFamily: i?.styles?.font,
                        fontSize: i?.styles?.size,
                        fontWeight: i?.styles?.font_weight,
                      }}
                      rows={4}
                      placeholder={`Enter ${i?.name}`}
                      className="resize-none outline-none p-2 border-[1px] border-gray-300 rounded-xl"
                      onClick={() => setselectedKey(i?.name)}
                      disabled={true}
                      value={i?.value}
                    />
                  </div>
                ) : (
                  <Input
                    label={i?.name}
                    placeholder={`Enter ${i?.name}`}
                    color={i?.styles?.color}
                    size={i?.styles?.size}
                    font={i?.styles?.font}
                    weight={i?.styles?.font_weight}
                    selectKey={() => setselectedKey(i?.name)}
                    disabled={true}
                    value={i?.value}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="prescription-right-content-container">
        <div className="prescription-right-content-container-header">
          <h1 className="prescription-right-content-container-header-text">
            Doctor Details
          </h1>
          <button
            onClick={() => {
              setColorChange("doctorDetails");
              modelHandel();
            }}
            className="prescription-right-content-container-header-button"
          >
            <span className="prescription-right-content-container-header-button-text">
              Edit
            </span>{" "}
            <TbEdit size={25} />{" "}
          </button>
        </div>
        <div className="prescription-right-content-container-input">
          {doctorDetails.map((i, index) => {
            return (
              <div key={index}>
                <Input
                  label={i.name}
                  placeholder={`Enter ${i.name}`}
                  color={i?.styles?.color}
                  size={i?.styles?.size}
                  font={i?.styles?.font}
                  weight={i?.styles?.font_weight}
                  selectKey={() => setselectedKey(i?.name)}
                  disabled={true}
                  value={i?.value}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="prescription-right-content-container">
        <div className="prescription-right-content-container-header">
          <h1 className="prescription-right-content-container-header-text">
            Header
          </h1>
          <button
            onClick={() => {
              setColorChange("header");
              modelHandel();
            }}
            className=" prescription-right-content-container-header-button"
          >
            <span className="prescription-right-content-container-header-button-text">
              Edit
            </span>{" "}
            <TbEdit size={25} />{" "}
          </button>
        </div>
        <div className="prescription-right-content-container-input">
          {headerDetails?.map((i, index) => {
            return (
              <div key={index} className="input-container">
                <div className={`input-box1`}>
                  <input
                    style={{
                      color: i?.styles?.color,
                      fontSize: i?.styles?.size,
                      fontFamily: i?.styles?.font,
                      fontWeight: i?.styles?.font_weight,
                    }}
                    className={`input border-gray-300`}
                    type="text"
                    placeholder={`${i?.name}`}
                    value={i?.value}
                    disabled={true}
                  />
                  <MdDelete
                    onClick={() =>
                      removeDynamicFeild({
                        clinicId: userDetails._id,
                        fieldName: i?.name,
                        section: "header",
                      })
                    }
                    size={20}
                    className="text-gray-400 hover:text-red-500 cursor-pointer"
                  />
                </div>
              </div>
            );
          })}
        </div>
        {headerDetails?.length !== 5 && (
          <>
            {headerLoader ? (
              <button className="prescription-right-content-container-add-new-buttonw-[150px] h-[50px] justify-center">
                <Cliploader size={20} color="#fff" />
              </button>
            ) : (
              <button
                onClick={() =>
                  addDynamicFeild({
                    clinicId: userDetails._id,
                    fieldName: `HeaderIndex${headerDetails.length + 1}`,
                    section: "header",
                    value: "",
                  })
                }
                className="prescription-right-content-container-add-new-button"
              >
                <span>Add New Field</span> <IoIosAdd size={30} />
              </button>
            )}
          </>
        )}
      </div>

      <div className="prescription-right-content-container">
        <div className="prescription-right-content-container-header">
          <h1 className="prescription-right-content-container-header-text">
            Main
          </h1>
          <button
            onClick={() => {
              setColorChange("main");
              modelHandel();
            }}
            className="prescription-right-content-container-header-button"
          >
            <span className="prescription-right-content-container-header-button-text">
              Edit
            </span>{" "}
            <TbEdit size={25} />{" "}
          </button>
        </div>

        <div className="prescription-right-content-container-input1">
          {mainDetails?.map((i, index) => {
            return (
              <div key={index} className="input-container">
                <div className={`input-box1`}>
                  <input
                    style={{
                      color: i?.styles?.color,
                      fontSize: i?.styles?.size,
                      fontFamily: i?.styles?.font,
                      fontWeight: i?.styles?.font_weight,
                    }}
                    className={`input border-gray-300`}
                    type="text"
                    placeholder={`${i?.name}`}
                    value={i?.value}
                    disabled={true}
                  />
                  <MdDelete
                    onClick={() =>
                      removeDynamicFeild({
                        clinicId: userDetails._id,
                        fieldName: i?.name,
                        section: "main",
                      })
                    }
                    size={20}
                    className="text-gray-400 hover:text-red-500 cursor-pointer"
                  />
                </div>
              </div>
            );
          })}
        </div>
        {mainLoader ? (
          <button className="prescription-right-content-container-add-new-button w-[150px] h-[40px] justify-center">
            <Cliploader size={20} color="#0073EE" />
          </button>
        ) : (
          <button
            onClick={() =>
              addDynamicFeild({
                clinicId: userDetails._id,
                fieldName: `MainIndex${mainDetails.length + 1}`,
                section: "main",
                value: "",
              })
            }
            className="prescription-right-content-container-add-new-button"
          >
            <span>Add New Field</span> <IoIosAdd size={30} />
          </button>
        )}
      </div>

      <div className=" 2xl:block xl:block lg:hidden md:hidden sm:hidden xs:hidden mobile:hidden xss:hidden">
        <ModelPopup height="80%" width="50%" showDrawer={openModel}>
          <div className="flex w-full h-full relative">
            <IoClose
              size={25}
              onClick={() => {
                closePopup();
                modelHandel();
              }}
              className="absolute z-40 top-1 right-3 cursor-pointer hover:text-red-500 transition-all duration-300"
            />

            <div className=" w-[60%] h-full overflow-auto border-r-[2px] border-gray-200 ">
              <p className="text-[24px] font-semibold p-4">
                {colorChange === "clinicDetails"
                  ? "ClinicDetails"
                  : colorChange === "doctorDetails"
                  ? "Doctor Details"
                  : colorChange === "header"
                  ? "Header Details"
                  : colorChange === "main"
                  ? "Main Details"
                  : ""}
              </p>

              {colorChange === "clinicDetails" && (
                <div className=" w-[80%] px-4 space-y-4">
                  {clinicDetails?.map((i, index) => {
                    return (
                      <div key={index}>
                        {i?.name === "Address" ? (
                          <div className="flex flex-col gap-1">
                            <label className="mt-2">{i?.name}</label>
                            <textarea
                              style={{
                                color: i?.styles?.color,
                                fontFamily: i?.styles?.font,
                                fontSize: i?.styles?.size,
                                fontWeight: i?.styles?.font_weight,
                              }}
                              rows={4}
                              placeholder={`Enter ${i?.name}`}
                              className="resize-none outline-none p-2 border-[1px] border-gray-300 rounded-xl"
                              onClick={() => setselectedKey(i?.name)}
                              onChange={(e) => setUpdateValue(e.target.value)}
                              value={i?.value}
                            />
                          </div>
                        ) : (
                          <Input
                            label={i?.name}
                            placeholder={`Enter ${i?.name}`}
                            color={i?.styles?.color}
                            size={i?.styles?.size}
                            font={i?.styles?.font}
                            weight={i?.styles?.font_weight}
                            selectKey={() => setselectedKey(i?.name)}
                            setValue={(e) => {
                              const value = e.target.value;
                              if (i?.name === "Contact number") {
                                if (
                                  /^\d*$/.test(value) &&
                                  (i?.name !== "Contact number" ||
                                    value.length <= 10)
                                ) {
                                  return setUpdateValue(value);
                                }
                              } else if (i?.name === "Clinic Name") {
                                if (
                                  value === "" ||
                                  /^[a-zA-Z\s]+$/.test(value)
                                ) {
                                  return setUpdateValue(value);
                                }
                              } else {
                                return setUpdateValue(value);
                              }
                            }}
                            value={i?.value}
                            length={
                              i?.name === "Contact number"
                                ? 10
                                : i?.name === "GST No"
                                ? 15
                                : undefined
                            } // Conditionally set length prop
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {colorChange === "doctorDetails" && (
                <div className=" w-[80%] px-4 space-y-4">
                  {doctorDetails?.map((i, index) => {
                    return (
                      <div key={index}>
                        <Input
                          label={i?.name}
                          placeholder={`Enter ${i?.name}`}
                          color={i?.styles?.color}
                          size={i?.styles?.size}
                          font={i?.styles?.font}
                          weight={i?.styles?.font_weight}
                          selectKey={() => setselectedKey(i?.name)}
                          setValue={(e) => {
                            if (
                              e.target.value === "" ||
                              /^[a-zA-Z\s]+$/.test(e.target.value)
                            ) {
                              return setUpdateValue(e.target.value);
                            }
                          }}
                          value={i?.value}
                        />
                      </div>
                    );
                  })}
                </div>
              )}

              {colorChange === "header" && (
                <div className=" w-[80%] px-4 space-y-4">
                  {headerDetails?.map((i, index) => {
                    return (
                      <div key={index}>
                        <Input
                          label={i?.name}
                          placeholder={`Enter ${i?.name}`}
                          color={i?.styles?.color}
                          size={i?.styles?.size}
                          font={i?.styles?.font}
                          weight={i?.styles?.font_weight}
                          selectKey={() => setselectedKey(i?.name)}
                          setValue={(e) => {
                            if (
                              e.target.value === "" ||
                              /^[a-zA-Z\s]+$/.test(e.target.value)
                            ) {
                              return setUpdateValue(e.target.value);
                            }
                          }}
                          value={i?.value}
                        />
                      </div>
                    );
                  })}
                </div>
              )}

              {colorChange === "main" && (
                <div className=" w-[80%] px-4 space-y-4">
                  {mainDetails?.map((i, index) => {
                    return (
                      <div key={index}>
                        <Input
                          label={i?.name}
                          placeholder={`Enter ${i?.name}`}
                          color={i?.styles?.color}
                          size={i?.styles?.size}
                          font={i?.styles?.font}
                          weight={i?.styles?.font_weight}
                          selectKey={() => setselectedKey(i?.name)}
                          setValue={(e) => {
                            if (
                              e.target.value === "" ||
                              /^[a-zA-Z\s]+$/.test(e.target.value)
                            ) {
                              return setUpdateValue(e.target.value);
                            }
                          }}
                          value={i?.value}
                        />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div className=" w-[40%] h-full flex flex-col space-y-8 overflow-auto relative ">
              <p className="text-[24px] font-semibold p-4">Text</p>
              <div className=" w-[60%] ml-3">
                <Select
                  styles={styles}
                  options={option}
                  placeholder="Select"
                  value={selectedFont}
                  SelectedValue={(e) => {
                    setselectedFont(e);
                  }}
                />
              </div>
              <div className="flex items-center space-x-4 ">
                <div className=" w-[50%] ml-3">
                  <Select
                    styles={styles1}
                    options={option1}
                    value={selectedweight}
                    SelectedValue={(e) => {
                      setselectedWeight(e);
                    }}
                    placeholder="Select"
                  />
                </div>
                <div className=" w-[35%]">
                  <Select
                    styles={styles2}
                    options={option2}
                    value={selectedsize}
                    SelectedValue={(e) => {
                      setselectedSize(e);
                    }}
                    placeholder="Select"
                  />
                </div>
              </div>
              <p className="text-[24px] font-semibold p-4">Colors</p>

              <div className="w-[80%] ml-4 grid grid-cols-5 gap-4">
                {colorOptions.map((i, index) => {
                  return (
                    <div
                      style={{
                        borderColor: i === selectedColor ? i : "transparent",
                      }}
                      key={index}
                      className={`cursor-pointer w-[48px] h-[48px] flex items-center justify-center  rounded-full ${
                        i === selectedColor ? "border-[2px]" : "border-[0px]"
                      }`}
                    >
                      <div
                        onClick={() => setSelectedColor(i)}
                        style={{ background: i }}
                        className={`w-[40px] h-[40px] rounded-full`}
                      ></div>
                    </div>
                  );
                })}
              </div>

              <div className=" absolute bottom-2 right-2 flex items-center">
                <button
                  onClick={() => {
                    if (!loader) {
                      closePopup();
                      modelHandel();
                      return;
                    }
                  }}
                  className="w-[100px] border-[1px] border-red-500 text-red-500 h-[35px] rounded-md"
                >
                  Cancel
                </button>
                {loader ? (
                  <button className="ml-3 w-[100px] bg-primary_color text-white h-[35px] rounded-md">
                    <Cliploader size={20} color="#fff" />
                  </button>
                ) : (
                  <button
                    onClick={update}
                    className="ml-3 w-[100px] bg-primary_color text-white h-[35px] rounded-md"
                  >
                    Update
                  </button>
                )}
              </div>
            </div>
          </div>
        </ModelPopup>
      </div>

      <div className=" 2xl:hidden xl:hidden lg:block md:hidden sm:hidden xs:hidden mobile:hidden xss:hidden">
        <ModelPopup height="95%" width="70%" showDrawer={openModel}>
          <div className="flex w-full h-full relative">
            <IoClose
              size={25}
              onClick={modelHandel}
              className="absolute z-40 top-1 right-3 cursor-pointer hover:text-red-500 transition-all duration-300"
            />

            <div className=" w-[60%] h-full overflow-auto border-r-[2px] border-gray-200 ">
              <p className="text-[24px] font-semibold p-4">
                {colorChange === "clinicDetails"
                  ? "Clinic Details"
                  : colorChange === "doctorDetails"
                  ? "Doctor Details"
                  : colorChange === "header"
                  ? "Header Details"
                  : colorChange === "main"
                  ? "Main Details"
                  : ""}
              </p>
              {colorChange === "clinicDetails" && (
                <div className=" w-[80%] px-4 space-y-4">
                  {clinicDetails?.map((i, index) => {
                    return (
                      <div key={index}>
                        {i?.name === "Address" ? (
                          <div className="flex flex-col gap-1">
                            <label className="mt-2">{i?.name}</label>
                            <textarea
                              style={{
                                color: i?.styles?.color,
                                fontFamily: i?.styles?.font,
                                fontSize: i?.styles?.size,
                                fontWeight: i?.styles?.font_weight,
                              }}
                              rows={4}
                              placeholder={`Enter ${i?.name}`}
                              className="resize-none outline-none p-2 border-[1px] border-gray-300 rounded-xl"
                              onClick={() => setselectedKey(i?.name)}
                              onChange={(e) => setUpdateValue(e.target.value)}
                              value={i?.value}
                            />
                          </div>
                        ) : (
                          <Input
                            label={i?.name}
                            placeholder={`Enter ${i?.name}`}
                            color={i?.styles?.color}
                            size={i?.styles?.size}
                            font={i?.styles?.font}
                            weight={i?.styles?.font_weight}
                            selectKey={() => setselectedKey(i?.name)}
                            setValue={(e) => {
                              const value = e.target.value;
                              if (i?.name === "Contact number") {
                                if (
                                  /^\d*$/.test(value) &&
                                  (i?.name !== "Contact number" ||
                                    value.length <= 10)
                                ) {
                                  return setUpdateValue(value);
                                }
                              } else if (i?.name === "Clinic Name") {
                                if (
                                  value === "" ||
                                  /^[a-zA-Z\s]+$/.test(value)
                                ) {
                                  return setUpdateValue(value);
                                }
                              } else {
                                return setUpdateValue(value);
                              }
                            }}
                            value={i?.value}
                            length={
                              i?.name === "Contact number"
                                ? 10
                                : i?.name === "GST No"
                                ? 15
                                : undefined
                            }
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {colorChange === "doctorDetails" && (
                <div className="w-[80%] px-4 space-y-4">
                  {doctorDetails?.map((i, index) => {
                    return (
                      <div key={index}>
                        <Input
                          label={i?.name}
                          placeholder={`Enter ${i?.name}`}
                          color={i?.styles?.color}
                          size={i?.styles?.size}
                          font={i?.styles?.font}
                          weight={i?.styles?.font_weight}
                          selectKey={() => setselectedKey(i?.name)}
                          setValue={(e) => {
                            if (
                              e.target.value === "" ||
                              /^[a-zA-Z\s]+$/.test(e.target.value)
                            ) {
                              return setUpdateValue(e.target.value);
                            }
                          }}
                          value={i?.value}
                        />
                      </div>
                    );
                  })}
                </div>
              )}

              {colorChange === "header" && (
                <div className=" w-[80%] px-4 space-y-4">
                  {headerDetails?.map((i, index) => {
                    return (
                      <div key={index}>
                        <Input
                          label={i?.name}
                          placeholder={`Enter ${i?.name}`}
                          color={i?.styles?.color}
                          size={i?.styles?.size}
                          font={i?.styles?.font}
                          weight={i?.styles?.font_weight}
                          selectKey={() => setselectedKey(i?.name)}
                          setValue={(e) => {
                            if (
                              e.target.value === "" ||
                              /^[a-zA-Z\s]+$/.test(e.target.value)
                            ) {
                              return setUpdateValue(e.target.value);
                            }
                          }}
                          value={i?.value}
                        />
                      </div>
                    );
                  })}
                </div>
              )}

              {colorChange === "main" && (
                <div className=" w-[80%] px-4 space-y-4">
                  {mainDetails?.map((i, index) => {
                    return (
                      <div key={index}>
                        <Input
                          label={i?.name}
                          placeholder={`Enter ${i?.name}`}
                          color={i?.styles?.color}
                          size={i?.styles?.size}
                          font={i?.styles?.font}
                          weight={i?.styles?.font_weight}
                          selectKey={() => setselectedKey(i?.name)}
                          setValue={(e) => {
                            if (
                              e.target.value === "" ||
                              /^[a-zA-Z\s]+$/.test(e.target.value)
                            ) {
                              return setUpdateValue(e.target.value);
                            }
                          }}
                          value={i?.value}
                        />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div className=" w-[40%] h-full flex flex-col space-y-8 overflow-auto relative ">
              <p className="text-[24px] font-semibold p-4">Text</p>
              <div className=" w-[60%] ml-3">
                <Select
                  styles={styles}
                  options={option}
                  placeholder="Select"
                  value={selectedFont}
                  SelectedValue={(e) => {
                    setselectedFont(e);
                  }}
                />
              </div>
              <div className="flex items-center space-x-4 ">
                <div className=" w-[50%] ml-3">
                  <Select
                    styles={styles1}
                    options={option1}
                    value={selectedweight}
                    SelectedValue={(e) => {
                      setselectedWeight(e);
                    }}
                    placeholder="Select"
                  />
                </div>
                <div className=" w-[35%]">
                  <Select
                    styles={styles2}
                    options={option2}
                    value={selectedsize}
                    SelectedValue={(e) => {
                      setselectedSize(e);
                    }}
                    placeholder="Select"
                  />
                </div>
              </div>
              <p className="text-[24px] font-semibold p-4">Colors</p>

              <div className="w-[80%] ml-4 grid grid-cols-5 gap-4">
                {colorOptions.map((i, index) => {
                  return (
                    <div
                      style={{
                        borderColor: i === selectedColor ? i : "transparent",
                      }}
                      key={index}
                      className={`cursor-pointer w-[48px] h-[48px] flex items-center justify-center  rounded-full ${
                        i === selectedColor ? "border-[2px]" : "border-[0px]"
                      }`}
                    >
                      <div
                        onClick={() => setSelectedColor(i)}
                        style={{ background: i }}
                        className={`w-[40px] h-[40px] rounded-full`}
                      ></div>
                    </div>
                  );
                })}
              </div>

              <div className=" absolute bottom-2 right-2 flex items-center">
                <button
                  onClick={modelHandel}
                  className="w-[100px] border-[1px] border-red-500 text-red-500 h-[35px] rounded-md"
                >
                  Cancel
                </button>
                <button
                  onClick={update}
                  className="ml-3 w-[100px] bg-primary_color text-white h-[35px] rounded-md"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </ModelPopup>
      </div>

      <div className=" 2xl:hidden xl:hidden lg:hidden md:block sm:block xs:hidden mobile:hidden xss:hidden">
        <ModelPopup height="95%" width="95%" showDrawer={openModel}>
          <div className="flex w-full h-full relative">
            <IoClose
              size={25}
              onClick={modelHandel}
              className="absolute z-40 top-1 right-3 cursor-pointer hover:text-red-500 transition-all duration-300"
            />

            <div className=" w-[60%] h-full overflow-auto border-r-[2px] border-gray-200 ">
              <p className="text-[24px] font-semibold p-4">
                {colorChange === "clinicDetails"
                  ? "Clinic Details"
                  : colorChange === "doctorDetails"
                  ? "Doctor Details"
                  : colorChange === "header"
                  ? "Header Details"
                  : colorChange === "main"
                  ? "Main Details"
                  : ""}
              </p>
              {colorChange === "clinicDetails" && (
                <div className=" w-[80%] px-4 space-y-4">
                  {clinicDetails?.map((i, index) => {
                    return (
                      <div key={index}>
                        {i?.name === "Address" ? (
                          <div className="flex flex-col gap-1">
                            <label className="mt-2">{i?.name}</label>
                            <textarea
                              style={{
                                color: i?.styles?.color,
                                fontFamily: i?.styles?.font,
                                fontSize: i?.styles?.size,
                                fontWeight: i?.styles?.font_weight,
                              }}
                              rows={4}
                              placeholder={`Enter ${i?.name}`}
                              className="resize-none outline-none p-2 border-[1px] border-gray-300 rounded-xl"
                              onClick={() => setselectedKey(i?.name)}
                              onChange={(e) => setUpdateValue(e.target.value)}
                              value={i?.value}
                            />
                          </div>
                        ) : (
                          <Input
                            label={i?.name}
                            placeholder={`Enter ${i?.name}`}
                            color={i?.styles?.color}
                            size={i?.styles?.size}
                            font={i?.styles?.font}
                            weight={i?.styles?.font_weight}
                            selectKey={() => setselectedKey(i?.name)}
                            setValue={(e) => {
                              const value = e.target.value;
                              if (i?.name === "Contact number") {
                                if (
                                  /^\d*$/.test(value) &&
                                  (i?.name !== "Contact number" ||
                                    value.length <= 10)
                                ) {
                                  return setUpdateValue(value);
                                }
                              } else if (i?.name === "Clinic Name") {
                                if (
                                  value === "" ||
                                  /^[a-zA-Z\s]+$/.test(value)
                                ) {
                                  return setUpdateValue(value);
                                }
                              } else {
                                return setUpdateValue(value);
                              }
                            }}
                            value={i?.value}
                            length={
                              i?.name === "Contact number"
                                ? 10
                                : i?.name === "GST No"
                                ? 15
                                : undefined
                            }
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {colorChange === "doctorDetails" && (
                <div className="w-[80%] px-4 space-y-4">
                  {doctorDetails?.map((i, index) => {
                    return (
                      <div key={index}>
                        <Input
                          label={i?.name}
                          placeholder={`Enter ${i?.name}`}
                          color={i?.styles?.color}
                          size={i?.styles?.size}
                          font={i?.styles?.font}
                          weight={i?.styles?.font_weight}
                          selectKey={() => setselectedKey(i?.name)}
                          setValue={(e) => {
                            if (
                              e.target.value === "" ||
                              /^[a-zA-Z\s]+$/.test(e.target.value)
                            ) {
                              return setUpdateValue(e.target.value);
                            }
                          }}
                          value={i?.value}
                        />
                      </div>
                    );
                  })}
                </div>
              )}

              {colorChange === "header" && (
                <div className=" w-[80%] px-4 space-y-4">
                  {headerDetails?.map((i, index) => {
                    return (
                      <div key={index}>
                        <Input
                          label={i?.name}
                          placeholder={`Enter ${i?.name}`}
                          color={i?.styles?.color}
                          size={i?.styles?.size}
                          font={i?.styles?.font}
                          weight={i?.styles?.font_weight}
                          selectKey={() => setselectedKey(i?.name)}
                          setValue={(e) => {
                            if (
                              e.target.value === "" ||
                              /^[a-zA-Z\s]+$/.test(e.target.value)
                            ) {
                              return setUpdateValue(e.target.value);
                            }
                          }}
                          value={i?.value}
                        />
                      </div>
                    );
                  })}
                </div>
              )}

              {colorChange === "main" && (
                <div className=" w-[80%] px-4 space-y-4">
                  {mainDetails?.map((i, index) => {
                    return (
                      <div key={index}>
                        <Input
                          label={i?.name}
                          placeholder={`Enter ${i?.name}`}
                          color={i?.styles?.color}
                          size={i?.styles?.size}
                          font={i?.styles?.font}
                          weight={i?.styles?.font_weight}
                          selectKey={() => setselectedKey(i?.name)}
                          setValue={(e) => {
                            if (
                              e.target.value === "" ||
                              /^[a-zA-Z\s]+$/.test(e.target.value)
                            ) {
                              return setUpdateValue(e.target.value);
                            }
                          }}
                          value={i?.value}
                        />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div className=" w-[40%] h-full flex flex-col space-y-8 overflow-auto relative ">
              <p className="text-[24px] font-semibold p-4">Text</p>
              <div className=" w-[60%] ml-3">
                <Select
                  styles={styles}
                  options={option}
                  placeholder="Select"
                  value={selectedFont}
                  SelectedValue={(e) => {
                    setselectedFont(e);
                  }}
                />
              </div>
              <div className="flex items-center space-x-4 ">
                <div className=" w-[50%] ml-3">
                  <Select
                    styles={styles1}
                    options={option1}
                    value={selectedweight}
                    SelectedValue={(e) => {
                      setselectedWeight(e);
                    }}
                    placeholder="Select"
                  />
                </div>
                <div className=" w-[35%]">
                  <Select
                    styles={styles2}
                    options={option2}
                    value={selectedsize}
                    SelectedValue={(e) => {
                      setselectedSize(e);
                    }}
                    placeholder="Select"
                  />
                </div>
              </div>
              <p className="text-[24px] font-semibold p-4">Colors</p>

              <div className="w-[80%] ml-4 grid grid-cols-5 gap-4">
                {colorOptions.map((i, index) => {
                  return (
                    <div
                      style={{
                        borderColor: i === selectedColor ? i : "transparent",
                      }}
                      key={index}
                      className={`cursor-pointer w-[48px] h-[48px] flex items-center justify-center  rounded-full ${
                        i === selectedColor ? "border-[2px]" : "border-[0px]"
                      }`}
                    >
                      <div
                        onClick={() => setSelectedColor(i)}
                        style={{ background: i }}
                        className={`w-[40px] h-[40px] rounded-full`}
                      ></div>
                    </div>
                  );
                })}
              </div>

              <div className=" absolute bottom-2 right-2 flex items-center">
                <button
                  onClick={modelHandel}
                  className="w-[100px] border-[1px] border-red-500 text-red-500 h-[35px] rounded-md"
                >
                  Cancel
                </button>
                <button
                  onClick={update}
                  className="ml-3 w-[100px] bg-primary_color text-white h-[35px] rounded-md"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </ModelPopup>
      </div>

      <div className=" 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:block mobile:block xss:hidden">
        <ModelPopup height="95%" width="90%" showDrawer={openModel}>
          <div className="flex flex-col w-full h-full relative">
            <IoClose
              size={25}
              onClick={modelHandel}
              className="absolute z-40 top-1 right-3 cursor-pointer hover:text-red-500 transition-all duration-300"
            />

            <div className=" w-full h-full overflow-auto border-r-[2px] border-gray-200 ">
              <p className="text-[24px] font-semibold p-4">
                {colorChange === "clinicDetails"
                  ? "Clinic Details"
                  : colorChange === "doctorDetails"
                  ? "Doctor Details"
                  : colorChange === "header"
                  ? "Header Details"
                  : colorChange === "main"
                  ? "Main Details"
                  : ""}
              </p>
              {colorChange === "clinicDetails" && (
                <div className=" w-[80%] px-4 space-y-4">
                  {clinicDetails?.map((i, index) => {
                    return (
                      <div key={index}>
                        {i?.name === "Address" ? (
                          <div className="flex flex-col gap-1">
                            <label className="mt-2">{i?.name}</label>
                            <textarea
                              style={{
                                color: i?.styles?.color,
                                fontFamily: i?.styles?.font,
                                fontSize: i?.styles?.size,
                                fontWeight: i?.styles?.font_weight,
                              }}
                              rows={4}
                              placeholder={`Enter ${i?.name}`}
                              className="resize-none outline-none p-2 border-[1px] border-gray-300 rounded-xl"
                              onClick={() => setselectedKey(i?.name)}
                              onChange={(e) => setUpdateValue(e.target.value)}
                              value={i?.value}
                            />
                          </div>
                        ) : (
                          <Input
                            label={i?.name}
                            placeholder={`Enter ${i?.name}`}
                            color={i?.styles?.color}
                            size={i?.styles?.size}
                            font={i?.styles?.font}
                            weight={i?.styles?.font_weight}
                            selectKey={() => setselectedKey(i?.name)}
                            setValue={(e) => {
                              const value = e.target.value;
                              if (i?.name === "Contact number") {
                                if (
                                  /^\d*$/.test(value) &&
                                  (i?.name !== "Contact number" ||
                                    value.length <= 10)
                                ) {
                                  return setUpdateValue(value);
                                }
                              } else if (i?.name === "Clinic Name") {
                                if (
                                  value === "" ||
                                  /^[a-zA-Z\s]+$/.test(value)
                                ) {
                                  return setUpdateValue(value);
                                }
                              } else {
                                return setUpdateValue(value);
                              }
                            }}
                            value={i?.value}
                            length={
                              i?.name === "Contact number"
                                ? 10
                                : i?.name === "GST No"
                                ? 15
                                : undefined
                            }
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {colorChange === "doctorDetails" && (
                <div className="w-[80%] px-4 space-y-4">
                  {doctorDetails?.map((i, index) => {
                    return (
                      <div key={index}>
                        <Input
                          label={i?.name}
                          placeholder={`Enter ${i?.name}`}
                          color={i?.styles?.color}
                          size={i?.styles?.size}
                          font={i?.styles?.font}
                          weight={i?.styles?.font_weight}
                          selectKey={() => setselectedKey(i?.name)}
                          setValue={(e) => {
                            if (
                              e.target.value === "" ||
                              /^[a-zA-Z\s]+$/.test(e.target.value)
                            ) {
                              return setUpdateValue(e.target.value);
                            }
                          }}
                          value={i?.value}
                        />
                      </div>
                    );
                  })}
                </div>
              )}

              {colorChange === "header" && (
                <div className=" w-[80%] px-4 space-y-4">
                  {headerDetails?.map((i, index) => {
                    return (
                      <div key={index}>
                        <Input
                          label={i?.name}
                          placeholder={`Enter ${i?.name}`}
                          color={i?.styles?.color}
                          size={i?.styles?.size}
                          font={i?.styles?.font}
                          weight={i?.styles?.font_weight}
                          selectKey={() => setselectedKey(i?.name)}
                          setValue={(e) => {
                            if (
                              e.target.value === "" ||
                              /^[a-zA-Z\s]+$/.test(e.target.value)
                            ) {
                              return setUpdateValue(e.target.value);
                            }
                          }}
                          value={i?.value}
                        />
                      </div>
                    );
                  })}
                </div>
              )}

              {colorChange === "main" && (
                <div className=" w-[80%] px-4 space-y-4">
                  {mainDetails?.map((i, index) => {
                    return (
                      <div key={index}>
                        <Input
                          label={i?.name}
                          placeholder={`Enter ${i?.name}`}
                          color={i?.styles?.color}
                          size={i?.styles?.size}
                          font={i?.styles?.font}
                          weight={i?.styles?.font_weight}
                          selectKey={() => setselectedKey(i?.name)}
                          setValue={(e) => {
                            if (
                              e.target.value === "" ||
                              /^[a-zA-Z\s]+$/.test(e.target.value)
                            ) {
                              return setUpdateValue(e.target.value);
                            }
                          }}
                          value={i?.value}
                        />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div className=" w-full h-full flex flex-col space-y-8 overflow-auto relative ">
              <p className="text-[24px] font-semibold p-4">Text</p>
              <div className=" w-[60%] ml-3">
                <Select
                  styles={styles}
                  options={option}
                  placeholder="Select"
                  value={selectedFont}
                  SelectedValue={(e) => {
                    setselectedFont(e);
                  }}
                />
              </div>
              <div className="flex items-center space-x-4 ">
                <div className=" w-[50%] ml-3">
                  <Select
                    styles={styles1}
                    options={option1}
                    value={selectedweight}
                    SelectedValue={(e) => {
                      setselectedWeight(e);
                    }}
                    placeholder="Select"
                  />
                </div>
                <div className=" w-[35%]">
                  <Select
                    styles={styles2}
                    options={option2}
                    value={selectedsize}
                    SelectedValue={(e) => {
                      setselectedSize(e);
                    }}
                    placeholder="Select"
                  />
                </div>
              </div>
              <p className="text-[24px] font-semibold p-4">Colors</p>

              <div className="w-[80%] ml-4 grid grid-cols-5 gap-4">
                {colorOptions.map((i, index) => {
                  return (
                    <div
                      style={{
                        borderColor: i === selectedColor ? i : "transparent",
                      }}
                      key={index}
                      className={`cursor-pointer w-[48px] h-[48px] flex items-center justify-center  rounded-full ${
                        i === selectedColor ? "border-[2px]" : "border-[0px]"
                      }`}
                    >
                      <div
                        onClick={() => setSelectedColor(i)}
                        style={{ background: i }}
                        className={`w-[40px] h-[40px] rounded-full`}
                      ></div>
                    </div>
                  );
                })}
              </div>

              <div className=" flex items-center justify-end px-4">
                <button
                  onClick={modelHandel}
                  className="w-[100px] border-[1px] border-red-500 text-red-500 h-[35px] rounded-md"
                >
                  Cancel
                </button>
                <button
                  onClick={update}
                  className="ml-3 w-[100px] bg-primary_color text-white h-[35px] rounded-md"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </ModelPopup>
      </div>

      <div className=" 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:hidden mobile:hidden xss:block">
        <ModelPopup height="95%" width="95%" showDrawer={openModel}>
          <div className="flex flex-col w-full h-full relative">
            <IoClose
              size={25}
              onClick={modelHandel}
              className="absolute z-40 top-1 right-3 cursor-pointer hover:text-red-500 transition-all duration-300"
            />

            <div className=" w-full h-full overflow-auto border-r-[2px] border-gray-200 ">
              <p className="text-[24px] font-semibold p-4">
                {colorChange === "clinicDetails"
                  ? "Clinic Details"
                  : colorChange === "doctorDetails"
                  ? "Doctor Details"
                  : colorChange === "header"
                  ? "Header Details"
                  : colorChange === "main"
                  ? "Main Details"
                  : ""}
              </p>
              {colorChange === "clinicDetails" && (
                <div className=" w-[80%] px-4 space-y-4">
                  {clinicDetails?.map((i, index) => {
                    return (
                      <div key={index}>
                        {i?.name === "Address" ? (
                          <div className="flex flex-col gap-1">
                            <label className="mt-2">{i?.name}</label>
                            <textarea
                              style={{
                                color: i?.styles?.color,
                                fontFamily: i?.styles?.font,
                                fontSize: i?.styles?.size,
                                fontWeight: i?.styles?.font_weight,
                              }}
                              rows={4}
                              placeholder={`Enter ${i?.name}`}
                              className="resize-none outline-none p-2 border-[1px] border-gray-300 rounded-xl"
                              onClick={() => setselectedKey(i?.name)}
                              onChange={(e) => setUpdateValue(e.target.value)}
                              value={i?.value}
                            />
                          </div>
                        ) : (
                          <Input
                            label={i?.name}
                            placeholder={`Enter ${i?.name}`}
                            color={i?.styles?.color}
                            size={i?.styles?.size}
                            font={i?.styles?.font}
                            weight={i?.styles?.font_weight}
                            selectKey={() => setselectedKey(i?.name)}
                            setValue={(e) => {
                              const value = e.target.value;
                              if (i?.name === "Contact number") {
                                if (
                                  /^\d*$/.test(value) &&
                                  (i?.name !== "Contact number" ||
                                    value.length <= 10)
                                ) {
                                  return setUpdateValue(value);
                                }
                              } else if (i?.name === "Clinic Name") {
                                if (
                                  value === "" ||
                                  /^[a-zA-Z\s]+$/.test(value)
                                ) {
                                  return setUpdateValue(value);
                                }
                              } else {
                                return setUpdateValue(value);
                              }
                            }}
                            value={i?.value}
                            length={
                              i?.name === "Contact number"
                                ? 10
                                : i?.name === "GST No"
                                ? 15
                                : undefined
                            }
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {colorChange === "doctorDetails" && (
                <div className="w-[80%] px-4 space-y-4">
                  {doctorDetails?.map((i, index) => {
                    return (
                      <div key={index}>
                        <Input
                          label={i?.name}
                          placeholder={`Enter ${i?.name}`}
                          color={i?.styles?.color}
                          size={i?.styles?.size}
                          font={i?.styles?.font}
                          weight={i?.styles?.font_weight}
                          selectKey={() => setselectedKey(i?.name)}
                          setValue={(e) => {
                            if (
                              e.target.value === "" ||
                              /^[a-zA-Z\s]+$/.test(e.target.value)
                            ) {
                              return setUpdateValue(e.target.value);
                            }
                          }}
                          value={i?.value}
                        />
                      </div>
                    );
                  })}
                </div>
              )}

              {colorChange === "header" && (
                <div className=" w-[80%] px-4 space-y-4">
                  {headerDetails?.map((i, index) => {
                    return (
                      <div key={index}>
                        <Input
                          label={i?.name}
                          placeholder={`Enter ${i?.name}`}
                          color={i?.styles?.color}
                          size={i?.styles?.size}
                          font={i?.styles?.font}
                          weight={i?.styles?.font_weight}
                          selectKey={() => setselectedKey(i?.name)}
                          setValue={(e) => {
                            if (
                              e.target.value === "" ||
                              /^[a-zA-Z\s]+$/.test(e.target.value)
                            ) {
                              return setUpdateValue(e.target.value);
                            }
                          }}
                          value={i?.value}
                        />
                      </div>
                    );
                  })}
                </div>
              )}

              {colorChange === "main" && (
                <div className=" w-[80%] px-4 space-y-4">
                  {mainDetails?.map((i, index) => {
                    return (
                      <div key={index}>
                        <Input
                          label={i?.name}
                          placeholder={`Enter ${i?.name}`}
                          color={i?.styles?.color}
                          size={i?.styles?.size}
                          font={i?.styles?.font}
                          weight={i?.styles?.font_weight}
                          selectKey={() => setselectedKey(i?.name)}
                          setValue={(e) => {
                            if (
                              e.target.value === "" ||
                              /^[a-zA-Z\s]+$/.test(e.target.value)
                            ) {
                              return setUpdateValue(e.target.value);
                            }
                          }}
                          value={i?.value}
                        />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div className=" w-full h-full flex flex-col space-y-8 overflow-auto relative ">
              <p className="text-[24px] font-semibold p-4">Text</p>
              <div className=" w-[60%] ml-3">
                <Select
                  styles={styles}
                  options={option}
                  placeholder="Select"
                  value={selectedFont}
                  SelectedValue={(e) => {
                    setselectedFont(e);
                  }}
                />
              </div>
              <div className="flex items-center space-x-4 ">
                <div className=" w-[50%] ml-3">
                  <Select
                    styles={styles1}
                    options={option1}
                    value={selectedweight}
                    SelectedValue={(e) => {
                      setselectedWeight(e);
                    }}
                    placeholder="Select"
                  />
                </div>
                <div className=" w-[35%]">
                  <Select
                    styles={styles2}
                    options={option2}
                    value={selectedsize}
                    SelectedValue={(e) => {
                      setselectedSize(e);
                    }}
                    placeholder="Select"
                  />
                </div>
              </div>
              <p className="text-[24px] font-semibold p-4">Colors</p>

              <div className="w-[80%] ml-4 grid grid-cols-5 gap-4">
                {colorOptions.map((i, index) => {
                  return (
                    <div
                      style={{
                        borderColor: i === selectedColor ? i : "transparent",
                      }}
                      key={index}
                      className={`cursor-pointer w-[48px] h-[48px] flex items-center justify-center  rounded-full ${
                        i === selectedColor ? "border-[2px]" : "border-[0px]"
                      }`}
                    >
                      <div
                        onClick={() => setSelectedColor(i)}
                        style={{ background: i }}
                        className={`w-[40px] h-[40px] rounded-full`}
                      ></div>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-end px-3">
                <button
                  onClick={modelHandel}
                  className="w-[100px] border-[1px] border-red-500 text-red-500 h-[35px] rounded-md"
                >
                  Cancel
                </button>
                <button
                  onClick={update}
                  className="ml-3 w-[100px] bg-primary_color text-white h-[35px] rounded-md"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </ModelPopup>
      </div>
    </>
  );
};

export default RightSide;
