import React from "react";
import isEmpty from "../../utlity/isEmpty";
import { Input } from "antd";

const InputComponent = (props) => {
  const { name, type, validation, placeholder } = props?.formObj;
  const { maxLength} = validation;
  const {
    suffixIcon,
    error,
    value,
    handleChange,
    minLength,
    disable
  } = props?.props;
  return (
    <React.Fragment>
      <Input
      disabled = {disable}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        className={`p-2 ${disable ? '!text-black' : ''}`}
        suffix={suffixIcon}
        maxLength={maxLength}
        onChange={handleChange}
        minLength={minLength}
        autoComplete="off"
      />
      <div className={"error-length-message-main"}>
        {!isEmpty(error) && (
          <p className={`error-message text-left text-red-400`}>{error}</p>
        )}
        {props?.formObj?.validation?.maxLength &&
          <p className={`tag-length-main text-right ${ props?.formObj?.validation?.maxLength - value?.length <=5 ? "text-red-400" :"text-gray-400"}`}>
            {isEmpty(value) || value?.length === 0
              ? props?.formObj?.validation?.maxLength
              : props?.formObj?.validation?.maxLength - value?.length}
          </p>
        }
      </div>
    </React.Fragment>
  );
};

export default InputComponent;
