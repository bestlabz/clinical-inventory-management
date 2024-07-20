import React from "react";

import TranslateJson from "../utils/translation/en.json"

const Main = ({ children }) => {
  return (
    <main className="w-[96%] flex flex-col gap-3 h-screen overflow-hidden  mx-auto 2xl:px-3 xl:px-3 lg:px-3 md:px-3 sm:px-3 xs:p-3 mobile:p-3 xss:p-3">
      <h1 className=" text-[32px] font-medium 2xl:block xl:block lg:block md:block sm:block xs:hidden xss:hidden mobile:hidden">{TranslateJson.common.title}</h1>
      <div className=" grid w-[100%] h-full pb-3 ">
        {children}
      </div>
    </main>
  );
};

export default Main;
