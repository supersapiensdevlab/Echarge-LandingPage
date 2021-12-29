import React from "react";
import logo from "../../../assets/images/logo.svg";

const RightSection = (props) => {
  return (
    <div id="right-section h-full md:w-1/2 w-full">
      <div className="h-full w-full flex flex-col justify-center items-center 2xl:pl-56 lg:pl-28 px-8 mt-20 md:mt-0">
        <img
          src={logo}
          className="2xl:h-16 2xl:w-16 lg:h-10 lg:w-10 h-12 w-12 md:mb-7 mb-4 "
        ></img>
        <h1 className="text-sectionParaText 2xl:text-2xl lg:text-lg text-xl font-bold 2xl:mb-3 lg:mb-1.5 mb-4 text-center">
          {props.head}
        </h1>
        <p className="sectionHeadText font-semibold 2xl:text-xl text-sm lg:text-md opacity-70 text-center">
          {props.text}
        </p>
        <button className="2xl:w-60 lg:w-40 w-44 rounded-md 2xl:py-2.5 lg:py-1.5 py-1 bg-secondary 2xl:h-12 lg:h-8 h-10 2xl:text-xl lg:text-sm  2xl:mt-10 lg:mt-5 mt-5 text-primary font-semibold text-center">
          {props.buttonText}
        </button>
      </div>
    </div>
  );
};

export default RightSection;
