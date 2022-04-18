import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 50,
      disable: "mobile",
    });
  }, []);

  return (
    <div className="w-full" id="about">
      <div className="w-full h-max 2xl:px-48 lg:px-36 pl-10 pr-16">
        <div className="w-full h-max 2xl:my-32 lg:my-20 my-14">
          <h4 className="2xl:text-xl lg:text-sm text-sm mb-2 text-sectionHeadText font-semibold opacity-70">
            About
          </h4>
          <p className="2xl:text-4xl lg:text-2xl text-xl text-sectionParaText font-semibold">
            <span className="text-secondary font-semibold">Supervolt</span> is
            India's first (SaaS) collaborative EV platform propelled by a
            mission of creating a sustainable business for EV owners &
            stakeholders while equally taking care of the environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
