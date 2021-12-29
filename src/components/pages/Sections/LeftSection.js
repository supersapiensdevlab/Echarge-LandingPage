import React, { useState, useEffect } from "react";

const LeftSection = (props) => {
  const [url, setUrl] = useState("");
  let hidden;

  // useEffect(() => {
  //   let param = window.location.href;
  //   setUrl(param);
  //   if (url === "http://localhost:3000/smartpilot") {
  //     hidden = true;
  //   } else {
  //     hidden = false;
  //   }
  // });

  return (
    <div
      id="left-section"
      className="md:h-full h-1/2 bg-secondary md:w-1/2 w-full flex flex-col justify-center 2xl:px-20 lg:px-12 px-6 "
      // style={{ hidden: { hidden } }}
    >
      <h1 className="text-primary 2xl:text-5xl lg:text-3xl text-2xl 2xl:mb-4 lg:mb-2 mb-3">
        {props.head}
      </h1>
      <p className="text-primary 2xl:text-2xl lg:text-md text-md 2xl:mb-12 lg:mb-6 mb-4 opacity-80">
        {props.text}
      </p>
      <div className="flex flex-col">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="lg:h-4 lg:w-4 h-6 w-6  2xl:mr-3 lg:mr-1.5 mr-2"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-primary 2xl:text-lg lg:text-sm text-sm my-1">
            {props.pt1}
          </p>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="lg:h-4 lg:w-4 h-6 w-6  2xl:mr-3 lg:mr-1.5 mr-2"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-primary 2xl:text-lg lg:text-sm text-sm my-1">
            {props.pt2}
          </p>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="lg:h-4 lg:w-4 h-6 w-6  2xl:mr-3 lg:mr-1.5 mr-2"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-primary 2xl:text-lg lg:text-sm text-sm my-1">
            {props.pt3}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
