import React, { useRef, useState } from "react";
import UploadFileImage from "../../../assets/Svg/UploadFileImage";
import { IoClose } from "react-icons/io5";
import { LuUploadCloud } from "react-icons/lu";
import toast from "react-hot-toast";
import { BiSolidFilePdf } from "react-icons/bi";

const ImageInput = ({
  file,
  handleDeleteFile,
  error,
  base64Image,
  setFieldValue,
}) => {
  const fileInputRef = useRef(null);

  const [imageType, setimageType] = useState(null);

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const fileType = file.type;
    const fileSize = file.size;

    if (
      (fileType.startsWith("image/") || fileType === "application/pdf") &&
      fileSize <= 5 * 1024 * 1024
    ) {
      setimageType(fileType);
      setFieldValue("file", file);
    } else {
      if (fileSize > 5 * 1024 * 1024) {
        toast.error("File size exceeds the limit of 5 MB.");
      } else {
        toast.error("Only image files (png, jpg, etc.) and PDFs are allowed.");
      }
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const fileType = file.type;
    const fileSize = file.size;

    if (
      (fileType.startsWith("image/") || fileType === "application/pdf") &&
      fileSize <= 5 * 1024 * 1024
    ) {
      setimageType(fileType);
      setFieldValue("file", file);
    } else {
      if (fileSize > 5 * 1024 * 1024) {
        toast.error("File size exceeds the limit of 5 MB.");
      } else {
        toast.error("Only image files (png, jpg, etc.) and PDFs are allowed.");
      }
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col gap-1">
      <div
        className={`
        flex flex-col items-center gap-1
        border-2 border-solid 
        ${error ? "border-red-500" : ""}
        px-2 py-10 
        rounded-md 
        cursor-pointer
        `}
        onClick={handleFileInputClick}
        onDrop={handleDrop}
        onDragOver={handleDrag}
      >
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept="image/*, application/pdf"
          onChange={handleFileInputChange} // Handle file selection change event
        />
        <div className=" p-2 border-2 rounded-lg mb-3 ">
          <LuUploadCloud size={30} className=" text-secondary_text" />
        </div>
        <div className="flex flex-col gap-0.5 items-center">
          <span className="text-[16px] font-bold text-secondary_text">
            Click to Upload
            <span className="text-md text-center font-medium">
              {" "}
              or drag and drop
            </span>{" "}
          </span>
        </div>
        <div>
          <span className="text-xs text-secondary_text font-medium">
            SVG, PNG and JPG
          </span>
        </div>
      </div>
      <div className="flex items-center justify-end w-full text-center mx-auto">
        {file && (
          <div className="w-full ">
            <div
              className={`
                border-2 
                border-gray-200
                px-1 py-1 
                rounded-md 
                flex items-center gap-4 justify-start w-full
                `}
            >
              {/* <span className=" text-2xl">
                <CiImageOn />
              </span> */}
              <div className=" w-[80px] h-[40px] overflow-hidden rounded-md ">
                {
                  imageType === "application/pdf" ? <div className=" flex items-center h-full"><BiSolidFilePdf color="#FF2D00" size={30} /></div> :  <img
                  src={base64Image && base64Image}
                  className="object-contain"
                />
                }
               
              </div>
              <div className=" flex items-center justify-end w-full  gap-3">
                <span className="text-sm">
                  {file?.name.substring(0, 25) + "..."}
                </span>
                <span
                  className="text-xl cursor-pointer hover:text-red-500"
                  onClick={handleDeleteFile}
                >
                  <IoClose />
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageInput;
