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
    <div id="right-section h-full w-1/2">
      <div className="h-full w-full flex flex-col justify-center   pl-60">
        <h2 className="text-sectionParaText text-2xl font-bold mb-10">
          It will take not more than 5 mins
        </h2>
        <form action="/" className="w-full">
          <label className="text-lg font-semibold">Your name</label>
          <div className="mt-2 mb-4">
            <input
              type="text"
              placeholder="First name"
              className="w-56 px-3 py-2 border-2 border-gray-400 rounded-md mr-2 "
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-56 px-3 py-2 border-2 border-gray-400 rounded-md ml-2 "
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-lg font-semibold">Company name</label>
            <input
              type="text"
              placeholder="Abc Pvt ltd"
              className="w-full px-3 py-2 border-2 border-gray-400 rounded-md mt-2"
            />
            <label className="text-lg font-semibold mt-4">
              Company mail ID
            </label>
            <input
              type="email"
              placeholder="Xyz@abc.com"
              className="w-full px-3 py-2 border-2 border-gray-400 rounded-md mt-2"
            />
            <div className="mt-4">
              <label className="text-lg font-semibold">{labelText}</label>

              <Popup
                data={data}
                setSelected={(data) => setSelected(data)}
                selected={selected}
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-72 py-2 bg-secondary h-12 rounded-lg text-xl mt-8 text-primary font-semibold text-center"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RightFormSection;
