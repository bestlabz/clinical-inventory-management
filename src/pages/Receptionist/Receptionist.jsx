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
import ReceptionistFunction from "../../hooks/Receptionist/Receptionist";
import PaginationFunction from "../../hooks/Paginitation/Paginitation";
import Select from "../../Components/Properites/Select/Select";
import Table from "../../Components/Properites/Table/Table";
import ThemeSuspense from "../../Components/theme/ThemeSuspense";
import ViewPage from "../../Components/Properites/ViewPage/ViewPage";

const Receptionist = () => {
  const {
    selectedDate,
    setselectedDate,
    Options,
    style,
    navigateAddRecptionistPage,
    primaryLoader,
    clear,
    handleChange,
    model,
    setModel,
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
    receptionistID,
    setReceptionistID,
  } = ReceptionistFunction();

  const { receptionistTable } = useSelector((state) => state.TableDatas);

  return (
    <div className="container">
      {primaryLoader ? (
        <ThemeSuspense />
      ) : (
        <>
          {viewPage ? (
            <ViewPage
              timeSlot={false}
              setviewPage={setviewPage}
              headerText="View Receptionist Details"
              category="receptionist"
              id={receptionistID}
            />
          ) : (
            <div
              style={{
                border: "3px solid #e8e8e8",
              }}
              className="table-box "
            >
              <div className="table-box-top 2xl:h-[100px] xl:h-[100px] lg:h-[100px] md:h-[20%] sm:h-[20%] xs:h-[40%] xss:h-[40%] mobile:h-[40%]">
                <div className="table-box-top-left">
                  <TableHeaderTitle
                    title={TranslateJson.receptionist.title}
                    subContent={`${receptionistTable.length} ${TranslateJson.receptionist.subText}`}
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
                        onClick={navigateAddRecptionistPage}
                        className="table-box-top-right-content-button-1 "
                      >
                        <AddIcon /> Invite
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" mt-3 pb-3 overflow-auto w-full 2xl:h-[70%] xl:h-[70%] lg:h-[73%] md:h-[63%] sm:h-[63%] xs:h-[43%] xss:h-[43%] mobile:h-[43%]">
                {receptionistTable.length === 0 ? (
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
                          { title: "Receptionist name" },
                          { title: "Status" },
                          { title: "Action" },
                          { title: "View" },
                        ];
                      }
                    }}
                    tableBody={receptionistTable}
                    tableName="Receptionist"
                    model={model}
                    setModel={setModel}
                    handleChange={handleChange}
                    clear={clear}
                    setClear={setClear}
                    loader={loader}
                    setviewPage={setviewPage}
                    id={setReceptionistID}
                    filtervalue={selectedFilter?.value}
                  />
                )}
              </div>
              <div className=" w-full  h-[10%] flex items-end justify-end pt-4 px-3  overflow-x-auto relative ">
                {receptionistTable.length !== 0 && (
                  <Paginitation
                    currentpage={currentPages}
                    PrePage={pre}
                    nextPage={next}
                    pageNumbers={pageNumbers}
                    paginationCount={paginationCount}
                  />
                )}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Receptionist;
