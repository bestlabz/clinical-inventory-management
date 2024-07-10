import React from "react";

//Translate
import Translate from "../../Components/translateSpan/TranslateSpan";
import TranslateJson from "../../utils/translation/en.json";

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
import ThemeSuspense from "../../Components/theme/ThemeSuspense";

const Dashboard = () => {
  const {
    selectedDate,
    setselectedDate,
    Options,
    style,
    primaryLoader,
    currentPages,
    next,
    pre,
    pageNumbers,
    paginationCount,
  } = DashboardFunction();

  const { patientsTable } = useSelector((state) => state.TableDatas);

  const { sidebarStatus } = useSelector((state) => state.sidebarInfo);

  return (
    <div className=" w-full h-[90%] px-3 py-[6px] overflow-auto">
      {primaryLoader ? (
        <ThemeSuspense />
      ) : (
        <>
          <div
            className={`grid  gap-4 min-h-[100px] ${
              sidebarStatus
                ? "2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xss:grid-cols-1 mobile:grid-cols-1"
                : "2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 xss:grid-cols-1 mobile:grid-cols-1"
            } `}
          >
            <Card
              title={TranslateJson.dashboard.card.text1}
              count="0"
              bg="#0073EE"
              textColor="#fff"
            />
            <Card
              title={TranslateJson.dashboard.card.text2}
              count="0"
              textColor="#000"
            />
            <Card
              title={TranslateJson.dashboard.card.text3}
              count="0"
              textColor="#000"
            />
          </div>

          <div
            style={{
              border: "3px solid #e8e8e8",
            }}
            className="table-box "
          >
            <div className="table-box-top 2xl:h-[100px] xl:h-[100px] lg:h-[100px] md:h-[20%] sm:h-[20%] xs:h-[40%] xss:h-[40%] mobile:h-[40%]">
              <div className="table-box-top-left">
                <TableHeaderTitle
                  title={TranslateJson.dashboard.title}
                  subContent={`${patientsTable.length} ${TranslateJson.dashboard.subText}`}
                />
              </div>
              <div className="table-box-top-right">
                <div className="table-box-top-right-grid">
                  <div className="table-box-top-right-content-date">
                    <DatePicker
                      date={selectedDate}
                      handleDateSelect={setselectedDate}
                    />
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
                  // { title: "View" },
                ]}
                tableBody={patientsTable}
                tableName="Patients"
              />
            </div>
            <div className=" w-full h-[10%] flex items-end justify-end px-3 pt-4  overflow-x-auto relative">
              <Paginitation
                currentpage={currentPages}
                PrePage={pre}
                nextPage={next}
                pageNumbers={pageNumbers}
                paginationCount={paginationCount}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
