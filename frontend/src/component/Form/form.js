import React from "react";
import InputComponent from "../Input/Input";
import { restruantForm } from "../../constant/ResturantForm";

const ResturantFrom = (props) => {
   const formObj = restruantForm[props?.formObj]
    const { label} = formObj
  return (
    <div className="flex justify-start font-medium w-full flex-col">
      <label className="text-left">{label}</label>
        <InputComponent {...{formObj , props}}/>
    
    </div>
  );
};

export default ResturantFrom;
