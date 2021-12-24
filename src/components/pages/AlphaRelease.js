import React from "react";
import ChatIcon from "../Chat/ChatIcon";
import LeftSection from "./Sections/LeftSection";

const AlphaRelease = () => {
  return (
    <div className="w-full">
      <div className="w-full h-release px-36 flex">
        <LeftSection
          head="Be a part of alpha release"
          text="Join our discord community to get early bird benefits"
          pt1="Get an exclusive E charge token to redeem while charging"
          pt2="1-month free trial once platform gets launched"
          pt3="Validate our new feature before the official launch"
        />
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
              <label className="text-lg font-semibold">
                Your primary mail ID
              </label>
              <input
                type="email"
                placeholder="Xyz@abc.com"
                className="w-full px-3 py-2 border-2 border-gray-400 rounded-md mt-2"
              />
              <p className="text-sectionParaText mt-2 font-semibold">
                Note: Your primary mail ID will be referred for future contact
              </p>
              <button
                type="submit"
                className="w-72 py-2 bg-secondary h-14 rounded-lg text-xl mt-8 text-primary font-semibold text-center"
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
