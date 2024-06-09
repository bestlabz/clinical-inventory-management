import React from "react";
import Card from "../../Components/Cards/Card";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { sidebarStatus } = useSelector((state) => state.sidebarInfo);

  return (
    <div className=" w-full h-full px-3 ">
      <div className={`grid  gap-4 h-[100px] ${sidebarStatus ? "2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xss:grid-cols-1 mobile:grid-cols-1" : "2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 xss:grid-cols-1 mobile:grid-cols-1"} `}>
        <Card title="Today’s patient list" count="104" bg="#0073EE" textColor="#fff"/>
        <Card title="Doctor’s available" count="24" textColor="#000"/>
        <Card title="Doctor’s on leave" count="24" textColor="#000"/>
      </div>
    </div>
  );
};

export default Dashboard;
