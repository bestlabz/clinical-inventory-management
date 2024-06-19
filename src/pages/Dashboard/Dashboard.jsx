import React from "react";

//Translate
import Translate from '../../Components/translateSpan/TranslateSpan'
import TranslateJson from "../../utils/translation/en.json"

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
          title={TranslateJson.dashboard.card.text1}
          count="104"
          bg="#0073EE"
          textColor="#fff"
        />
        <Card title={TranslateJson.dashboard.card.text2} count="24" textColor="#000" />
        <Card title={TranslateJson.dashboard.card.text3} count="24" textColor="#000" />
      </div>

      <div
        style={{
          boxShadow:
            "0 5px 9px -8px rgba(0, 0, 0, .9), 0 2px 9px -3px rgba(0, 0, 0, .9)",
        }}
        className="table-box "
      >
        <div className="table-box-top 2xl:h-[100px] xl:h-[100px] lg:h-[100px] md:h-[20%] sm:h-[20%] xs:h-[30%] xss:h-[30%] mobile:h-[30%]">
          <div className="table-box-top-left">
            <TableHeaderTitle title={TranslateJson.dashboard.title} subContent={`100 ${TranslateJson.dashboard.subText}`} />
          </div>
          <div className="table-box-top-right">
          <div className="table-box-top-right-grid">
            <div className="table-box-top-right-content-date">
              <DatePicker
                date={selectedDate}
                handleDateSelect={setselectedDate}
              />
            </div>
            <div className="table-box-top-right-content-filter">
              <Select options={Options} styles={style} placeholder="Filter" />
            </div>
          </div>
          </div>
        </div>
        <div className=" mt-3 pb-3 overflow-auto w-full  2xl:h-[70%] xl:h-[70%] lg:h-[73%] md:h-[63%] sm:h-[63%] xs:h-[53%] xss:h-[53%] mobile:h-[53%]">
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
            tableName="Patients"
          />
        </div>
        <div className=" w-full h-[25%] flex items-start pt-4  overflow-x-auto relative">
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
