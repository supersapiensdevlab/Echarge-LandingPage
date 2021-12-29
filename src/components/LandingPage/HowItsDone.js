import React from "react";
import data from "../../assets/data/HowItsDoneData";
import HowItsDoneCard from "./Cards/HowItsDoneCard";

const HowItsDone = () => {
  return (
    <div className="w-full">
      <div className="w-full h-max 2xl:px-48 lg:px-36 px-10 flex md:flex-row flex-col ">
        <div className="md:w-1/2 w-full ">
          <div className="w-full sticky 2xl:top-32 md:top-20 lg:mb-16 mb-6">
            <p className="2xl:text-xl lg:text-sm text-sm mb-2 text-sectionHeadText font-semibold opacity-70">
              How It's done
            </p>
            <h1 className="2xl:text-4xl lg:text-2xl text-xl text-sectionParaText 2xl:pr-60 lg:pr-32 pr-16 font-semibold">
              Equally empathizing on EV owner needs while accelerating
              businesses through sustainable channels
            </h1>
            <div className="flex md:flex-row flex-col w-2/3 md:mt-8 mt-4">
              <div className="flex flex-col md:w-1/2 w-full lg:mr-2 md:mr-1 items-start">
                <h1 className="2xl:text-7xl lg:text-5xl text-5xl text-sectionParaText font-bold">
                  3 yrs
                </h1>
                <p className="2xl:text-xl lg:text-sm text-sm 2xl:mt-4 lg:mt-3 mt-2 text-sectionHeadText">
                  Concept in process
                </p>
              </div>
              <div className="flex flex-col md:w-1/2 w-full lg:ml-2 md:ml-2 mt-4 md:mt-0 items-start">
                <h1 className="2xl:text-7xl lg:text-5xl text-5xl text-sectionParaText font-bold">
                  60+
                </h1>
                <p className="2xl:text-xl lg:text-sm text-sm 2xl:mt-4 lg:mt-3 mt-2 text-sectionHeadText">
                  User Interviewed
                </p>
              </div>
            </div>
            <p className="2xl:text-xl lg:text-sm text-secondary font-semibold 2xl:mt-6 lg:mt-3 mt-4">
              Oh yes! our design is under provisional patent application
            </p>
          </div>
        </div>
        <div className="flex md:w-1/2 w-full flex-col items-center">
          {data.map((value, i) => {
            return <HowItsDoneCard value={value} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HowItsDone;
