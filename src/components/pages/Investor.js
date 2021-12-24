import React, { useState } from "react";
import ChatIcon from "../Chat/ChatIcon";
import LeftSection from "./Sections/LeftSection";
import RightFormSection from "./Sections/RightFormSection";

const Investor = () => {
  const data = [
    "Angel (Seed round)",
    "Angel (Seed round)",
    "Angel (Seed round)",
  ];
  const [selected, setSelected] = useState(data[0]);

  return (
    <div className="w-full">
      <div className="w-full h-release px-36 flex">
        <LeftSection
          head="Become an investor"
          text="Accelerate your business with sustainable channels"
          pt1="Be a part of future EV platform! "
          pt2="Free access to EV tokenomic pool"
          pt3="Exclusive platform benefits"
        />
        <RightFormSection
          data={data}
          selected={selected}
          setSelected={setSelected}
          buttonText="Become an investor"
          labelText="Investment role"
        />
        <ChatIcon />
      </div>
    </div>
  );
};

export default Investor;
