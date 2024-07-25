import React from "react";

//Translate
import Translate from "../../Components/translateSpan/TranslateSpan";
import TranslateJson from "../../utils/translation/en.json";

//Assets
import AddMedicine from "../../assets/Svg/AddMedicine";

//Third party libraries
import { useSelector } from "react-redux";
import { CiSearch } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";

//Componets
import TableHeaderTitle from "../../Components/Properites/TableHeaderTitle/TableHeaderTitle";
import DatePicker from "../../Components/Properites/DatePicker/DatePicker";
import Paginitation from "../../Components/Properites/Paginitation/Paginitation";

//Hooks
import MedicineFunction from "../../hooks/Medicine/Medicine";
import PaginationFunction from "../../hooks/Paginitation/Paginitation";
import Select from "../../Components/Properites/Select/Select";
import Table from "../../Components/Properites/Table/Table";
import ThemeSuspense from "../../Components/theme/ThemeSuspense";

import XcelSheet from "../../assets/clinic.xlsx";

const Medicine = () => {
  const {
    selectedDate,
    setselectedDate,
    Options,
    style,
    navigateAddMedicinePage,
    primaryLoader,
    setselectedFilter,
    selectedFilter,
    currentPages,
    next,
    pre,
    pageNumbers,
    paginationCount,
    setsearchFilter,
    searchFilter,
    handelModel,
    model,
    handleDelete,
    loader,
    handleInput,
    inputRef,
    handleExcel,
  } = MedicineFunction();

  const { medicineTable } = useSelector((state) => state.TableDatas);

  return (
    <div className=" container">
      {primaryLoader ? (
        <ThemeSuspense />
      ) : (
        <>
          <div
            style={{
              border: "3px solid #e8e8e8",
            }}
            className="table-box"
          >
            <>
              <div className="table-box-top 2xl:h-[100px] xl:h-[100px] lg:h-[100px] md:h-[20%] sm:h-[20%] xs:h-[40%] xss:h-[40%] mobile:h-[40%]">
                <div className="table-box-top-left">
                  <div className="header-container">
                    <div className="felx flex-col">
                      <div className="flex items-center gap-4 pb-3">
                        <p className="header-container-left">
                          {TranslateJson.medicine.title}
                        </p>
                        <p
                          onClick={handleInput}
                          className="header-container-right cursor-pointer flex items-center justify-center"
                        >
                          <IoMdAdd size={18} className="mr-2" /> Bulk upload
                        </p>

                        <input
                          accept=".xlsx, .xls"
                          type="file"
                          className="hidden"
                          ref={inputRef}
                          onChange={(e) => handleExcel(e)}
                        />
                      </div>

                      <a
                        href={XcelSheet}
                        download
                        className=" cursor-pointer bg-blue text-white rounded-md py-1 px-3 transition-all duration-300"
                      >
                        Preview Template
                      </a>
                    </div>
                  </div>

                  <div className=" w-[80%] h-[80%]   items-center justify-end relative 2xl:flex xl:flex lg:hidden md:hidden sm:hidden xs:hidden mobile:hidden xss:hidden ">
                    <input
                      type="search"
                      placeholder="Search"
                      className=" w-full rounded-full mt-2 py-[5px] outline-none border-[1px] border-gray-400 px-3"
                      onChange={(e) => {
                        // if (/^[a-zA-Z\s]*$/.test(e.target.value)) {
                        setsearchFilter(e.target.value);
                        // }
                      }}
                      value={searchFilter}
                    />
                    <div
                      className={` ${
                        searchFilter?.length > 0 ? "hidden" : "flex"
                      } h-full  items-center justify-center absolute top-1 right-2`}
                    >
                      <CiSearch size={20} />
                    </div>
                  </div>
                </div>
                <div className="table-box-top-right-1 2xl:pt-0 xl:pt-0 lg:pt-0 md:pt-0 sm:pt-0 xs:pt-3 mobile:pt-3 xss:pt-3">
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
                    { title: "Action" },
                  ]}
                  tableBody={medicineTable}
                  tableName="Medicine"
                  model={model}
                  setModel={handelModel}
                  handleChange={handleDelete}
                  loader={loader}
                />
              </div>
              <div className=" w-full pt-4 mx-auto  h-[10%] flex items-end justify-end px-3 overflow-x-auto relative">
                {medicineTable.length !== 0 && (
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
    </div>
  );
};

export default Medicine;
