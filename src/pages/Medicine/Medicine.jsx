import React from "react";


//Translate
import Translate from '../../Components/translateSpan/TranslateSpan'
import TranslateJson from "../../utils/translation/en.json"


//Assets
import AddMedicine from "../../assets/Svg/AddMedicine";

//Third party libraries
import { useSelector } from "react-redux";
import { CiSearch } from "react-icons/ci";

//Componets
import TableHeaderTitle from "../../Components/Properites/TableHeaderTitle/TableHeaderTitle";
import DatePicker from "../../Components/Properites/DatePicker/DatePicker";
import Paginitation from "../../Components/Properites/Paginitation/Paginitation";

//Hooks
import MedicineFunction from "../../hooks/Medicine/Medicine";
import PaginationFunction from "../../hooks/Paginitation/Paginitation";
import Select from "../../Components/Properites/Select/Select";
import Table from "../../Components/Properites/Table/Table";

const Medicine = () => {
  const {
    selectedDate,
    setselectedDate,
    Options,
    style,
    dummydata,
    navigateAddMedicinePage,
  } = MedicineFunction();
  const { PrePage, changePage, currentpage, nextPage, tableDats, pageCount } =
    PaginationFunction({
      datas: dummydata,
    });

  const { sidebarStatus } = useSelector((state) => state.sidebarInfo);

  return (
    <div className=" w-full h-full pt-0 p-3 overflow-auto">
      <div
        style={{
          boxShadow:
            "0 5px 9px -8px rgba(0, 0, 0, .9), 0 2px 9px -3px rgba(0, 0, 0, .9)",
        }}
        className="table-box "
      >
        <div className="table-box-top 2xl:h-[100px] xl:h-[100px] lg:h-[100px] md:h-[20%] sm:h-[20%] xs:h-[40%] xss:h-[40%] mobile:h-[40%]">
          <div className="table-box-top-left">
            <TableHeaderTitle title={TranslateJson.medicine.title} subContent={`100 ${TranslateJson.medicine.subText}`}/>
            <div className=" w-[80%] h-[80%]  items-center justify-end relative 2xl:flex xl:flex lg:hidden md:hidden sm:hidden xs:hidden mobile:hidden xss:hidden ">
              <input
                type="search"
                placeholder="Search"
                className=" w-full rounded-full mt-2 py-[5px] outline-none border-[1px] border-gray-400 px-3"
              />
              <div className="h-full flex items-center justify-center absolute top-1 right-2">
                <CiSearch size={20} />
              </div>
            </div>
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
                <button
                  onClick={navigateAddMedicinePage}
                  className="table-box-top-right-content-button-1 "
                >
                  <AddMedicine /> Add{" "}
                  <span className=" 2xl:block xl:block lg:hidden md:hidden sm:hidden xs:block xss:block mobile:block">
                    Medicine
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-3 pb-3 overflow-auto w-full 2xl:h-[70%] xl:h-[70%] lg:h-[73%] md:h-[63%] sm:h-[63%] xs:h-[43%] xss:h-[43%] mobile:h-[43%]">
          <Table
            headers={[
              { title: "Medicine Name" },
              { title: "Dosage form" },
              { title: "Dosage Strength" },
              { title: "Status" },
              { title: "" },
            ]}
            tableBody={tableDats}
            tableName="Medicine"
          />
        </div>
        <div className=" w-full pt-4 mx-auto h-[25%] flex items-start justify-center overflow-x-auto relative  ">
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

export default Medicine;
