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
import ViewPage from "../../Components/Properites/ViewPage/PatientsView";

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
    setviewPage,
    viewPage,
    patientID,
    setPatientID,
    selectedLimit,
    setSelectedLimit,
    statusAvailable,
    tableLoader,
  } = DashboardFunction();

  const { patientsTable } = useSelector((state) => state.TableDatas);
  const { sidebarStatus } = useSelector((state) => state.sidebarInfo);
  const { limitCount } = useSelector((state) => state.Pagination);

  return (
    <div className="w-full 2xl:h-[90%] xl:h-[90%] lg:h-[90%] md:h-[90%] sm:h-[90%] xs:h-[96%] mobile:h-[96%] xss:h-[96%] pb-3 overflow-auto">
      {/* {primaryLoader ? (
        <ThemeSuspense />
      ) : ( */}
      <>
        {viewPage ? (
          <>
            <ViewPage
              setviewPage={setviewPage}
              headerText="View Patient Details"
              id={patientID}
            />
          </>
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
              className="table-box mt-4"
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
                    { title: "View" },
                  ]}
                  tableBody={patientsTable}
                  tableName="Patients"
                  id={setPatientID}
                  setviewPage={setviewPage}
                  tableLoader={tableLoader}
                />
              </div>
              <div className=" w-full h-[10%] flex items-center justify-between px-3 pt-4 relative 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row xs:flex-col mobile:flex-col xss:flex-col gap-2">
                {patientsTable?.length !== 0 && (
                  <>
                    <div className="w-[80px] z-30">
                      <Select
                        options={limitCount}
                        styles={style}
                        SelectedValue={setSelectedLimit}
                        value={selectedLimit}
                        clear={false}
                        menuPlacement="top"
                      />
                    </div>
                    <div className="flex-1 flex items-end justify-end ">
                      <Paginitation
                        currentpage={currentPages}
                        PrePage={pre}
                        nextPage={next}
                        pageNumbers={pageNumbers}
                        paginationCount={paginationCount}
                        status={statusAvailable}
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </>
      {/* )} */}
    </div>
  );
};

export default Dashboard;
