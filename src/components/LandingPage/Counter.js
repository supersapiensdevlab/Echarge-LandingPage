import React from "react";
import image from "../../assets/images/Earth web.png";

const Counter = () => {
  return (
    <div className="w-full">
      <div className="w-full px-48 flex justify-center items-center mb-72">
        <img src={image} className="h-96 w-96 mr-72"></img>
        <div className="flex flex-col">
          <p className="text-4xl  text-sectionParaText font-semibold">
            The earth is what we all have in <br /> common, Let's take care of
            her
          </p>
          <div className="flex w-full justify-between mt-10">
            <div className="flex flex-col">
              <h2 className="text-7xl text-sectionParaText font-bold">1234</h2>
              <p className="text-lg text-sectionHeadText mt-2">Total EVs</p>
            </div>
            <div className="flex flex-col">
              <h2 className="text-7xl text-sectionParaText font-bold">1234</h2>
              <p className="text-lg text-sectionHeadText mt-2">
                Total Charges install
              </p>
            </div>
          </div>
          <div className="flex w-full justify-between mt-5">
            <div className="flex flex-col">
              <h2 className="text-7xl text-sectionParaText font-bold">1234</h2>
              <p className="text-lg text-sectionHeadText mt-2">
                Total Kms covered
              </p>
            </div>
            <div className="flex flex-col ">
              <h2 className="text-7xl text-sectionParaText font-bold">1234</h2>
              <p className="text-lg text-sectionHeadText mt-2 ">
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
