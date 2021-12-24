import React from "react";

const JourneyCard = (props) => {
  return (
    <div>
      <div className="flex">
        <img src={props.value.img} className="h-72 w-72"></img>
        <div className="flex flex-col justify-end px-7">
          <h2 className="text-3xl font-bold text-sectionParaText mb-2">
            {props.value.year}
          </h2>
          <p className="text-sectionParaText text-lg font-semibold">
            {props.value.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JourneyCard;
