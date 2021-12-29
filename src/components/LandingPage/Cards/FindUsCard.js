import React from "react";

const FindUsCard = (props) => {
  return (
    <div className="h-full">
      <div className="w-full h-full flex flex-col justify-center 2xl:ml-20 lg:ml-10 px-5 md:px-10">
        <h1 className="2xl:text-5xl lg:text-3xl text-xl text-primary 2xl:mb-3 lg:mb-1.5 mb-1">
          {props.head}
        </h1>
        <p className="2xl:text-2xl lg:text-md text-sm opacity-70 text-primary 2xl:mb-10 lg:mb-5 mb-3">
          {props.text}
        </p>
        <a
          href={props.link}
          className="2xl:h-14 lg:h-10 h-8 2xl:w-72 lg:w-48 w-44 text-center font-semibold 2xl:px-8 lg:px-4 2xl:pt-3 lg:pt-2 pt-1.5 2xl:text-2xl text-sm lg:text-md bg-primary text-secondary md:rounded-lg rounded-md"
        >
          {props.buttonText}
        </a>
      </div>
    </div>
  );
};

export default FindUsCard;
