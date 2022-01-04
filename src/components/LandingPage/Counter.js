import React, { useState, useEffect } from "react";
import image from "../../assets/images/Earth web.png";
import CountUp from "react-countup";

const Counter = () => {
  const [track, setTrack] = useState(false);

  return (
    <div className="w-full" onMouseOver={() => setTrack(true)}>
      <div className="w-full 2xl:px-48 lg:px-36 px-10 flex md:flex-row flex-col justify-center items-center 2xl:mb-72 lg:mb-36 mb-16">
        <img
          src={image}
          className="2xl:h-96 2xl:w-96 lg:h-60 lg:w-60 h-60 w-60 2xl:mr-72 lg:mr-36 md:mr-20"
        ></img>
        <div className="flex flex-col mt-8 md:mt-0">
          {window.innerwidth <= "768px" ? (
            <p className="2xl:text-4xl lg:text-2xl text-xl  text-sectionParaText font-semibold">
              The earth is what we all have in common, Let's take care of her
            </p>
          ) : (
            <p className="2xl:text-4xl lg:text-2xl text-xl   text-sectionParaText font-semibold">
              The earth is what we all have in <br /> common, Let's take care of
              her
            </p>
          )}
          <div className="flex w-full 2xl:mt-10 lg:mt-5 mt-5">
            <div className="flex flex-col w-1/2 items-start">
              <h2 className="2xl:text-7xl lg:text-5xl text-5xl text-sectionParaText font-bold">
                {track ? <CountUp end={1234} duration={7} /> : <>0</>}
              </h2>
              <p className="2xl:text-xl lg:text-sm text-sm text-sectionHeadText 2xl:mt-2 lg:mt-1 mt-1 mt-1">
                Total EVs
              </p>
            </div>
            <div className="flex flex-col 2xl:ml-5 lg:ml-2.5">
              <h2 className="2xl:text-7xl lg:text-5xl text-5xl text-sectionParaText font-bold">
                {track ? <CountUp end={1234} duration={7} /> : <>0</>}
              </h2>
              <p className="2xl:text-xl lg:text-sm text-sm text-sectionHeadText 2xl:mt-2 lg:mt-1 mt-1">
                Total Charges installed
              </p>
            </div>
          </div>
          <div className="flex w-full 2xl:mt-5 lg:mt-2.5 mt-5">
            <div className="flex flex-col w-1/2 items-start">
              <h2 className="2xl:text-7xl lg:text-5xl text-5xl text-sectionParaText font-bold">
                {track ? <CountUp end={1232} duration={7} /> : <>0</>}
              </h2>
              <p className="2xl:text-xl lg:text-sm text-sm  text-sectionHeadText 2xl:mt-2 lg:mt-1 mt-1">
                Total Kms covered
              </p>
            </div>
            <div className="flex flex-col 2xl:ml-5 lg:ml-2.5">
              <h2 className="2xl:text-7xl lg:text-5xl text-5xl text-sectionParaText font-bold">
                {track ? <CountUp end={123} duration={7} /> : <>0</>}
              </h2>
              <p className="2xl:text-xl lg:text-sm text-sm text-sectionHeadText 2xl:mt-2 lg:mt-1 mt-1 ">
                Total Carbon saved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
