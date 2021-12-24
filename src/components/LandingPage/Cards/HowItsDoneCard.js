import React from "react";

const HowItsDoneCard = (props) => {
  return (
    <div className="flex flex-col  mb-16">
      <img
        src={props.value.img}
        className="h-illustration w-illustration "
      ></img>
      <h1 className="mt-3 font-bold text-4xl">{props.value.head}</h1>
      <p className="text-xl mt-3 text-sectionHeadText">{props.value.text}</p>
    </div>
  );
};

export default HowItsDoneCard;
