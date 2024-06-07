import React from "react";

const Main = ({ children }) => {
  return (
    <main className="h-full overflow-y-auto">
      <div className=" grid w-[100%] ">
        {children}
      </div>
    </main>
  );
};

export default Main;
