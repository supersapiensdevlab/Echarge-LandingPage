import React from "react";

const JourneyCard = (props) => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row mr-5 md:mr-0">
        <img
          src={props.value.img}
          className="2xl:h-72 2xl:w-72 lg:h-48 lg:w-48 md:h-48 md:w-48 h-72 w-72"
        ></img>
        <div className="flex flex-col justify-end 2xl:px-7 lg:px-3.5 pr-14">
          <h2 className="2xl:text-3xl lg:text-xl text-2xl mt-3 md:mt-0 font-bold text-sectionParaText 2xl:mb-2 lg:mb-1">
            {props.value.year}
          </h2>
          <p className="text-sectionParaText 2xl:text-lg lg:text-xs text-md mt-3 md:mt-0 md:font-semibold">
            {props.value.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JourneyCard;
