import React from "react";

const Input = ({
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
  errwidth = "100%",
  errtop = "100%",
  label,
  disabled = false,
  color = "#000",
  size,
  font,
  weight,
  selectKey,
}) => {
  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <div className={`input-box`}>
        <input
          style={{
            color,
            fontSize: size,
            fontFamily: font,
            fontWeight: weight,
          }}
          id={id}
          name={name}
          className={`input ${err ? "err-border" : "border-gray-300"}`}
          type={type}
          maxLength={length}
          placeholder={placeholder}
          value={value}
          onChange={setValue}
          defaultValue={def}
          disabled={disabled}
          onClick={selectKey}
        />
        {length && showLength && (
          <span className="input-length">
            {" "}
            {value?.length || 0}/{length}{" "}
          </span>
        )}
      </div>
      {err && (
        <span style={{ top: errtop, width: errwidth }} className="err-txt">
          {err}
        </span>
      )}
    </div>
  );
};

export default Input;
