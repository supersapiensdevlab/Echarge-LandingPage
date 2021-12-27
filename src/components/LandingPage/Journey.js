import React from "react";
import Carousel from "react-grid-carousel";
import data from "../../assets/data/journeyData";
import JourneyCard from "./Cards/JourneyCard";

const Journey = () => {
  return (
    <div className="w-full">
      <div className="w-full h-max 2xl:pl-48 lg:pl-36 pl-10">
        <div className="w-full h-max 2xl:my-32 lg:my-16">
          <h4 className="2xl:text-xl lg:text-sm text-sm font-semibold opacity-70 mb-2 text-sectionHeadText">
            The journey
          </h4>
          <p className="2xl:text-7xl lg:text-5xl text-2xl text-sectionParaText">
            It's been a long journey <br />
            since
            <span className="font-bold"> 2017</span>
          </p>
        </div>
        <div className="2xl:mt-36 lg:mt-20 mt-16 -ml-2 2xl:mb-72 lg:mb-36 mb-16">
          <div className="">
            <Carousel cols={3}>
              {data.map((value, i) => {
                return (
                  <Carousel.Item key={i}>
                    <JourneyCard value={value} />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
