import React from "react";

const Input1 = ({
  value,
  setValue,
  placeholder = "",
  type = "text",
  length,
  err,
  def,
  id = "",
  name = "",
  showLength,
  errwidth="100%",
  errtop="100%",
  label
}) => {
  return (
    <div className="input-container1">
        <label className="input-label1">{label}</label>
      <div className={`input-box1`}>
        <input
          id={id}
          name={name}
          className={`input1 ${err ? "err-border" : "border-gray-300"}`}
          type={type}
          maxLength={length}
          placeholder={placeholder}
          value={value}
          onChange={setValue}
          defaultValue={def}
        />
        {length && showLength && (
          <span className="input-length">
            {" "}
            {value?.length || 0}/{length}{" "}
          </span>
        )}
      </div>
      {err && <span style={{ top: errtop, width: errwidth}} className="err-txt">{err}</span>}
    </div>
  );
};

export default Input1;
