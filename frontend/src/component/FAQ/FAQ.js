import { Collapse } from "antd";
import React from "react";
import { FQA } from "../../constant";

const FAQ = () => {
  return (
    <div className="flex mt-10 items-center justify-center">
     <h1 className="text-5xl font-bold w-1/2 px-10">Your questions, answered</h1>
      <Collapse className="w-1/2" size="large" bordered={false} style={{backgroundColor: "white" , textAlign:"left"}} items={FQA}  />
    </div>
  );
};

export default FAQ;
