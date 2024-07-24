import React from "react";

import DosageStrengthFunction from "../../hooks/DosageStrength/DosageStrength";
import TableHeaderTitle from "../../Components/Properites/TableHeaderTitle/TableHeaderTitle";
import Table from "../../Components/Properites/Table/Table";
import Paginitation from "../../Components/Properites/Paginitation/Paginitation";

import { IoMdAdd } from "react-icons/io";
import { ClipLoader } from "react-spinners";

const DosageStrength = () => {
  const {
    addDosageStrength,
    deleteDosageStrength,
    dosageValue,
    error,
    loader,
    loader1,
    model,
    setDosageValue,
    setError,
    setModel,
    tableBody,
    action,
    clear,
    editDosageStrength,
    setAction,
    setClear,
    currentPages,
    next,
    pageNumbers,
    paginationCount,
    pre,
  } = DosageStrengthFunction();
  return (
    <div className="container">
      <div
        style={{
          border: "3px solid #e8e8e8",
        }}
        className="table-box "
      >
        <>
          <div className="table-box-top 2xl:h-[100px] xl:h-[100px] lg:h-[100px] md:h-[20%] sm:h-[20%] xs:h-[40%] xss:h-[40%] mobile:h-[40%]">
            <div className="table-box-top-left">
              <TableHeaderTitle
                title="Dosage Unit List"
                subContent={`${tableBody?.length} Dosage Unit`}
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
                    onClick={addDosageStrength}
                    className="table-box-top-right-content-button-1 "
                  >
                    {loader ? (
                      <ClipLoader size={20} color="#fff" />
                    ) : (
                      <>
                        <IoMdAdd size={20} /> Dosage Unit
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
                tableName="DosageStrength"
                model={model}
                setModel={setModel}
                loader={loader1}
                handleChange={
                  action === "edit" ? editDosageStrength : deleteDosageStrength
                }
                setAction={setAction}
                clear={clear}
                setClear={setClear}
              />
          </div>
          <div className=" w-full h-[10%] flex items-end justify-end pt-4 px-3 overflow-x-auto relative">
            {tableBody?.length !== 0 && (
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
    </div>
  );
};

export default DosageStrength;
