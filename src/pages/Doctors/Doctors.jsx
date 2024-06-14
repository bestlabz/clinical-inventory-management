import React from "react";

//Assets
import AddIcon from "../../assets/Svg/AddIcon";

//Third party libraries
import { useSelector } from "react-redux";

//Componets
import Card from "../../Components/Cards/Card";
import TableHeaderTitle from "../../Components/Properites/TableHeaderTitle/TableHeaderTitle";
import DatePicker from "../../Components/Properites/DatePicker/DatePicker";
import Paginitation from "../../Components/Properites/Paginitation/Paginitation";

//Hooks
import DoctorsFunction from "../../hooks/Doctors/Doctors";
import PaginationFunction from "../../hooks/Paginitation/Paginitation";
import Select from "../../Components/Properites/Select/Select";
import Table from "../../Components/Properites/Table/Table";

const Doctors = () => {
  const { selectedDate, setselectedDate, Options, style, dummydata, navigateAddDoctorPage } =
    DoctorsFunction();
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
          title="Total Doctor’s list"
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
        <div className="table-box-top 2xl:h-[100px] xl:h-[100px] lg:h-[100px] md:h-[20%] sm:h-[20%] xs:h-[40%] xss:h-[40%] mobile:h-[40%]">
          <div className="table-box-top-left">
            <TableHeaderTitle title="Doctor’s List" subContent="100 Doctors" />
          </div>
          <div className="table-box-top-right-1">
            <div className="table-box-top-right-grid-1">
              <div className="table-box-top-right-content-date-1">
                <DatePicker
                  date={selectedDate}
                  handleDateSelect={setselectedDate}
                />
              </div>
              <div className="table-box-top-right-content-filter-1">
                <Select options={Options} styles={style} placeholder="Filter" />
              </div>
              <div className="table-box-top-right-content-filter-1">
                <button onClick={navigateAddDoctorPage} className="table-box-top-right-content-button-1 ">
                  <AddIcon /> Invite
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-3 pb-3 overflow-auto w-full 2xl:h-[70%] xl:h-[70%] lg:h-[73%] md:h-[63%] sm:h-[63%] xs:h-[43%] xss:h-[43%] mobile:h-[43%]">
          <Table
            headers={[
              { title: "S.No" },
              { title: "Doctor name" },
              { title: "Specialist" },
              { title: "Status" },
              { title: "" },
            ]}
            tableBody={tableDats}
            tableName="Doctor"
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

export default Doctors;
