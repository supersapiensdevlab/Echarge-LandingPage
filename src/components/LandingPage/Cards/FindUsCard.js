import React from "react";

const FindUsCard = (props) => {
  return (
    <div className="h-full">
      <div className="w-full h-full flex flex-col justify-center ml-20">
        <h1 className="text-5xl text-primary mb-3">{props.head}</h1>
        <p className="text-2xl text-primary mb-10">{props.text}</p>
        <a
          href="/"
          className="h-14 w-72 text-center font-semibold px-8 pt-3 text-2xl bg-primary text-secondary rounded-lg"
        >
          {props.buttonText}
        </a>
      </div>
    </div>
  );
};

export default FindUsCard;
