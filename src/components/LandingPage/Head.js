import React from "react";
import ChatIcon from "../Chat/ChatIcon";
import { Link } from "react-scroll";
import video from "../../assets/images/hero_lg.mp4";
import video_sm from "../../assets/images/hero_sm.mp4";

const Head = () => {
  return (
    <div
      className="w-full md:bg-secondary lg:bg-primary"
      style={{ height: "83vh" }}
    >
      <div className="w-full h-full flex flex-col justify-center items-center  ">
        <p className="2xl:text-8xl lg:text-6xl text-4xl text-primary hidden md:block lg:hidden">
          Find the most compatible charging <br /> location for your electric
          vehicle <br />
          with optimized mapping
        </p>

        <video className="h-full w-screen hidden lg:block" autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
        {/* <div className="h-max w-full md:hidden block">
          <img src={video_sm} className="h-full w-full -mt-14" />
        </div> */}

        <video
          className="h-full w-full md:hidden block -mt-14"
          autoPlay
          loop
          muted
        >
          <source src={video_sm} type="video/mp4" className="h-full w-full" />
        </video>

        <div className="flex flex-col items-center absolute 2xl:bottom-16 lg:bottom-10 md:bottom-32 bottom-0">
          <Link to="footer" smooth={true} duration={4000}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="2xl:h-8 2xl:w-8 lg:h-6 lg:w-6 h-6 w-6 text-primary cursor-pointer animate-bounce hover:animate-none transition-all duration-200 "
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
          <p className="text-primary lg:mt-3 mt-3 2xl:text-xl lg:text-sm text-sm">
            Scroll down
          </p>
        </div>
        <ChatIcon />
      </div>
    </div>
  );
};

export default Head;
