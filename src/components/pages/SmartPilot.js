import React, { useState } from "react";
import LeftSection from "./Sections/LeftSection";
import RightFormSection from "./Sections/RightFormSection";

const SmartPilot = () => {
  const data = [
    "EV charger supplier",
    "EV charger supplier",
    "EV charger supplier",
  ];
  const [selected, setSelected] = useState(data[0]);

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
        <RightFormSection
          data={data}
          selected={selected}
          setSelected={setSelected}
          buttonText="Become a partner"
          labelText="Participating into pilot as"
        />
      </div>
    </div>
  );
};

export default SmartPilot;
