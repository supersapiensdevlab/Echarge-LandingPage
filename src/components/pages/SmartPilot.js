import React, { useState } from "react";
import ChatIcon from "../Chat/ChatIcon";
import LeftSection from "./Sections/LeftSection";
import RightFormSection from "./Sections/RightFormSection";

const SmartPilot = () => {
  const data = [
    "EV charger manufacturer/Supplier",
    "EV fleet owner",
    "Amenities partner",
    "Marketing partner",
    "Corporate alliance",
    "Community alliance",
  ];
  const [selected, setSelected] = useState(data[0]);

  return (
    <div className="w-full">
      <div className="w-full 2xl:px-36 lg:px-20 flex flex-col md:flex-row h-mobilerelease  2xl:h-release lg:h-lgrelease">
        <LeftSection
          head="Be a part of smart pilot"
          text="Accelerate your business with sustainable channels"
          pt1="Establishing the comprehensive EV eco system "
          pt2="Sustainble channels to boost the cross revenue"
          pt3="Open for all B2C, B2B EV Businesses"
        />
        <RightFormSection
          data={data}
          selected={selected}
          setSelected={setSelected}
          buttonText="Become a partner"
          labelText="Participating into pilot as"
        />
        <ChatIcon />
      </div>
    </div>
  );
};

export default SmartPilot;
