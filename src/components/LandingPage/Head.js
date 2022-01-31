import React from "react";
import ChatIcon from "../Chat/ChatIcon";
import { Link } from "react-scroll";
import video from "../../assets/images/hero_lg.mp4";
import video_md from "../../assets/images/new_hero_lg.mp4";
import video_sm from "../../assets/images/new_hero_sm (1).mp4";

const Head = () => {
  return (
    <div
      className="w-full bg-primary lg:-mt-12 2xl:-mt-20"
      style={{ height: "100vh" }}
    >
      <div className="w-full h-full flex flex-col lg:justify-center justify-start items-center  md:items-center  ">
        <video
          className="h-full w-full hidden lg:block"
          autoPlay
          loop
          muted
          width="100vw"
        >
          <source src={video} type="video/mp4" />
        </video>
        {/* <div className="h-max w-full md:hidden block">
          <img src={video_sm} className="h-full w-full -mt-14" />
        </div> */}
        <video className=" h-max md:block hidden lg:hidden" autoPlay loop muted>
          <source src={video_md} type="video/mp4" className="h-full w-full" />
        </video>

        <video className=" h-max md:hidden block" autoPlay loop muted>
          <source src={video_sm} type="video/mp4" className="h-full w-full" />
        </video>
        {/* <div className="block mx-auto"> */}
        <div className="flex flex-col justify-center items-center absolute 2xl:bottom-16 lg:bottom-10 md:bottom-40 bottom-28">
          <Link to="footer" smooth={true} duration={4000}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="2xl:h-8 2xl:w-8 lg:h-6 lg:w-6 h-6 w-6 lg:text-primary text-secondary cursor-pointer animate-bounce hover:animate-none transition-all duration-200 "
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
          <p className="lg:text-primary text-secondary font-semibold md:font-normal lg:mt-3 mt-1 2xl:text-xl lg:text-sm text-sm">
            Scroll down
          </p>
        </div>
        {/* </div> */}
        <ChatIcon />
      </div>
    </div>
  );
};

export default Head;
