import React, { useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { BiSolidFilePdf } from "react-icons/bi";
import toast from "react-hot-toast";
import { LuUploadCloud } from "react-icons/lu";

const MultipleImageUpload = ({
  file,
  handleDeleteFile,
  error,
  base64Image,
  setFieldValue,
}) => {
  const fileInputRef = useRef(null);
  const [imageTypes, setImageTypes] = useState([]);

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    const files = event.target.files;
    const validFiles = [];
    const imageTypes = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileType = file.type;
      const fileSize = file.size;

      if (
        (fileType.startsWith("image/") || fileType === "application/pdf") &&
        fileSize <= 5 * 1024 * 1024
      ) {
        imageTypes.push(fileType);
        validFiles.push(file);
      } else {
        if (fileSize > 5 * 1024 * 1024) {
          toast.error(`File size of ${file.name} exceeds the limit of 5 MB.`);
        } else {
          toast.error(
            `Only image files (png, jpg, etc.) and PDFs are allowed. File: ${file.name}`
          );
        }
        return; // Stop processing if any file is invalid
      }
    }
    setImageTypes((prevTypes) => [...prevTypes, ...imageTypes]);
    if (file) {
      const newFile = [...file, ...validFiles];
      setFieldValue("files", newFile); // Set the array of valid files
    } else {
      setFieldValue("files", validFiles); // Set the array of valid files
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    const validFiles = [];
    const imageTypes = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i].File;
      const fileType = file.type;
      const fileSize = file.size;

      if (
        (fileType.startsWith("image/") || fileType === "application/pdf") &&
        fileSize <= 5 * 1024 * 1024
      ) {
        imageTypes.push(fileType);
        validFiles.push(file);
      } else {
        if (fileSize > 5 * 1024 * 1024) {
          toast.error(`File size of ${file.name} exceeds the limit of 5 MB.`);
        } else {
          toast.error(
            `Only image files (png, jpg, etc.) and PDFs are allowed. File: ${file.name}`
          );
        }
        return; // Stop processing if any file is invalid
      }
    }

    setImageTypes((prevTypes) => [...prevTypes, ...imageTypes]);
    if (file) {
      const newFile = [...file, ...validFiles];
       setFieldValue("files", newFile); // Set the array of valid files
    } else {
       setFieldValue("files", validFiles); // Set the array of valid files
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
  };

  console.log("file", file);
  console.log("base64Images", base64Image);

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
          multiple
          className="hidden"
          accept="image/*, application/pdf"
          onChange={handleFileInputChange} // Handle file selection change event
        />
        <div className="p-2 border-2 rounded-lg mb-3">
          <LuUploadCloud size={30} className="text-secondary_text" />
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
            SVG, PNG, JPG and PDF
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-end w-full text-center mx-auto">
        {file?.length > 0 &&
          file?.map((item, index) => (
            <div key={index} className="w-full py-1">
              <div
                className={`
                  border-2 
                  border-gray-200
                  px-1 py-4 
                  rounded-md 
                  flex items-center gap-4 justify-start w-full
                `}
              >
                <div className="w-[80px] h-[40px] overflow-hidden rounded-md">
                  {imageTypes[index] === "application/pdf" ? (
                    <div className="flex items-center h-full">
                      <BiSolidFilePdf color="#FF2D00" size={30} />
                    </div>
                  ) : (
                    <img
                      src={base64Image[index]}
                      alt={`Preview ${index}`}
                      className="object-contain"
                    />
                  )}
                </div>
                <div className="flex items-center justify-end w-full gap-3">
                  <span className="text-sm">
                    {item?.name?.substring(0, 25) + "..."}
                  </span>
                  <span
                    className="text-xl cursor-pointer hover:text-red-500"
                    onClick={() => handleDeleteFile(index)}
                  >
                    <IoClose />
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MultipleImageUpload;
