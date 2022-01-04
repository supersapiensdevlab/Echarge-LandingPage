import React from "react";
import ChatIcon from "../Chat/ChatIcon";
import LeftSection from "./Sections/LeftSection";

const AlphaRelease = () => {
  return (
    <div className="w-full">
      <div className="w-full 2xl:px-36 lg:px-20 2xl:h-release lg:h-lgrelease h-mobilerelease flex flex-col md:flex-row">
        <LeftSection
          head="Be a part of alpha release"
          text="Join our discord community to get early bird benefits"
          pt1="Get an exclusive E charge token to redeem while charging"
          pt2="1-month free trial once platform gets launched"
          pt3="Validate our new feature before the official launch"
        />
        <div id="right-section h-full md:w-1/2 w-full">
          <div className="h-full w-full flex flex-col justify-center   2xl:pl-60 lg:pl-32 px-8">
            <h2 className="text-sectionParaText 2xl:text-2xl lg:text-lg text-lg font-bold 2xl:mb-10 lg:mb-5 mb-4 mt-7 md:mt-0">
              It will not take more than 5 mins
            </h2>
            <form action="/" className="w-full">
              <label className="2xl:text-lg lg:text-sm text-md font-semibold">
                Your name
              </label>
              <div className="2xl:mt-2 2xl:mb-4 lg:mt-1 lg:mb-2 mt-1">
                <input
                  type="text"
                  placeholder="First name"
                  className="2xl:w-60 lg:w-40 w-full 2xl:px-3 lg:px-1.5 px-1.5 2xl:py-2 lg:py-1 py-1.5 border-2  border-gray-400  rounded-md 2xl:mr-2 lg:mr-2 mb-3 md:mb-0"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="2xl:w-60 lg:w-40 w-full 2xl:px-3 lg:px-1.5 px-1.5 2xl:py-2 lg:py-1 py-1.5 border-2  border-gray-400  rounded-md 2xl:ml-2 lg:ml-1 mb-3 md:mb-0"
                />
              </div>
              <label className="2xl:text-lg lg:text-sm text-md font-semibold">
                Your primary mail ID
              </label>
              <input
                type="email"
                placeholder="Xyz@abc.com"
                className="w-full 2xl:px-3 lg:px-1.5 px-1.5 2xl:py-2 lg:py-1 py-1.5 border-2 border-gray-400 rounded-md 2xl:mt-2 lg:mt-1 mt-1"
              />
              <p className="text-sectionParaText  lg:mt-2 mt-4 lg:text-xs 2xl:text-lg text-md font-semibold">
                Note: Your primary mail ID will be referred for future contact
              </p>
              <button
                type="submit"
                className="2xl:w-72 lg:w-52 w-48 2xl:py-2 lg:py-1 py-1.5 bg-secondary 2xl:h-14 lg:h-10 h-10 2xl:rounded-lg rounded-md 2xl:text-xl lg:text-md 2xl:mt-8 lg:mt-4 mt-4 text-primary font-semibold text-center"
              >
                Join the community
              </button>
            </form>
          </div>
        </div>
        <ChatIcon />
      </div>
    </div>
  );
};

export default AlphaRelease;
