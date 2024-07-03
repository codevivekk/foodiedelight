import React from "react";
import { features } from "../../constant";

const Features = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      {features?.map((obj) => (
        <div className="py-8 px-5">
          <p className="font-extrabold text-xl text-left mt-2">{obj?.title}</p>
          <p className="break-all font-light  text-gray-500 text-left mt-2">
            {obj?.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Features;
