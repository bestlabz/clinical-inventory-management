import React from "react";

//Third party libraries
import { useSelector } from "react-redux";

//Components
import Card from "../../Components/Cards/Card";
import TableHeaderTitle from "../../Components/Properites/TableHeaderTitle/TableHeaderTitle";
import DatePicker from "../../Components/Properites/DatePicker/DatePicker";
import Paginitation from "../../Components/Properites/Paginitation/Paginitation";

//Hooks
import DashboardFunction from "../../hooks/Dashboard/Dashboard";
import Select from "../../Components/Properites/Select/Select";
import Table from "../../Components/Properites/Table/Table";
import PaginationFunction from "../../hooks/Paginitation/Paginitation";

const Dashboard = () => {
  const { selectedDate, setselectedDate, Options, style, dummydata } =
    DashboardFunction();
  const { PrePage, changePage, currentpage, nextPage, tableDats, pageCount } =
    PaginationFunction({
      datas: dummydata,
    });

  const { sidebarStatus } = useSelector((state) => state.sidebarInfo);

  return (
    <div className=" w-full h-full p-3 overflow-auto">
      <div
        className={`grid  gap-4 min-h-[100px] ${
          sidebarStatus
            ? "2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xss:grid-cols-1 mobile:grid-cols-1"
            : "2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 xss:grid-cols-1 mobile:grid-cols-1"
        } `}
      >
        <Card
          title="Today’s patient list"
          count="104"
          bg="#0073EE"
          textColor="#fff"
        />
        <Card title="Doctor’s available" count="24" textColor="#000" />
        <Card title="Doctor’s on leave" count="24" textColor="#000" />
      </div>

      <div
        style={{
          boxShadow:
            "0 5px 9px -8px rgba(0, 0, 0, .9), 0 2px 9px -3px rgba(0, 0, 0, .9)",
        }}
        className="table-box "
      >
        <div className="table-box-top">
          <div className="table-box-top-left">
            <TableHeaderTitle />
          </div>
          <div className="table-box-top-right">
            <div className="table-box-top-right-content-date">
              <DatePicker
                date={selectedDate}
                handleDateSelect={setselectedDate}
              />
            </div>
            <div className="table-box-top-right-content-filter">
              <Select options={Options} styles={style} placeholder="Select" />
            </div>
          </div>
        </div>
        <div className=" mt-3 pb-3 overflow-auto w-full h-[75%]">
          <Table
            headers={[
              { title: "S.No" },
              { title: "Patient name" },
              { title: "Doctor name" },
              { title: "Specialist" },
              { title: "Appointment time" },
              { title: "" },
            ]}
            tableBody={tableDats}
          />
        </div>
        <div className=" w-full h-[25%] flex items-start p-8 ">
          <Paginitation
            PrePage={PrePage}
            currentpage={currentpage}
            nextPage={nextPage}
            pageCount={pageCount.length}
            changePage={changePage}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
