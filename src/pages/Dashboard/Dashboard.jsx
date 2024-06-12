import React from "react";
import Card from "../../Components/Cards/Card";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { sidebarStatus } = useSelector((state) => state.sidebarInfo);

  return (
    <div className=" w-full h-full p-3 overflow-auto">
      <div className={`grid  gap-4 min-h-[100px] ${sidebarStatus ? "2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xss:grid-cols-1 mobile:grid-cols-1" : "2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 xss:grid-cols-1 mobile:grid-cols-1"} `}>
        <Card title="Today’s patient list" count="104" bg="#0073EE" textColor="#fff"/>
        <Card title="Doctor’s available" count="24" textColor="#000"/>
        <Card title="Doctor’s on leave" count="24" textColor="#000"/>
      </div>

      <div style={{
         boxShadow:
         "0 5px 9px -8px rgba(0, 0, 0, .9), 0 2px 9px -3px rgba(0, 0, 0, .9)",
      }} className="table-box ">
        <div className="table-box-top">
          <div className="table-box-top-left">asd</div>
          <div className="table-box-top-right">
            <div className="table-box-top-right-content-date">Date</div>
            <div className="table-box-top-right-content-filter">Filter</div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
