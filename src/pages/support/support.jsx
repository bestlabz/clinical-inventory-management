import React from "react";

import SupportFUnction from "../../hooks/support/Support";
import Input from "../../Components/Properites/Inputs/Input";

import Json from "../../utils/translation/en.json";
import { ClipLoader } from "react-spinners";

const support = () => {
  const {
    errors,
    handleChange,
    handleSubmit,
    values,
    validationError,
    validationCheck,
    loader,
  } = SupportFUnction();
  return (
    <div className="container ">
      <h1 className="text-start w-full pb-3 text-[26px] font-semibold">
        Help Center
      </h1>
        <form
          autoComplete="off"
          className="login-form  mx-auto gap-3"
          onSubmit={handleSubmit}
        >
          <Input
            id="name"
            name="name"
            value={values.name}
            setValue={(e) => {
              if (/^[a-zA-Z\s]*$/.test(e.target.value)) {
                handleChange(e); // Call handleChange if the input is valid
              }
            }}
            err={validationError && errors.name}
            label={Json["help-center"]["input-label"].name}
            placeholder={Json["help-center"]["input-label"]["placeholder-name"]}
            disabled={true}
          />

          <Input
            id="email"
            name="email"
            value={values.email}
            setValue={(e) => {
              if (/^[a-zA-Z\s]*$/.test(e.target.value)) {
                handleChange(e); // Call handleChange if the input is valid
              }
            }}
            err={validationError && errors.email}
            label={Json["help-center"]["input-label"].email}
            placeholder={
              Json["help-center"]["input-label"]["placeholder-email"]
            }
            disabled={true}
          />

          <Input
            id="mobile_number"
            name="mobile_number"
            value={values.mobile_number}
            setValue={(e) => {
              if (/^[a-zA-Z\s]*$/.test(e.target.value)) {
                handleChange(e); // Call handleChange if the input is valid
              }
            }}
            err={validationError && errors.mobile_number}
            label={Json["help-center"]["input-label"].mobile}
            placeholder={
              Json["help-center"]["input-label"]["placeholder-mobile"]
            }
            disabled={true}
          />

          <div className="input-container1">
            <label className="input-label1">
              {Json["help-center"]["input-label"].description}
            </label>
            <div className={`input-box1`}>
              <textarea
                rows={6}
                id="description"
                name="description"
                className={`input1 border-[1px] resize-none  ${
                  validationError && errors.description
                    ? "err-border"
                    : "border-gray-300"
                }`}
                type="text"
                placeholder={
                  Json["help-center"]["input-label"]["placeholder-description"]
                }
                value={values.description}
                onChange={handleChange}
              />
            </div>
            {validationError && (
              <span style={{ top: "100%", width: "100%" }} className="err-txt">
                {errors.description}
              </span>
            )}
          </div>

          {loader ? (
            <button
              type="button"
              className="bg-primary_color text-white font-semibold w-[300px] py-3 rounded-md mx-auto"
            >
              <ClipLoader size={20} color="#fff" />
            </button>
          ) : (
            <button
              type="submit"
              onClick={validationCheck}
              className="bg-primary_color text-white font-semibold w-[200px] py-3 rounded-md mx-auto"
            >
              Submit
            </button>
          )}
        </form>
    </div>
  );
};

export default support;
