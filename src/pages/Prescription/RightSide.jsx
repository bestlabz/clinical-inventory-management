import React from "react";

import Input from "../../Components/Properites/Inputs/Input";

import { TbEdit } from "react-icons/tb";
import { IoIosAdd } from "react-icons/io";
import { MdOutlineModeEdit } from "react-icons/md";

//Hooks
import RightSideFunction from "../../hooks/Prescription/rightSide";
import { useSelector } from "react-redux";

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
          <button className="prescription-right-content-container-header-button">
            <span className="prescription-right-content-container-header-button-text">
              Edit
            </span>{" "}
            <TbEdit size={25} />{" "}
          </button>
        </div>
        <div className="prescription-right-content-container-input">
          <Input
            label="Clinic Name"
            id="clinic_name"
            name="clinic_name"
            placeholder="Enter Clinic name"
            value={clinicDetails.name}
            setValue={(e) => clinicalDetailsUpdate({ name: e.target.value })}
          />
          <Input
            label="Contact number"
            id="contact_number"
            name="contact_number"
            placeholder="Enter Contact number"
            value={clinicDetails.contact_number}
            setValue={(e) =>
              clinicalDetailsUpdate({ contact_number: e.target.value })
            }
          />
          <div className=" flex flex-col gap-1">
            <label className="mt-2">Address</label>
            <textarea
              id="address"
              name="address"
              rows={3}
              placeholder="Enter Address"
              className=" resize-none outline-none p-2 border-[1px] border-gray-300 rounded-xl"
              value={clinicDetails.address}
              setValue={(e) =>
                clinicalDetailsUpdate({ address: e.target.value })
              }
            />
          </div>
          <Input
            label="GST No"
            id="gst_no"
            name="gst_no"
            placeholder="Enter GST number"
            value={clinicDetails.gst_no}
            setValue={(e) => clinicalDetailsUpdate({ gst_no: e.target.value })}
          />
        </div>
      </div>

      <div className="prescription-right-content-container">
        <div className="prescription-right-content-container-header">
          <h1 className="prescription-right-content-container-header-text">
            Doctor Details
          </h1>
          <button className="prescription-right-content-container-header-button">
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
            value={doctorDetails.doctor_name}
            setValue={(e) =>
              doctorDetailsUpdate({ doctor_name: e.target.value })
            }
          />
          <Input
            label="Speciality"
            id="speciality"
            name="speciality"
            placeholder="Enter Speciality"
            value={doctorDetails.speciality}
            setValue={(e) =>
              doctorDetailsUpdate({ speciality: e.target.value })
            }
          />
          <Input
            label="Degree"
            id="degree"
            name="degree"
            placeholder="Enter degree"
            value={doctorDetails.degree}
            setValue={(e) => doctorDetailsUpdate({ degree: e.target.value })}
          />
          <Input
            label="Work"
            id="work"
            name="work"
            placeholder="Enter Work"
            value={doctorDetails.work}
            setValue={(e) => doctorDetailsUpdate({ work: e.target.value })}
          />
        </div>
      </div>

      <div className="prescription-right-content-container">
        <div className="prescription-right-content-container-header">
          <h1 className="prescription-right-content-container-header-text">
            Header
          </h1>
          <button className=" prescription-right-content-container-header-button">
            <span className="prescription-right-content-container-header-button-text">
              Edit
            </span>{" "}
            <TbEdit size={25} />{" "}
          </button>
        </div>
        <div className="prescription-right-content-container-input">
          {headerDetails.map((item, index) => (
            <Input
              key={index}
              label="Title name"
              placeholder={`Title ${index + 1}`}
              value={item.title}
              setValue={(e) => headerUpdate({ index, value: e.target.value })}
            />
          ))}
        </div>
        {headerDetails.length !== 5 && (
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
          <button className="prescription-right-content-container-header-button">
            <span className="prescription-right-content-container-header-button-text">
              Edit
            </span>{" "}
            <TbEdit size={25} />{" "}
          </button>
        </div>

        <div className="prescription-right-content-container-input1">
          {mainDetails.map((item, index) => (
            <div className="prescription-right-content-container-input1-container">
              <Input
                key={index}
                label="Title name"
                placeholder={`Main ${index + 1}`}
                value={item.title}
                setValue={(e) => mainUpdate({ index, value: e.target.value })}
              />
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
    </>
  );
};

export default RightSide;
