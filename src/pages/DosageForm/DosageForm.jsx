import React from "react";

import DosageFormFunction from "../../hooks/DosageForm/DosageForm";
import TableHeaderTitle from "../../Components/Properites/TableHeaderTitle/TableHeaderTitle";
import Table from "../../Components/Properites/Table/Table";

import { IoMdAdd } from "react-icons/io";
import { ClipLoader } from "react-spinners";

const DosageForm = () => {
  const {
    tableBody,
    model,
    setModel,
    error,
    setError,
    setDosageValue,
    dosageValue,
    addDosageForm,
    loader,
    deleteDosageForm,
    loader1,
    action,
    editDosageForm,
    setAction,
    clear,
    setClear
  } = DosageFormFunction();
  return (
    <div className="w-full h-[90%]">
      <div
        style={{
          border: "3px solid #e8e8e8",
        }}
        className="table-box "
      >
        <div className="table-box-top 2xl:h-[100px] xl:h-[100px] lg:h-[100px] md:h-[20%] sm:h-[20%] xs:h-[40%] xss:h-[40%] mobile:h-[40%]">
          <div className="table-box-top-left">
            <TableHeaderTitle
              title="Dosage Form List"
              subContent={`${tableBody?.length} Dosage Form`}
            />
          </div>
          <div className="table-box-top-right-1">
            <div className="table-box-top-right-grid-1">
              <div className="table-box-top-right-content-filter-1 relative">
                <input
                  type="search"
                  className=" outline-none border-[1px] border-gray-300 py-2 px-3 mx-auto rounded-lg w-[99%]"
                  placeholder="Enter Dosage Name"
                  onChange={(e) => {
                    if (!/^[A-Za-z]*$/.test(e.target.value)) return;
                    else setDosageValue(e.target.value);
                  }}
                  value={dosageValue}
                />
                {error && (
                  <p className="absolute top-[100%] text-red-500 text-[14px] ml-1">
                    Required
                  </p>
                )}
              </div>
              <div className="table-box-top-right-content-filter-1">
                <button
                  onClick={addDosageForm}
                  className="table-box-top-right-content-button-1 "
                >
                  {loader ? (
                    <ClipLoader size={20} color="#fff" />
                  ) : (
                    <>
                      <IoMdAdd size={20} /> Dosage Form
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-3 pb-3 overflow-auto w-full 2xl:h-[70%] xl:h-[70%] lg:h-[73%] md:h-[63%] sm:h-[63%] xs:h-[43%] xss:h-[43%] mobile:h-[43%]">
          <Table
            headers={[
              { title: "S.No" },
              { title: "Dosage name" },
              { title: "Edit" },
              { title: "Action" },
            ]}
            tableBody={tableBody}
            tableName="DosageForm"
            model={model}
            setModel={setModel}
            handleChange={action === "edit" ? editDosageForm : deleteDosageForm}
            loader={loader1}
            setAction={setAction}
            clear={clear}
            setClear={setClear}
          />
        </div>
        <div className=" w-full h-[10%] flex items-end justify-end pt-4 px-3 overflow-x-auto relative">
          {/* <Paginitation
            currentpage={currentPages}
            PrePage={pre}
            nextPage={next}
            pageNumbers={pageNumbers}
            paginationCount={paginationCount}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default DosageForm;
