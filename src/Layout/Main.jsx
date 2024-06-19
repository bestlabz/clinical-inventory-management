import React from "react";

import TranslateJson from "../utils/translation/en.json"

const Main = ({ children }) => {
  return (
    <main className="w-[95%] h-full overflow-y-auto p-3 mx-auto">
      <h1 className=" text-[32px] font-medium 2xl:block xl:block lg:block md:block sm:block xs:hidden xss:hidden mobile:hidden">{TranslateJson.common.title}</h1>
      <div className=" grid w-[100%] ">
        {children}
      </div>
    </main>
  );
};

export default Main;
