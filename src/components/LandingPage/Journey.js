import React, { useState } from "react";
import data from "../../assets/data/journeyData";
import JourneyCard from "./Cards/JourneyCard";
import Marquee from "react-fast-marquee";

const Journey = () => {
  const [hover, setHover] = useState(false);
  const [direction, setDirection] = useState("");

  return (
    <div className="w-full ">
      <div className="w-full h-max 2xl:pl-48 lg:pl-36 pl-10">
        <div className="w-full h-max 2xl:my-32 lg:my-16">
          <h4 className="2xl:text-xl lg:text-sm text-sm font-semibold opacity-70 mb-2 text-sectionHeadText">
            The journey
          </h4>
          <p className="2xl:text-5xl lg:text-3xl text-2xl text-sectionParaText">
            It's been a long journey <br />
            since
            <span className="font-bold"> 2017</span>
          </p>
        </div>
        <div className="w-full 2xl:mt-36 lg:mt-20 mt-16 -ml-2 2xl:mb-72 lg:mb-36 mb-16 overflow-scroll">
          <div className="flex w-full">
            <div
              className="w-1/2 h-80"
              onMouseOver={() => setDirection("right")}
            ></div>
            <div
              className="w-1/2 h-80"
              onMouseEnter={() => setDirection("left")}
            ></div>
          </div>
          <div
            className="flex -mt-72"
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
          >
            {/* <Carousel cols={3}> */}
            <Marquee speed={150} gradient={false} play={hover}>
              {data.map((value, i) => {
                return (
                  // <Carousel.Item key={i}>
                  <JourneyCard value={value} />
                  // {/* </Carousel.Item> */}
                );
              })}
            </Marquee>
            {/* </Carousel> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
