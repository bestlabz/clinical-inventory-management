import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Doctors = () => {
  const navigate = useNavigate();

  const [selectedDate, setselectedDate] = useState(new Date());

  const style = {
    width: "100%",
    padding: "0px",
    border: "1px solid #d3d3d3",
    outline: "1px solid #d3d3d3",
    background: "rgba(218, 227, 255, 0.31)",
  };

  const Options = [
    { label: "Recently joined", value: "Recently_joined" },
    { label: "Doctors on leave", value: "Doctors_on_leave" },
  ];

  const dummydata = [
    {
      doctor_image:
        "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      doctor_name: "Dr. Kumar",
      specialist: "Cardiology",
      status: true,
    },
    {
      doctor_image:
        "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      doctor_name: "Dr. Kumar",
      specialist: "Cardiology",
      status: true,
    },
    {
      doctor_image:
        "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      doctor_name: "Dr. Kumar",
      specialist: "Cardiology",
      status: false,
    },
    {
      doctor_image:
        "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      doctor_name: "Dr. Kumar",
      specialist: "Cardiology",
      status: true,
    },
    {
      doctor_image:
        "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      doctor_name: "Dr. Kumar",
      specialist: "Cardiology",
      status: false,
    },
    {
      doctor_image:
        "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      doctor_name: "Dr. Kumar",
      specialist: "Cardiology",
      status: true,
    },
    {
      doctor_image:
        "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      doctor_name: "Dr. Kumar",
      specialist: "Cardiology",
      status: false,
    },
    {
      doctor_image:
        "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      doctor_name: "Dr. Kumar",
      specialist: "Cardiology",
      status: false,
    },
    {
      doctor_image:
        "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      doctor_name: "Dr. Kumar",
      specialist: "Cardiology",
      status: true,
    },
    {
      doctor_image:
        "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      doctor_name: "Dr. Kumar",
      specialist: "Cardiology",
      status: false,
    },
    {
      doctor_image:
        "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      doctor_name: "Dr. Kumar",
      specialist: "Cardiology",
      status: true,
    },
    {
      doctor_image:
        "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      doctor_name: "Dr. Kumar",
      specialist: "Cardiology",
      status: false,
    },
    {
      doctor_image:
        "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      doctor_name: "Dr. Kumar",
      specialist: "Cardiology",
      status: true,
    },
    {
      doctor_image:
        "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      doctor_name: "Dr. Kumar",
      specialist: "Cardiology",
      status: false,
    },
  ];

  const navigateAddDoctorPage = () => {
    return navigate('/add-doctor')
  }

  return {
    setselectedDate,
    selectedDate,
    style,
    Options,
    dummydata,
    navigateAddDoctorPage
  };
};

export default Doctors;
