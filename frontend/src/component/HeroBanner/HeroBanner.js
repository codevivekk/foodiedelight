import React from "react";
import { heroImage } from "../../assests";
import SearchFrom from "../SearchForm/SearchFrom";

const HeroBanner = () => {
  return (
    <div className="homepage xl:relative ">
      <img
        alt="hero-image"
        src={heroImage}
        height={534}
        width={947}
        className="rounded-xl hidden xl:block ml-80 object-cover"
      />
      <div className="form  inset-0 flex xl:ml-28 mb-10 xl:absolute items-center ">
        <SearchFrom />
      </div>
    </div>
  );
};

export default HeroBanner;
