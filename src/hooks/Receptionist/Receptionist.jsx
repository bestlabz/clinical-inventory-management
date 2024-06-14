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
    { label: "Receptionist on leave", value: "Receptionist_on_leave" },
  ];

  const dummydata = [
    {
      receptionist_image:
        "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      receptionist_name: "Dr. Kumar",
      status: true,
    },
    {
      receptionist_image:
        "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      receptionist_name: "Dr. Kumar",
      status: true,
    },
    {
      receptionist_image:
        "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      receptionist_name: "Dr. Kumar",
     
      status: false,
    },
    {
      receptionist_image:
        "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      receptionist_name: "Dr. Kumar",
     
      status: true,
    },
    {
      receptionist_image:
        "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      receptionist_name: "Dr. Kumar",
     
      status: false,
    },
    {
      receptionist_image:
        "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      receptionist_name: "Dr. Kumar",
     
      status: true,
    },
    {
      receptionist_image:
        "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      receptionist_name: "Dr. Kumar",
     
      status: false,
    },
    {
      receptionist_image:
        "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      receptionist_name: "Dr. Kumar",
     
      status: false,
    },
    {
      receptionist_image:
        "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      receptionist_name: "Dr. Kumar",
     
      status: true,
    },
    {
      receptionist_image:
        "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      receptionist_name: "Dr. Kumar",
     
      status: false,
    },
    {
      receptionist_image:
        "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      receptionist_name: "Dr. Kumar",
     
      status: true,
    },
    {
      receptionist_image:
        "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      receptionist_name: "Dr. Kumar",
     
      status: false,
    },
    {
      receptionist_image:
        "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      receptionist_name: "Dr. Kumar",
     
      status: true,
    },
    {
      receptionist_image:
        "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      receptionist_name: "Dr. Kumar",
     
      status: false,
    },
  ];

  const navigateAddRecptionistPage = () => {
    return navigate('/add-recptionist')
  }

  return {
    setselectedDate,
    selectedDate,
    style,
    Options,
    dummydata,
    navigateAddRecptionistPage
  };
};

export default Doctors;
