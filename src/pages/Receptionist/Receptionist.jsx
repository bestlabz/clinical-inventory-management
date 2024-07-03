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
    setClear
  } = ReceptionistFunction();

  const { receptionistTable } = useSelector((state) => state.TableDatas);

  const { PrePage, changePage, currentpage, nextPage, tableDats, pageCount } =
    PaginationFunction({
      datas: receptionistTable,
    });

  return (
    <div className=" w-full h-[90%] px-3 py-[6px] overflow-auto">
      {primaryLoader ? (
        <ThemeSuspense />
      ) : (
        <>
          <div
            style={{
              boxShadow:
                "0 5px 9px -8px rgba(0, 0, 0, .9), 0 2px 9px -3px rgba(0, 0, 0, .9)",
            }}
            className="table-box "
          >
            <div className="table-box-top 2xl:h-[100px] xl:h-[100px] lg:h-[100px] md:h-[20%] sm:h-[20%] xs:h-[40%] xss:h-[40%] mobile:h-[40%]">
              <div className="table-box-top-left">
                <TableHeaderTitle
                  title={TranslateJson.receptionist.title}
                  subContent={`${tableDats.length} ${TranslateJson.receptionist.subText}`}
                />
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
                    <Select
                      options={Options}
                      styles={style}
                      placeholder="Filter"
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
              <Table
                headers={[
                  { title: "S.No" },
                  { title: "Receptionist name" },
                  { title: "Status" },
                  { title: "" },
                ]}
                tableBody={tableDats}
                tableName="Receptionist"
                model={model}
                setModel={setModel}
                handleChange={handleChange}
                clear={clear}
                setClear={setClear}
              />
            </div>
            <div className=" w-full  h-[10%] flex items-end pt-4 overflow-x-auto relative ">
              <Paginitation
                PrePage={PrePage}
                currentpage={currentpage}
                nextPage={nextPage}
                pageCount={pageCount.length}
                changePage={changePage}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Receptionist;
