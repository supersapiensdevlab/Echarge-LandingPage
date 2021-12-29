import React from "react";
import FindUsCard from "./Cards/FindUsCard";

const FindUs = () => {
  return (
    <div className="w-full">
      <div className="w-full h-max 2xl:px-48 lg:px-36 px-10">
        <div className="w-full h-max 2xl:mb-20 lg:mb-10 mb-5">
          <h4 className="2xl:text-xl lg:text-sm text-sm font-semibold opacity-70 mb-2 text-sectionHeadText">
            Find us interesting ?
          </h4>
          <p className="2xl:text-7xl lg:text-5xl text-3xl  text-sectionParaText">
            We are on a constant search of <br /> EV enthusiast like you
          </p>
        </div>
        <div className="w-full 2xl:h-96 lg:h-72 h-48 bg-secondary 2xl:rounded-lg rounded-lg lg:rounded-md 2xl:mb-10 lg:mb-5 mb-5">
          <FindUsCard
            head="Be a part of alpha release"
            text="Join our discord community to get earlybird benefits"
            buttonText="Join the community"
            link="/be_alpha"
          />
        </div>
        <div className="w-full h-max flex flex-col md:flex-row ">
          <div className="w-full md:w-1/2 2xl:h-96 lg:h-72 h-48 2xl:mr-5 lg:mr-2.5 md:mr-2.5 bg-secondary 2xl:rounded-lg lg:rounded-md rounded-lg mb-5 md:mb-0">
            <FindUsCard
              head="Be a part of smart pilot "
              text="Accelerate your business with sustainable channels"
              buttonText="Become a partner"
              link="become_smartpilot"
            />
          </div>
          <div className="w-full md:w-1/2 2xl:h-96 lg:h-72 h-48 2xl:ml-5 lg:ml-2.5 md:ml-2.5 bg-secondary 2xl:rounded-lg lg:rounded-md rounded-lg mb-5 md:mb-0">
            <FindUsCard
              head="Become an investor"
              text="We are looking for an EV enthusiast like you"
              buttonText="Make an offer"
              link="become_investor"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full h-max 2xl:my-60 lg:my-32 my-10">
          <h1 className="text-sectionParaText 2xl:text-5xl lg:text-3xl text-2xl w-full md:w-1/2 2xl:pr-20 lg:pr-10 2xl:mr-10 lg:mr-5">
            Till the time our development team clear the bugs subscribe to our
            EV newsletter
          </h1>
          <div className="flex flex-col w-full md:w-1/2 md:px-10">
            <input
              type="text"
              placeholder="Enter your mail ID here "
              className="2xl:h-14 lg:h-10 h-10 w-full 2xl:px-4 lg:px-2 px-2 2xl:text-lg lg:text-xs py-0 2xl:border-2 lg:border border text-black border-borderColor 2xl:rounded-lg lg:rounded-md rounded-md 2xl:mb-5 lg:mb-3 mb-3 mt-4 md:mt-0"
            />
            <a
              href="/"
              className="2xl:h-14 lg:h-10 h-10 2xl:w-80 lg:w-56 w-40 text-center bg-secondary font-semibold text-primary 2xl:rounded-lg lg:rounded-md rounded-md 2xl:pt-3.5 lg:pt-3 pt-2 2xl:text-lg lg:text-xs"
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
