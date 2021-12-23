import React from "react";
import LeftSection from "./Sections/LeftSection";
import RightSection from "./Sections/RightSection";

const SmartPilot2 = () => {
  return (
    <div className="w-full">
      <div className="w-full h-release px-36 flex">
        <LeftSection
          head="Be a part of smart pilot"
          text="Accelerate your business with sustainable channels"
          pt1="Establishing the comprehensive EV eco system "
          pt2="Sustainble channels to boost the cross revenue"
          pt3="Open for all B2C, B2B EV Businesses"
        />
        <RightSection
          head="Woohoo! Thanks for showing your interest"
          text={
            <>
              Our team will get in touch with you over a <br /> pilot proposal
              in 2 weeks"
            </>
          }
          buttonText="Take me home"
        />
      </div>
    </div>
  );
};

export default SmartPilot2;
