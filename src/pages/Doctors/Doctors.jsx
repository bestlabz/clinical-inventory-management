import React from "react";

//Translate
import Translate from "../../Components/translateSpan/TranslateSpan";
import TranslateJson from "../../utils/translation/en.json";

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
import ThemeSuspense from "../../Components/theme/ThemeSuspense";
import ViewPage from "../../Components/Properites/ViewPage/ViewPage";

const Doctors = () => {
  const {
    selectedDate,
    setselectedDate,
    Options,
    style,
    navigateAddDoctorPage,
    cardValue,
    primaryLoader,
    model,
    setModel,
    handleChange,
    clear,
    setClear,
    selectedFilter,
    setselectedFilter,
    loader,
    viewPage,
    setviewPage,
    currentPages,
    next,
    pre,
    pageNumbers,
    paginationCount,
    dotorId,
    setDotorId,
  } = DoctorsFunction();

  const { doctorTable } = useSelector((state) => state.TableDatas);

  const { sidebarStatus } = useSelector((state) => state.sidebarInfo);

  return (
    <div className=" container">
      {primaryLoader ? (
        <ThemeSuspense />
      ) : (
        <>
          {viewPage ? (
            <ViewPage
              setviewPage={setviewPage}
              headerText="View Doctor Details"
              id={dotorId}
              category="doctor"
            />
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
                  title={TranslateJson.doctors.card.text1}
                  count={cardValue?.total_doctor}
                  bg="#0073EE"
                  textColor="#fff"
                />
                <Card
                  title={TranslateJson.doctors.card.text2}
                  count={cardValue?.available_doctor}
                  textColor="#000"
                />
                <Card
                  title={TranslateJson.doctors.card.text3}
                  count={cardValue?.leave_doctor}
                  textColor="#000"
                />
              </div>

              <div
                style={{
                  border: "3px solid #e8e8e8",
                }}
                className="table-box mt-4"
              >
                <>
                  <div className="table-box-top 2xl:h-[100px] xl:h-[100px] lg:h-[100px] md:h-[20%] sm:h-[20%] xs:h-[40%] xss:h-[40%] mobile:h-[40%]">
                    <div className="table-box-top-left">
                      <TableHeaderTitle
                        title={TranslateJson.doctors.title}
                        subContent={`${doctorTable.length} ${TranslateJson.doctors.subText}`}
                      />
                    </div>
                    <div className="table-box-top-right-1">
                      <div className="table-box-top-right-grid-1">
                        {/* <div className="table-box-top-right-content-date-1">
                    <DatePicker
                      date={selectedDate}
                      handleDateSelect={setselectedDate}
                    />
                  </div> */}
                        <div className="table-box-top-right-content-filter-1">
                          <Select
                            options={Options}
                            styles={style}
                            placeholder="Filter"
                            SelectedValue={setselectedFilter}
                            value={selectedFilter}
                            clear={true}
                          />
                        </div>
                        <div className="table-box-top-right-content-filter-1">
                          <button
                            onClick={navigateAddDoctorPage}
                            className="table-box-top-right-content-button-1 "
                          >
                            <AddIcon /> Invite
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" mt-3 pb-3 overflow-auto w-full 2xl:h-[70%] xl:h-[70%] lg:h-[73%] md:h-[63%] sm:h-[63%] xs:h-[43%] xss:h-[43%] mobile:h-[43%]">
                    {doctorTable.length === 0 ? (
                      <div className=" w-full h-full flex items-center justify-center">
                      <h1 className="text-[22px]">No record found</h1>
                    </div>
                    ) : (
                      <Table
                        headers={() => {
                          if (selectedFilter?.value === "recently_joined") {
                            return [
                              { title: "S.No" },
                              { title: "Mobile Number" },
                              { title: "View" },
                            ];
                          } else {
                            return [
                              { title: "S.No" },
                              { title: "Doctor name" },
                              { title: "Specialist" },
                              { title: "Status" },
                              { title: "Action" },
                              { title: "View" },
                            ];
                          }
                        }}
                        tableBody={doctorTable}
                        tableName="Doctor"
                        model={model}
                        setModel={setModel}
                        handleChange={handleChange}
                        clear={clear}
                        setClear={setClear}
                        loader={loader}
                        setviewPage={setviewPage}
                        id={setDotorId}
                        filtervalue={selectedFilter?.value}
                      />
                    )}
                  </div>
                  <div className=" w-full h-[10%] flex items-end justify-end pt-4 px-3 overflow-x-auto relative">
                    {doctorTable.length !== 0 && (
                      <Paginitation
                        currentpage={currentPages}
                        PrePage={pre}
                        nextPage={next}
                        pageNumbers={pageNumbers}
                        paginationCount={paginationCount}
                      />
                    )}
                  </div>
                </>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Doctors;
