import React from "react";

import Input from "../../Components/Properites/Inputs/Input";

import { TbEdit } from "react-icons/tb";
import { IoIosAdd } from "react-icons/io";
import { MdOutlineModeEdit } from "react-icons/md";
import { IoClose } from "react-icons/io5";

//Hooks
import RightSideFunction from "../../hooks/Prescription/rightSide";
import { useSelector } from "react-redux";
import ModelPopup from "../../Components/Properites/ModelPopup/ModelPopup";
import Select from "../../Components/Properites/Select/Select";

const RightSide = ({
  TranslateJson,
  values,
  handleChange,
  validationError,
  errors,
  gender,
  style,
  Options,
  base64Image,
  handleDeleteFile,
  setFieldValue,
  SelectGender,
}) => {
  const {
    handelImage,
    ImageInputRef,
    clinicLogoupdate,
    clinicalDetailsUpdate,
    doctorDetailsUpdate,
    headerAdd,
    headerUpdate,
    mainAdd,
    mainUpdate,
    colorChange,
    setColorChange,
    option,
    styles,
    styles1,
    option1,
    styles2,
    option2,
    colorOptions,
    selectedColor,
    setSelectedColor,
    modelHandel,
    openModel,
    updates,
    setselectedKey,
    updateInputStyles,
    selectedFont,
    selectedsize,
    selectedweight,
    setselectedFont,
    setselectedSize,
    setselectedWeight,
    updateState,
    setchange,
    setchange1,
    setchange2,
  } = RightSideFunction();

  const {
    clinicLogo,
    clinicDetails,
    doctorDetails,
    headerDetails,
    mainDetails,
  } = useSelector((state) => state.PrescriptionDetails);

  return (
    <>
      <div className="prescription-right-top">
        <div className="prescription-right-top-inside">
          <div
            onClick={handelImage}
            className="prescription-right-top-inside-image"
          >
            <input type="file" ref={ImageInputRef} className="hidden" />

            <button
              onClick={handelImage}
              className="prescription-right-top-inside-image-edit-button"
            >
              <MdOutlineModeEdit size={16} />
            </button>
          </div>
          <input
            name="title"
            id="title"
            placeholder="Title"
            className="prescription-right-top-input"
            value={clinicLogo.title}
            onChange={(e) => clinicLogoupdate({ title: e.target.value })}
          />
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
          {console.log(
            "clinicDetails?.name?.color",
            clinicDetails?.name?.color
          )}
          <Input
            label="Clinic Name"
            id="clinic_name"
            name="clinic_name"
            placeholder="Enter Clinic name"
            value={clinicDetails?.name?.value}
            setValue={(e) => {
              clinicalDetailsUpdate({ value: e.target.value });
            }}
            color={clinicDetails?.name?.color}
            size={clinicDetails?.name?.size}
            font={clinicDetails?.name?.font}
            weight={clinicDetails?.name?.weight}
            selectKey={() => setselectedKey("name")}
          />
          <Input
            label="Contact number"
            id="contact_number"
            name="contact_number"
            placeholder="Enter Contact number"
            value={clinicDetails?.contact_number?.value}
            setValue={(e) => {
              clinicalDetailsUpdate({ value: e.target.value });
            }}
            color={clinicDetails?.contact_number?.color}
            size={clinicDetails?.contact_number?.size}
            font={clinicDetails?.contact_number?.font}
            weight={clinicDetails?.contact_number?.weight}
            selectKey={() => setselectedKey("contact_number")}
          />
          <div className="flex flex-col gap-1">
            <label className="mt-2">Address</label>
            <textarea
              style={{
                color: clinicDetails?.address?.color,
                fontFamily: clinicDetails?.address?.font,
                fontSize: clinicDetails?.address?.size,
                fontWeight: clinicDetails?.address?.weight,
              }}
              id="address"
              name="address"
              rows={4}
              placeholder="Enter Address"
              className="resize-none outline-none p-2 border-[1px] border-gray-300 rounded-xl"
              value={clinicDetails?.address?.value}
              onChange={(e) => clinicalDetailsUpdate({ value: e.target.value })}
              onClick={() => setselectedKey("address")}
            />
          </div>

          <Input
            label="GST No"
            id="gst_no"
            name="gst_no"
            placeholder="Enter GST number"
            setValue={(e) => clinicalDetailsUpdate({ value: e.target.value })}
            value={clinicDetails?.gst_no?.value}
            color={clinicDetails?.gst_no?.color}
            size={clinicDetails?.gst_no?.size}
            font={clinicDetails?.gst_no?.font}
            weight={clinicDetails?.gst_no?.weight}
            selectKey={() => setselectedKey("gst_no")}
          />
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
          <Input
            label="Doctor Name"
            id="doctor_name"
            name="doctor_name"
            placeholder="Enter Doctor name"
            setValue={(e) => doctorDetailsUpdate({ value: e.target.value })}
            value={doctorDetails?.doctor_name?.value}
            color={doctorDetails?.doctor_name?.color}
            size={doctorDetails?.doctor_name?.size}
            font={doctorDetails?.doctor_name?.font}
            weight={doctorDetails?.doctor_name?.weight}
            selectKey={() => setselectedKey("doctor_name")}
          />
          <Input
            label="Speciality"
            id="speciality"
            name="speciality"
            placeholder="Enter Speciality"
            setValue={(e) =>
              doctorDetailsUpdate({ value: e.target.value })
            }
            value={doctorDetails?.speciality?.value}
            color={doctorDetails?.speciality?.color}
            size={doctorDetails?.speciality?.size}
            font={doctorDetails?.speciality?.font}
            weight={doctorDetails?.speciality?.weight}
            selectKey={() => setselectedKey("speciality")}
          />
          <Input
            label="Degree"
            id="degree"
            name="degree"
            placeholder="Enter degree"
            setValue={(e) => doctorDetailsUpdate({ value: e.target.value })}
            value={doctorDetails?.degree?.value}
            color={doctorDetails?.degree?.color}
            size={doctorDetails?.degree?.size}
            font={doctorDetails?.degree?.font}
            weight={doctorDetails?.degree?.weight}
            selectKey={() => setselectedKey("degree")}
          />
          <Input
            label="Work"
            id="work"
            name="work"
            placeholder="Enter Work"
            setValue={(e) => doctorDetailsUpdate({ value: e.target.value })}
            value={doctorDetails?.work?.value}
            color={doctorDetails?.work?.color}
            size={doctorDetails?.work?.size}
            font={doctorDetails?.work?.font}
            weight={doctorDetails?.work?.weight}
            selectKey={() => setselectedKey("work")}
          />
        </div>
      </div>

      <div className="prescription-right-content-container">
        <div className="prescription-right-content-container-header">
          <h1 className="prescription-right-content-container-header-text">
            Header
          </h1>
          <button
            onClick={() => {
              setColorChange("headerDetails");
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
          {headerDetails?.map(({ title, color, size, font, weight }, index) => (
            <div className="input-container">
              <div className={`input-box`}>
                <input
                  style={{
                    color,
                    fontSize: size,
                    fontFamily: font,
                    fontWeight: weight,
                  }}
                  className={`input border-gray-300`}
                  type="text"
                  placeholder={`Title ${index}`}
                  value={title}
                  onChange={(e) =>
                    headerUpdate(index, { title: e.target.value })
                  }
                />
              </div>
            </div>
          ))}
        </div>
        {headerDetails?.length !== 5 && (
          <button
            onClick={headerAdd}
            className="prescription-right-content-container-add-new-button"
          >
            <span>Add New Field</span> <IoIosAdd size={30} />
          </button>
        )}
      </div>

      <div className="prescription-right-content-container">
        <div className="prescription-right-content-container-header">
          <h1 className="prescription-right-content-container-header-text">
            Main
          </h1>
          <button
            onClick={() => {
              setColorChange("mainDetails");
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
          {mainDetails?.map(({ title, color, size, font, weight }, index) => (
            <div className="prescription-right-content-container-input1-container">
              <div className="input-container">
                <div className={`input-box`}>
                  <input
                    style={{
                      color,
                      fontSize: size,
                      fontFamily: font,
                      fontWeight: weight,
                    }}
                    className={`input border-gray-300`}
                    type="text"
                    placeholder={`Title ${index}`}
                    value={title}
                    onChange={(e) =>
                      mainUpdate(index, { title: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={mainAdd}
          className="prescription-right-content-container-add-new-button"
        >
          <span>Add New Field</span> <IoIosAdd size={30} />
        </button>
      </div>

      <div className=" 2xl:block xl:block lg:hidden md:hidden sm:hidden xs:hidden mobile:hidden xss:hidden">
        <ModelPopup height="80%" width="50%" showDrawer={openModel}>
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
                  : colorChange === "headerDetails"
                  ? "Header Details"
                  : colorChange === "mainDetails"
                  ? "Main Details"
                  : ""}
              </p>
              {colorChange === "clinicDetails" && (
                <div className=" w-[80%] px-4 space-y-4">
                  <Input
                    label="Clinic Name"
                    id="clinic_name"
                    name="clinic_name"
                    placeholder="Enter Clinic Name"
                    setValue={(e) =>
                      updateInputStyles({ value: e.target.value })
                    }
                    value={updates?.name?.value}
                    color={updates?.name?.color}
                    size={updates?.name?.size}
                    font={updates?.name?.font}
                    weight={updates?.name?.weight}
                    selectKey={() => setselectedKey("name")}
                  />
                  <Input
                    label="Phone"
                    id="phone"
                    name="phone"
                    placeholder="Enter Phone"
                    setValue={(e) =>
                      updateInputStyles({ value: e.target.value })
                    }
                    value={updates?.contact_number?.value}
                    color={updates?.contact_number?.color}
                    size={updates?.contact_number?.size}
                    font={updates?.contact_number?.font}
                    weight={updates?.contact_number?.weight}
                    selectKey={() => setselectedKey("contact_number")}
                  />

                  <div className=" flex flex-col gap-1">
                    <label className="mt-2">Address</label>
                    <textarea
                      style={{
                        color: updates?.address?.color,
                        fontWeight: updates?.address?.weight,
                        fontSize: updates?.address?.size,
                        fontFamily: updates?.address?.font,
                      }}
                      id="address"
                      name="address"
                      rows={3}
                      onClick={() => setselectedKey("address")}
                      placeholder="Enter Address"
                      className=" resize-none outline-none p-2 border-[1px] border-gray-300 rounded-xl"
                      onChange={(e) =>
                        updateInputStyles({ value: e.target.value })
                      }
                      value={updates?.address?.value}
                    />
                  </div>
                  <Input
                    label="GST No"
                    id="gst_no"
                    name="gst_no"
                    placeholder="Enter GST number"
                    setValue={(e) =>
                      updateInputStyles({ value: e.target.value })
                    }
                    value={updates?.gst_no?.value}
                    color={updates?.gst_no?.color}
                    size={updates?.gst_no?.size}
                    font={updates?.gst_no?.font}
                    weight={updates?.gst_no?.weight}
                    selectKey={() => setselectedKey("gst_no")}
                  />
                </div>
              )}

              {colorChange === "doctorDetails" && (
                <div className=" w-[80%] px-4 space-y-4">
                  <Input
                    label="Doctor Name"
                    id="doctor_name"
                    name="doctor_name"
                    placeholder="Enter Doctor name"
                    setValue={(e) =>
                      updateInputStyles({ value: e.target.value })
                    }
                    value={updates?.doctor_name?.value}
                    color={updates?.doctor_name?.color}
                    size={updates?.doctor_name?.size}
                    font={updates?.doctor_name?.font}
                    weight={updates?.doctor_name?.weight}
                    selectKey={() => setselectedKey("doctor_name")}
                  />
                  <Input
                    label="Speciality"
                    id="speciality"
                    name="speciality"
                    placeholder="Enter Speciality"
                    setValue={(e) =>
                      updateInputStyles({ value: e.target.value })
                    }
                    value={updates?.speciality?.value}
                    color={updates?.speciality?.color}
                    size={updates?.speciality?.size}
                    font={updates?.speciality?.font}
                    weight={updates?.speciality?.weight}
                    selectKey={() => setselectedKey("speciality")}
                  />
                  <Input
                    label="Degree"
                    id="degree"
                    name="degree"
                    placeholder="Enter degree"
                    setValue={(e) =>
                      updateInputStyles({ value: e.target.value })
                    }
                    value={updates?.degree?.value}
                    color={updates?.degree?.color}
                    size={updates?.degree?.size}
                    font={updates?.degree?.font}
                    weight={updates?.degree?.weight}
                    selectKey={() => setselectedKey("degree")}
                  />
                  <Input
                    label="Work"
                    id="work"
                    name="work"
                    placeholder="Enter Work"
                    setValue={(e) =>
                      updateInputStyles({ value: e.target.value })
                    }
                    value={updates?.work?.value}
                    color={updates?.work?.color}
                    size={updates?.work?.size}
                    font={updates?.work?.font}
                    weight={updates?.work?.weight}
                    selectKey={() => setselectedKey("work")}
                  />
                </div>
              )}

              {colorChange === "headerDetails" && (
                <div className=" w-[80%] px-4 space-y-4">
                  {updates &&
                    updates.map((i, index) => (
                      <Input
                        key={index}
                        label="Title Name"
                        id="title_name"
                        name="title_name"
                        placeholder="Enter Title name"
                        setValue={(e) => updateInputStyles(e.target.value)}
                        value={i?.title}
                        color={i?.color}
                        size={i?.size}
                        font={i?.font}
                        weight={i?.weight}
                        selectKey={() => setselectedKey(index)}
                      />
                    ))}
                </div>
              )}

              {colorChange === "mainDetails" && (
                <div className=" w-[80%] px-4 space-y-4">
                  {updates &&
                    updates.map((i, index) => (
                      <Input
                        key={index}
                        label="Title Name"
                        id="title_name"
                        name="title_name"
                        placeholder="Enter Title name"
                        setValue={(e) => updateInputStyles(e.target.value)}
                        value={i?.title}
                        color={i?.color}
                        size={i?.size}
                        font={i?.font}
                        weight={i?.weight}
                        selectKey={() => setselectedKey(index)}
                      />
                    ))}
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
                    setchange("change");
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
                      setchange1("change");
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
                      setchange2("change");
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
                  onClick={updateState}
                  className="ml-3 w-[100px] bg-primary_color text-white h-[35px] rounded-md"
                >
                  Update
                </button>
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
                  : colorChange === "headerDetails"
                  ? "Header Details"
                  : colorChange === "mainDetails"
                  ? "Main Details"
                  : ""}
              </p>
              {colorChange === "clinicDetails" && (
                <div className=" w-[80%] px-4 space-y-4">
                  <Input
                    label="Clinic Name"
                    id="clinic_name"
                    name="clinic_name"
                    placeholder="Enter Clinic Name"
                    setValue={(e) =>
                      updateInputStyles({ value: e.target.value })
                    }
                    value={updates?.name?.value}
                    color={updates?.name?.color}
                    size={updates?.name?.size}
                    font={updates?.name?.font}
                    weight={updates?.name?.weight}
                    selectKey={() => setselectedKey("name")}
                  />
                  <Input
                    label="Phone"
                    id="phone"
                    name="phone"
                    placeholder="Enter Phone"
                    setValue={(e) =>
                      updateInputStyles({ value: e.target.value })
                    }
                    value={updates?.contact_number?.value}
                    color={updates?.contact_number?.color}
                    size={updates?.contact_number?.size}
                    font={updates?.contact_number?.font}
                    weight={updates?.contact_number?.weight}
                    selectKey={() => setselectedKey("contact_number")}
                  />

                  <div className=" flex flex-col gap-1">
                    <label className="mt-2">Address</label>
                    <textarea
                      style={{
                        color: updates?.address?.color,
                        fontWeight: updates?.address?.weight,
                        fontSize: updates?.address?.size,
                        fontFamily: updates?.address?.font,
                      }}
                      id="address"
                      name="address"
                      rows={3}
                      onClick={() => setselectedKey("address")}
                      placeholder="Enter Address"
                      className=" resize-none outline-none p-2 border-[1px] border-gray-300 rounded-xl"
                      onChange={(e) =>
                        updateInputStyles({ value: e.target.value })
                      }
                      value={updates?.address?.value}
                    />
                  </div>
                  <Input
                    label="GST No"
                    id="gst_no"
                    name="gst_no"
                    placeholder="Enter GST number"
                    setValue={(e) =>
                      updateInputStyles({ value: e.target.value })
                    }
                    value={updates?.gst_no?.value}
                    color={updates?.gst_no?.color}
                    size={updates?.gst_no?.size}
                    font={updates?.gst_no?.font}
                    weight={updates?.gst_no?.weight}
                    selectKey={() => setselectedKey("gst_no")}
                  />
                </div>
              )}

              {colorChange === "doctorDetails" && (
                <div className="w-[80%] px-4 space-y-4">
                  <Input
                    label="Doctor Name"
                    id="doctor_name"
                    name="doctor_name"
                    placeholder="Enter Doctor name"
                    setValue={(e) =>
                      updateInputStyles({ value: e.target.value })
                    }
                    value={updates?.doctor_name?.value}
                    color={updates?.doctor_name?.color}
                    size={updates?.doctor_name?.size}
                    font={updates?.doctor_name?.font}
                    weight={updates?.doctor_name?.weight}
                    selectKey={() => setselectedKey("doctor_name")}
                  />
                  <Input
                    label="Speciality"
                    id="speciality"
                    name="speciality"
                    placeholder="Enter Speciality"
                    setValue={(e) =>
                      updateInputStyles({ value: e.target.value })
                    }
                    value={updates?.speciality?.value}
                    color={updates?.speciality?.color}
                    size={updates?.speciality?.size}
                    font={updates?.speciality?.font}
                    weight={updates?.speciality?.weight}
                    selectKey={() => setselectedKey("speciality")}
                  />
                  <Input
                    label="Degree"
                    id="degree"
                    name="degree"
                    placeholder="Enter degree"
                    setValue={(e) =>
                      updateInputStyles({ value: e.target.value })
                    }
                    value={updates?.degree?.value}
                    color={updates?.degree?.color}
                    size={updates?.degree?.size}
                    font={updates?.degree?.font}
                    weight={updates?.degree?.weight}
                    selectKey={() => setselectedKey("degree")}
                  />
                  <Input
                    label="Work"
                    id="work"
                    name="work"
                    placeholder="Enter Work"
                    setValue={(e) =>
                      updateInputStyles({ value: e.target.value })
                    }
                    value={updates?.work?.value}
                    color={updates?.work?.color}
                    size={updates?.work?.size}
                    font={updates?.work?.font}
                    weight={updates?.work?.weight}
                    selectKey={() => setselectedKey("work")}
                  />
                </div>
              )}

              {colorChange === "headerDetails" && (
                <div className=" w-[80%] px-4 space-y-4">
                  {updates &&
                    updates.map((i, index) => (
                      <Input
                        key={index}
                        label="Title Name"
                        id="title_name"
                        name="title_name"
                        placeholder="Enter Title name"
                        setValue={(e) => updateInputStyles(e.target.value)}
                        value={i?.title}
                        color={i?.color}
                        size={i?.size}
                        font={i?.font}
                        weight={i?.weight}
                        selectKey={() => setselectedKey(index)}
                      />
                    ))}
                </div>
              )}

              {colorChange === "mainDetails" && (
                <div className=" w-[80%] px-4 space-y-4">
                  {updates &&
                    updates.map((i, index) => (
                      <Input
                        key={index}
                        label="Title Name"
                        id="title_name"
                        name="title_name"
                        placeholder="Enter Title name"
                        setValue={(e) => updateInputStyles(e.target.value)}
                        value={i?.title}
                        color={i?.color}
                        size={i?.size}
                        font={i?.font}
                        weight={i?.weight}
                        selectKey={() => setselectedKey(index)}
                      />
                    ))}
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
                    setchange("change");
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
                      setchange1("change");
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
                      setchange2("change");
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
                  onClick={updateState}
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
                  : colorChange === "headerDetails"
                  ? "Header Details"
                  : colorChange === "mainDetails"
                  ? "Main Details"
                  : ""}
              </p>
              {colorChange === "clinicDetails" && (
                <div className=" w-[80%] px-4 space-y-4">
                  <Input
                    label="Clinic Name"
                    id="clinic_name"
                    name="clinic_name"
                    placeholder="Enter Clinic Name"
                    setValue={(e) =>
                      updateInputStyles({ value: e.target.value })
                    }
                    value={updates?.name?.value}
                    color={updates?.name?.color}
                    size={updates?.name?.size}
                    font={updates?.name?.font}
                    weight={updates?.name?.weight}
                    selectKey={() => setselectedKey("name")}
                  />
                  <Input
                    label="Phone"
                    id="phone"
                    name="phone"
                    placeholder="Enter Phone"
                    setValue={(e) =>
                      updateInputStyles({ value: e.target.value })
                    }
                    value={updates?.contact_number?.value}
                    color={updates?.contact_number?.color}
                    size={updates?.contact_number?.size}
                    font={updates?.contact_number?.font}
                    weight={updates?.contact_number?.weight}
                    selectKey={() => setselectedKey("contact_number")}
                  />

                  <div className=" flex flex-col gap-1">
                    <label className="mt-2">Address</label>
                    <textarea
                      style={{
                        color: updates?.address?.color,
                        fontWeight: updates?.address?.weight,
                        fontSize: updates?.address?.size,
                        fontFamily: updates?.address?.font,
                      }}
                      id="address"
                      name="address"
                      rows={3}
                      onClick={() => setselectedKey("address")}
                      placeholder="Enter Address"
                      className=" resize-none outline-none p-2 border-[1px] border-gray-300 rounded-xl"
                      onChange={(e) =>
                        updateInputStyles({ value: e.target.value })
                      }
                      value={updates?.address?.value}
                    />
                  </div>
                  <Input
                    label="GST No"
                    id="gst_no"
                    name="gst_no"
                    placeholder="Enter GST number"
                    setValue={(e) =>
                      updateInputStyles({ value: e.target.value })
                    }
                    value={updates?.gst_no?.value}
                    color={updates?.gst_no?.color}
                    size={updates?.gst_no?.size}
                    font={updates?.gst_no?.font}
                    weight={updates?.gst_no?.weight}
                    selectKey={() => setselectedKey("gst_no")}
                  />
                </div>
              )}

              {colorChange === "doctorDetails" && (
                <div className="w-[80%] px-4 space-y-4">
                  <Input
                    label="Doctor Name"
                    id="doctor_name"
                    name="doctor_name"
                    placeholder="Enter Doctor name"
                    setValue={(e) =>
                      updateInputStyles({ value: e.target.value })
                    }
                    value={updates?.doctor_name?.value}
                    color={updates?.doctor_name?.color}
                    size={updates?.doctor_name?.size}
                    font={updates?.doctor_name?.font}
                    weight={updates?.doctor_name?.weight}
                    selectKey={() => setselectedKey("doctor_name")}
                  />
                  <Input
                    label="Speciality"
                    id="speciality"
                    name="speciality"
                    placeholder="Enter Speciality"
                    setValue={(e) =>
                      updateInputStyles({ value: e.target.value })
                    }
                    value={updates?.speciality?.value}
                    color={updates?.speciality?.color}
                    size={updates?.speciality?.size}
                    font={updates?.speciality?.font}
                    weight={updates?.speciality?.weight}
                    selectKey={() => setselectedKey("speciality")}
                  />
                  <Input
                    label="Degree"
                    id="degree"
                    name="degree"
                    placeholder="Enter degree"
                    setValue={(e) =>
                      updateInputStyles({ value: e.target.value })
                    }
                    value={updates?.degree?.value}
                    color={updates?.degree?.color}
                    size={updates?.degree?.size}
                    font={updates?.degree?.font}
                    weight={updates?.degree?.weight}
                    selectKey={() => setselectedKey("degree")}
                  />
                  <Input
                    label="Work"
                    id="work"
                    name="work"
                    placeholder="Enter Work"
                    setValue={(e) =>
                      updateInputStyles({ value: e.target.value })
                    }
                    value={updates?.work?.value}
                    color={updates?.work?.color}
                    size={updates?.work?.size}
                    font={updates?.work?.font}
                    weight={updates?.work?.weight}
                    selectKey={() => setselectedKey("work")}
                  />
                </div>
              )}

              {colorChange === "headerDetails" && (
                <div className=" w-[80%] px-4 space-y-4">
                  {updates &&
                    updates.map((i, index) => (
                      <Input
                        key={index}
                        label="Title Name"
                        id="title_name"
                        name="title_name"
                        placeholder="Enter Title name"
                        setValue={(e) => updateInputStyles(e.target.value)}
                        value={i?.title}
                        color={i?.color}
                        size={i?.size}
                        font={i?.font}
                        weight={i?.weight}
                        selectKey={() => setselectedKey(index)}
                      />
                    ))}
                </div>
              )}

              {colorChange === "mainDetails" && (
                <div className=" w-[80%] px-4 space-y-4">
                  {updates &&
                    updates.map((i, index) => (
                      <Input
                        key={index}
                        label="Title Name"
                        id="title_name"
                        name="title_name"
                        placeholder="Enter Title name"
                        setValue={(e) => updateInputStyles(e.target.value)}
                        value={i?.title}
                        color={i?.color}
                        size={i?.size}
                        font={i?.font}
                        weight={i?.weight}
                        selectKey={() => setselectedKey(index)}
                      />
                    ))}
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
                    setchange("change");
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
                      setselectedWeight1(e);
                      setchange("change");
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
                      setchange2("change");
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
                  onClick={updateState}
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
                  : colorChange === "headerDetails"
                  ? "Header Details"
                  : colorChange === "mainDetails"
                  ? "Main Details"
                  : ""}
              </p>
              {colorChange === "clinicDetails" && (
                <div className=" w-[80%] px-4 space-y-4">
                  <Input
                    label="Clinic Name"
                    id="clinic_name"
                    name="clinic_name"
                    placeholder="Enter Clinic Name"
                    setValue={(e) =>
                      updateInputStyles({ value: e.target.value })
                    }
                    value={updates?.name?.value}
                    color={updates?.name?.color}
                    size={updates?.name?.size}
                    font={updates?.name?.font}
                    weight={updates?.name?.weight}
                    selectKey={() => setselectedKey("name")}
                  />
                  <Input
                    label="Phone"
                    id="phone"
                    name="phone"
                    placeholder="Enter Phone"
                    setValue={(e) =>
                      updateInputStyles({ value: e.target.value })
                    }
                    value={updates?.contact_number?.value}
                    color={updates?.contact_number?.color}
                    size={updates?.contact_number?.size}
                    font={updates?.contact_number?.font}
                    weight={updates?.contact_number?.weight}
                    selectKey={() => setselectedKey("contact_number")}
                  />

                  <div className=" flex flex-col gap-1">
                    <label className="mt-2">Address</label>
                    <textarea
                      style={{
                        color: updates?.address?.color,
                        fontWeight: updates?.address?.weight,
                        fontSize: updates?.address?.size,
                        fontFamily: updates?.address?.font,
                      }}
                      id="address"
                      name="address"
                      rows={3}
                      onClick={() => setselectedKey("address")}
                      placeholder="Enter Address"
                      className=" resize-none outline-none p-2 border-[1px] border-gray-300 rounded-xl"
                      onChange={(e) =>
                        updateInputStyles({ value: e.target.value })
                      }
                      value={updates?.address?.value}
                    />
                  </div>
                  <Input
                    label="GST No"
                    id="gst_no"
                    name="gst_no"
                    placeholder="Enter GST number"
                    setValue={(e) =>
                      updateInputStyles({ value: e.target.value })
                    }
                    value={updates?.gst_no?.value}
                    color={updates?.gst_no?.color}
                    size={updates?.gst_no?.size}
                    font={updates?.gst_no?.font}
                    weight={updates?.gst_no?.weight}
                    selectKey={() => setselectedKey("gst_no")}
                  />
                </div>
              )}

              {colorChange === "doctorDetails" && (
                <div className="w-[80%] px-4 space-y-4">
                  <Input
                    label="Doctor Name"
                    id="doctor_name"
                    name="doctor_name"
                    placeholder="Enter Doctor name"
                    setValue={(e) =>
                      updateInputStyles({ value: e.target.value })
                    }
                    value={updates?.doctor_name?.value}
                    color={updates?.doctor_name?.color}
                    size={updates?.doctor_name?.size}
                    font={updates?.doctor_name?.font}
                    weight={updates?.doctor_name?.weight}
                    selectKey={() => setselectedKey("doctor_name")}
                  />
                  <Input
                    label="Speciality"
                    id="speciality"
                    name="speciality"
                    placeholder="Enter Speciality"
                    setValue={(e) =>
                      updateInputStyles({ value: e.target.value })
                    }
                    value={updates?.speciality?.value}
                    color={updates?.speciality?.color}
                    size={updates?.speciality?.size}
                    font={updates?.speciality?.font}
                    weight={updates?.speciality?.weight}
                    selectKey={() => setselectedKey("speciality")}
                  />
                  <Input
                    label="Degree"
                    id="degree"
                    name="degree"
                    placeholder="Enter degree"
                    setValue={(e) =>
                      updateInputStyles({ value: e.target.value })
                    }
                    value={updates?.degree?.value}
                    color={updates?.degree?.color}
                    size={updates?.degree?.size}
                    font={updates?.degree?.font}
                    weight={updates?.degree?.weight}
                    selectKey={() => setselectedKey("degree")}
                  />
                  <Input
                    label="Work"
                    id="work"
                    name="work"
                    placeholder="Enter Work"
                    setValue={(e) =>
                      updateInputStyles({ value: e.target.value })
                    }
                    value={updates?.work?.value}
                    color={updates?.work?.color}
                    size={updates?.work?.size}
                    font={updates?.work?.font}
                    weight={updates?.work?.weight}
                    selectKey={() => setselectedKey("work")}
                  />
                </div>
              )}

              {colorChange === "headerDetails" && (
                <div className=" w-[80%] px-4 space-y-4">
                  {updates &&
                    updates.map((i, index) => (
                      <Input
                        key={index}
                        label="Title Name"
                        id="title_name"
                        name="title_name"
                        placeholder="Enter Title name"
                        setValue={(e) => updateInputStyles(e.target.value)}
                        value={i?.title}
                        color={i?.color}
                        size={i?.size}
                        font={i?.font}
                        weight={i?.weight}
                        selectKey={() => setselectedKey(index)}
                      />
                    ))}
                </div>
              )}

              {colorChange === "mainDetails" && (
                <div className=" w-[80%] px-4 space-y-4">
                  {updates &&
                    updates.map((i, index) => (
                      <Input
                        key={index}
                        label="Title Name"
                        id="title_name"
                        name="title_name"
                        placeholder="Enter Title name"
                        setValue={(e) => updateInputStyles(e.target.value)}
                        value={i?.title}
                        color={i?.color}
                        size={i?.size}
                        font={i?.font}
                        weight={i?.weight}
                        selectKey={() => setselectedKey(index)}
                      />
                    ))}
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
                    setchange("change");
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
                      setchange1("change");
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
                      setchange2("change");
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
                  onClick={updateState}
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
                  : colorChange === "headerDetails"
                  ? "Header Details"
                  : colorChange === "mainDetails"
                  ? "Main Details"
                  : ""}
              </p>
              {colorChange === "clinicDetails" && (
                <div className=" w-[80%] px-4 space-y-4">
                  <Input
                    label="Clinic Name"
                    id="clinic_name"
                    name="clinic_name"
                    placeholder="Enter Clinic Name"
                    setValue={(e) =>
                      updateInputStyles({ value: e.target.value })
                    }
                    value={updates?.name?.value}
                    color={updates?.name?.color}
                    size={updates?.name?.size}
                    font={updates?.name?.font}
                    weight={updates?.name?.weight}
                    selectKey={() => setselectedKey("name")}
                  />
                  <Input
                    label="Phone"
                    id="phone"
                    name="phone"
                    placeholder="Enter Phone"
                    setValue={(e) =>
                      updateInputStyles({ value: e.target.value })
                    }
                    value={updates?.contact_number?.value}
                    color={updates?.contact_number?.color}
                    size={updates?.contact_number?.size}
                    font={updates?.contact_number?.font}
                    weight={updates?.contact_number?.weight}
                    selectKey={() => setselectedKey("contact_number")}
                  />

                  <div className=" flex flex-col gap-1">
                    <label className="mt-2">Address</label>
                    <textarea
                      style={{
                        color: updates?.address?.color,
                        fontWeight: updates?.address?.weight,
                        fontSize: updates?.address?.size,
                        fontFamily: updates?.address?.font,
                      }}
                      id="address"
                      name="address"
                      rows={3}
                      onClick={() => setselectedKey("address")}
                      placeholder="Enter Address"
                      className=" resize-none outline-none p-2 border-[1px] border-gray-300 rounded-xl"
                      onChange={(e) =>
                        updateInputStyles({ value: e.target.value })
                      }
                      value={updates?.address?.value}
                    />
                  </div>
                  <Input
                    label="GST No"
                    id="gst_no"
                    name="gst_no"
                    placeholder="Enter GST number"
                    setValue={(e) =>
                      updateInputStyles({ value: e.target.value })
                    }
                    value={updates?.gst_no?.value}
                    color={updates?.gst_no?.color}
                    size={updates?.gst_no?.size}
                    font={updates?.gst_no?.font}
                    weight={updates?.gst_no?.weight}
                    selectKey={() => setselectedKey("gst_no")}
                  />
                </div>
              )}

              {colorChange === "doctorDetails" && (
                <div className="w-[80%] px-4 space-y-4">
                  <Input
                    label="Doctor Name"
                    id="doctor_name"
                    name="doctor_name"
                    placeholder="Enter Doctor name"
                    setValue={(e) =>
                      updateInputStyles({ value: e.target.value })
                    }
                    value={updates?.doctor_name?.value}
                    color={updates?.doctor_name?.color}
                    size={updates?.doctor_name?.size}
                    font={updates?.doctor_name?.font}
                    weight={updates?.doctor_name?.weight}
                    selectKey={() => setselectedKey("doctor_name")}
                  />
                  <Input
                    label="Speciality"
                    id="speciality"
                    name="speciality"
                    placeholder="Enter Speciality"
                    setValue={(e) =>
                      updateInputStyles({ value: e.target.value })
                    }
                    value={updates?.speciality?.value}
                    color={updates?.speciality?.color}
                    size={updates?.speciality?.size}
                    font={updates?.speciality?.font}
                    weight={updates?.speciality?.weight}
                    selectKey={() => setselectedKey("speciality")}
                  />
                  <Input
                    label="Degree"
                    id="degree"
                    name="degree"
                    placeholder="Enter degree"
                    setValue={(e) =>
                      updateInputStyles({ value: e.target.value })
                    }
                    value={updates?.degree?.value}
                    color={updates?.degree?.color}
                    size={updates?.degree?.size}
                    font={updates?.degree?.font}
                    weight={updates?.degree?.weight}
                    selectKey={() => setselectedKey("degree")}
                  />
                  <Input
                    label="Work"
                    id="work"
                    name="work"
                    placeholder="Enter Work"
                    setValue={(e) =>
                      updateInputStyles({ value: e.target.value })
                    }
                    value={updates?.work?.value}
                    color={updates?.work?.color}
                    size={updates?.work?.size}
                    font={updates?.work?.font}
                    weight={updates?.work?.weight}
                    selectKey={() => setselectedKey("work")}
                  />
                </div>
              )}

              {colorChange === "headerDetails" && (
                <div className=" w-[80%] px-4 space-y-4">
                  {updates &&
                    updates.map((i, index) => (
                      <Input
                        key={index}
                        label="Title Name"
                        id="title_name"
                        name="title_name"
                        placeholder="Enter Title name"
                        setValue={(e) => updateInputStyles(e.target.value)}
                        value={i?.title}
                        color={i?.color}
                        size={i?.size}
                        font={i?.font}
                        weight={i?.weight}
                        selectKey={() => setselectedKey(index)}
                      />
                    ))}
                </div>
              )}

              {colorChange === "mainDetails" && (
                <div className=" w-[80%] px-4 space-y-4">
                  {updates &&
                    updates.map((i, index) => (
                      <Input
                        key={index}
                        label="Title Name"
                        id="title_name"
                        name="title_name"
                        placeholder="Enter Title name"
                        setValue={(e) => updateInputStyles(e.target.value)}
                        value={i?.title}
                        color={i?.color}
                        size={i?.size}
                        font={i?.font}
                        weight={i?.weight}
                        selectKey={() => setselectedKey(index)}
                      />
                    ))}
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
                    setchange("change");
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
                      setchange1("change");
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
                      setchange2("change");
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
                  onClick={updateState}
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
