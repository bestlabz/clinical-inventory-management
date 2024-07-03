import React from "react";

const Card = ({ title = "", count = "", bg, textColor }) => {
  return (
    <div
      style={{
       border: "3px solid #E8E8E8",
        background: bg ? bg : "transparent",
        color: textColor,
      }}
      className="w-full h-full rounded-2xl flex items-center justify-center gap-4 px-3 p-2"
    >
      <div className=" card-content">
        <h1 className=" card-text">{title}</h1>
        <h1 className=" card-count">{count}</h1>
      </div>
    </div>
  );
};

export default Card;
