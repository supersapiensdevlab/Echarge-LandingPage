import React from "react";
import ChatIcon from "../Chat/ChatIcon";
import { Link } from "react-scroll";

const Head = () => {
  return (
    <div className="w-full bg-secondary " style={{ height: "83vh" }}>
      <div className="w-full h-full flex flex-col justify-center items-center  2xl:px-20 lg:px-0 pl-10 pr-20 lg:pr-0">
        <p className="2xl:text-8xl lg:text-6xl text-4xl text-primary">
          Find the most compatible charging <br /> location for your electric
          vehicle <br />
          with optimized mapping
        </p>
        <div className="flex flex-col items-center absolute 2xl:bottom-28 lg:bottom-14 bottom-10">
          <Link to="footer" smooth={true} duration={4000}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="2xl:h-10 2xl:w-10 lg:h-6 lg:w-6 h-6 w-6 text-primary cursor-pointer"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <p className="text-primary lg:mt-8 mt-3 2xl:text-xl lg:text-sm text-sm">
            Scroll down
          </p>
        </div>
        <ChatIcon />
      </div>
    </div>
  );
};

export default Head;
