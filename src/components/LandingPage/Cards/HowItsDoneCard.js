import React from "react";

const HowItsDoneCard = (props) => {
  return (
    <div className="flex flex-col 2xl:mb-16 lg:mb-10 mb-10">
      <img
        src={props.value.img}
        className="2xl:h-100 2xl:w-100 lg:h-80 lg:w-auto h-72 w-72"
      ></img>
      <h1 className="2xl:mt-3 lg:mt-1.5 mt-3 font-bold 2xl:text-4xl lg:text-2xl text-2xl">
        {props.value.head}
      </h1>
      <p className="2xl:text-xl 2xl:mt-3 mt-2 lg:text-sm text-sm lg:mt-1.5 text-sectionHeadText">
        {props.value.text}
      </p>
    </div>
  );
};

export default HowItsDoneCard;
