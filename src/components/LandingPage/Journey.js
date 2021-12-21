import React from "react";
import Carousel from "react-grid-carousel";
import data from "../../assets/data/journeyData";
import JourneyCard from "./Cards/JourneyCard";

const Journey = () => {
  return (
    <div className="w-full">
      <div className="w-full h-max pl-48">
        <div className="w-full h-max my-32">
          <h4 className="text-xl mb-2 text-sectionHeadText">The journey</h4>
          <p className="text-6xl text-sectionParaText">
            It's been a long journey <br />
            since
            <span className="font-bold"> 2017</span>
          </p>
        </div>
        <div className="mt-36 mb-72">
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
