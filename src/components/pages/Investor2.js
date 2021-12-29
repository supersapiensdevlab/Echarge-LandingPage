import React from "react";
import ChatIcon from "../Chat/ChatIcon";
import LeftSection from "./Sections/LeftSection";
import RightSection from "./Sections/RightSection";

const Investor2 = () => {
  return (
    <div className="w-full">
      <div className="w-full 2xl:px-36 lg:px-20  2xl:h-release lg:h-lgrelease h-mobilerelease  flex flex-col md:flex-row">
        <LeftSection
          head="Become an investor"
          text="Accelerate your business with sustainable channels"
          pt1="Be a part of future EV platform! "
          pt2="Free access to EV tokenomic pool"
          pt3="Exclusive platform benefits"
        />
        <RightSection
          head="Woohoo! Thanks for showing your interest"
          text={
            <>
              Our team will get in touch with you over a <br />
              funding proposal in 2 weeks"
            </>
          }
          buttonText="Take me home"
        />
        <ChatIcon />
      </div>
    </div>
  );
};

export default Investor2;
