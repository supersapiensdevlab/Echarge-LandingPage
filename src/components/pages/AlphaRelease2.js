import React from "react";
import ChatIcon from "../Chat/ChatIcon";
import LeftSection from "./Sections/LeftSection";
import RightSection from "./Sections/RightSection";

const AlphaRelease2 = () => {
  return (
    <div className="w-full">
      <div className="w-full 2xl:px-36 2xl:h-release lg:h-lgrelease h-mobilerelease lg:px-20 flex flex-col md:flex-row">
        <LeftSection
          head="Be a part of alpha release"
          text="Join our discord community to get early bird benefits"
          pt1="Get an exclusive E charge token to redeem while charging"
          pt2="1-month free trial once platform gets launched"
          pt3="Validate our new feature before the official launch"
        />
        <RightSection
          head="Woohoo! Welcome to the E charge community"
          text={
            <>
              We have mailed you a discord invitation link,
              <br /> please click on that link to join the community.
            </>
          }
          buttonText="Resend the link"
        />
        <ChatIcon />
      </div>
    </div>
  );
};

export default AlphaRelease2;
