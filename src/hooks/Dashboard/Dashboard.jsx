import React, { useState } from "react";

const Dashboard = () => {
  const [selectedDate, setselectedDate] = useState(new Date());

  const style = {
    width: "100%",
    padding: "0px",
    border: "1px solid #d3d3d3",
    outline :"1px solid #d3d3d3",
    background: "rgba(218, 227, 255, 0.31)",
  };

  const Options = [
    { label: "Today", value: "today" },
    { label: "This Year", value: "this_year" },
    { label: "This Month", value: "this_month" },
    { label: "This Week", value: "this_week" },
  ];

  const dummydata = [
    {
      name: "Mohamed Thawfeek",
      doctor_image: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      doctor_name: "Dr. Kumar",
      specialist: "Cardiology",
      appointment_time: "10:00 AM",
    },
    {
      name: "Mohamed Thawfeek",
      doctor_image: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      doctor_name: "Dr. Kumar",
      specialist: "Cardiology",
      appointment_time: "10:00 AM",
    }, {
      name: "Mohamed Thawfeek",
      doctor_image: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      doctor_name: "Dr. Kumar",
      specialist: "Cardiology",
      appointment_time: "10:00 AM",
    }, {
      name: "Mohamed Thawfeek",
      doctor_image: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      doctor_name: "Dr. Kumar",
      specialist: "Cardiology",
      appointment_time: "10:00 AM",
    }, {
      name: "Mohamed Thawfeek",
      doctor_image: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      doctor_name: "Dr. Kumar",
      specialist: "Cardiology",
      appointment_time: "10:00 AM",
    }, {
      name: "Mohamed Thawfeek",
      doctor_image: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      doctor_name: "Dr. Kumar",
      specialist: "Cardiology",
      appointment_time: "10:00 AM",
    }, {
      name: "Mohamed Thawfeek",
      doctor_image: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      doctor_name: "Dr. Kumar",
      specialist: "Cardiology",
      appointment_time: "10:00 AM",
    }, {
      name: "Mohamed Thawfeek",
      doctor_image: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      doctor_name: "Dr. Kumar",
      specialist: "Cardiology",
      appointment_time: "10:00 AM",
    }, {
      name: "Mohamed Thawfeek",
      doctor_image: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      doctor_name: "Dr. Kumar",
      specialist: "Cardiology",
      appointment_time: "10:00 AM",
    }, {
      name: "Mohamed Thawfeek",
      doctor_image: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      doctor_name: "Dr. Kumar",
      specialist: "Cardiology",
      appointment_time: "10:00 AM",
    }, {
      name: "Mohamed Thawfeek",
      doctor_image: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      doctor_name: "Dr. Kumar",
      specialist: "Cardiology",
      appointment_time: "10:00 AM",
    }, {
      name: "Mohamed Thawfeek",
      doctor_image: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      doctor_name: "Dr. Kumar",
      specialist: "Cardiology",
      appointment_time: "10:00 AM",
    }, {
      name: "Mohamed Thawfeek",
      doctor_image: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      doctor_name: "Dr. Kumar",
      specialist: "Cardiology",
      appointment_time: "10:00 AM",
    }, {
      name: "Mohamed Thawfeek",
      doctor_image: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      doctor_name: "Dr. Kumar",
      specialist: "Cardiology",
      appointment_time: "10:00 AM",
    },
  ]


  return {
    setselectedDate,
    selectedDate,
    style,
    Options,
    dummydata
  };
};

export default Dashboard;
