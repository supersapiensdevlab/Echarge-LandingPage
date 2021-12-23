import React from "react";
import logo from "../../../assets/images/logo.svg";

const RightSection = (props) => {
  return (
    <div id="right-section h-full w-1/2">
      <div className="h-full w-full flex flex-col justify-center items-center pl-56">
        <img src={logo} className="h-16 w-16 mb-7"></img>
        <h1 className="text-sectionParaText text-2xl font-bold mb-3">
          {props.head}
        </h1>
        <p className="sectionHeadText font-semibold text-xl opacity-70 text-center">
          {props.text}
        </p>
        <button className="w-60 py-2.5 bg-secondary h-12 rounded-lg text-xl mt-10 text-primary font-semibold text-center">
          {props.buttonText}
        </button>
      </div>
    </div>
  );
};

export default RightSection;
