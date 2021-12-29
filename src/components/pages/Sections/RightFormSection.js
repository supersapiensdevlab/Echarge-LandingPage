import React from "react";
import Popup from "../Popup";

const RightFormSection = ({
  data,
  selected,
  setSelected,
  buttonText,
  labelText,
}) => {
  return (
    <div id="right-section h-full md:w-1/2 w-full">
      <div className="h-full w-full flex flex-col justify-center 2xl:pl-60 lg:pl-32 px-8">
        <h2 className="text-sectionParaText 2xl:text-2xl lg:text-lg text-lg font-bold 2xl:mb-10 lg:mb-5 mb-4 mt-7 md:mt-0">
          It will take not more than 5 mins
        </h2>
        <form action="/" className="w-full">
          <label className="2xl:text-lg lg:text-sm text-md font-semibold">
            Your name
          </label>
          <div className="2xl:mt-2 2xl:mb-4 lg:mt-1 lg:mb-2 mt-1">
            <input
              type="text"
              placeholder="First name"
              className="2xl:w-60 lg:w-40 w-full px-1.5 py-1.5 2xl:px-3 lg:px-1.5 2xl:py-2 lg:py-1 border-2 border-gray-400 rounded-md lg:mr-2 mb-3 md:mb-0"
            />
            <input
              type="text"
              placeholder="Last name"
              className="2xl:w-60 lg:w-40 w-full px-1.5 py-1.5 2xl:px-3 lg:px-1.5 2xl:py-2 lg:py-1 border-2 border-gray-400 rounded-md lg:ml-2 mb-3 md:mb-0"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="2xl:text-lg lg:text-sm text-md font-semibold">
              Company name
            </label>
            <input
              type="text"
              placeholder="Abc Pvt ltd"
              className="w-full px-1.5 py-1.5 2xl:px-3 lg:px-1.5 2xl:py-2 lg:py-1 border-2 border-gray-400 rounded-md lg:mt-2 mt-1"
            />
            <label className="2xl:text-lg lg:text-sm text-md font-semibold 2xl:mt-4 lg:mt-2 mt-3">
              Company mail ID
            </label>
            <input
              type="email"
              placeholder="Xyz@abc.com"
              className="w-full px-1.5 py-1.5 2xl:px-3 lg:px-1.5 2xl:py-2 lg:py-1 border-2 border-gray-400 rounded-md lg:mt-2 mt-1"
            />
            <div className="2xl:mt-4 lg:mt-2 mt-3">
              <label className="2xl:text-lg lg:text-sm text-md text-md font-semibold">
                {labelText}
              </label>

              <Popup
                data={data}
                setSelected={(data) => setSelected(data)}
                selected={selected}
              />
            </div>
          </div>
          <button
            type="submit"
            className="2xl:w-72 lg:w-52 w-48 py-1.5 h-10 2xl:py-2 lg:py-1 bg-secondary 2xl:h-14 lg:h-10 rounded-md lg:rounded-md 2xl:text-xl lg:text-md 2xl:mt-8 lg:mt-4 mt-4 text-primary font-semibold text-center"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RightFormSection;
