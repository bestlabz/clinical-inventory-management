import React, { useState } from "react";

const Paginitation = ({ datas }) => {
  const [currentpage, setCurrentpage] = useState(1);
  const [defaultValue, setDefaultValue] = useState({ label: 10, value: 10 });
  
  const recordPerPage = defaultValue?.value || 5;
  const lastIndex = currentpage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = datas?.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(datas?.length / recordPerPage);
  const numbers = [...Array(nPage + 1)?.keys()]?.slice(1);

  const nextPage = () => {
    if (currentpage < numbers?.length) {
      return setCurrentpage(currentpage + 1);
    }
  };

  const PrePage = () => {
    if (currentpage !== 1) {
      setCurrentpage(currentpage - 1);
    }
  };

  const changePage = ({ id }) => {
    return setCurrentpage(id);
  };

  const Options = [
    { label: 5, value: 5 },
    { label: 10, value: 10 },
    { label: 25, value: 25 },
  ];

  return {
    pageCount: numbers,
    tableDats: records,
    currentpage,
    nextPage,
    PrePage,
    changePage,
    Options,
    setDefaultValue,
    defaultValue,
  };
};

export default Paginitation;
