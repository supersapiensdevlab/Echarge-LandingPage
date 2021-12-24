import React from "react";
import HowItsDone from "./HowItsDone";

const About = () => {
  return (
    <div className="w-full" id="about">
      <div className="w-full h-max px-48">
        <div className="w-full h-max my-32">
          <h4 className="text-xl mb-2 text-sectionHeadText">About</h4>
          <p className="text-4xl text-sectionParaText font-semibold">
            <span className="text-secondary font-semibold">E charge</span> is
            India's (SaaS) collaborative EV platform propelled by a mission of
            creating a sustainable business for EV owners & stakeholders while
            equally taking care of the environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
