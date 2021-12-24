import React from "react";
import data from "../../assets/data/HowItsDoneData";
import HowItsDoneCard from "./Cards/HowItsDoneCard";

const HowItsDone = () => {
  return (
    <div className="w-full">
      <div className="w-full h-max px-48 flex ">
        <div className="w-1/2 ">
          <div className="w-full sticky top-32 mb-16">
            <p className="text-xl mb-2 text-sectionHeadText">How It's done</p>
            <h1 className="text-4xl text-sectionParaText pr-60 font-semibold">
              Equally empathizing on EV owner needs while accelerating
              businesses through sustainable channels
            </h1>
            <div className="flex w-2/3 mt-8">
              <div className="flex flex-col w-1/2 mr-2 items-start">
                <h1 className="text-7xl text-sectionParaText font-bold">
                  3 yrs
                </h1>
                <p className="text-xl mt-4 text-sectionHeadText">
                  Concept in process
                </p>
              </div>
              <div className="flex flex-col w-1/2 ml-2 items-start">
                <h1 className="text-7xl text-sectionParaText font-bold">60+</h1>
                <p className="text-xl mt-4 text-sectionHeadText">
                  User Interviewed
                </p>
              </div>
            </div>
            <p className="text-xl text-secondary font-semibold mt-6">
              Oh yes! our design is under provisional patent application
            </p>
          </div>
        </div>
        <div className="flex w-1/2 flex-col items-center">
          {data.map((value, i) => {
            return <HowItsDoneCard value={value} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HowItsDone;
