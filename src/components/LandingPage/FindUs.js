import React from "react";
import FindUsCard from "./Cards/FindUsCard";

const FindUs = () => {
  return (
    <div className="w-full">
      <div className="w-full h-max px-48">
        <div className="w-full h-max mb-20">
          <h4 className="text-xl mb-2 text-sectionHeadText">
            Find us interesting ?
          </h4>
          <p className="text-7xl text-sectionParaText">
            We are on a constant search of <br /> EV enthusiast like you
          </p>
        </div>
        <div className="w-full h-96 bg-secondary rounded-lg mb-10">
          <FindUsCard
            head="Be a part of alpha release"
            text="Join our discord community to get earlybird benefits"
            buttonText="Join the community"
            link="/be_alpha"
          />
        </div>
        <div className="w-full h-max flex ">
          <div className="w-1/2 h-96 mr-5 bg-secondary rounded-lg">
            <FindUsCard
              head="Be a part of smart pilot "
              text="Accelerate your business with sustainable channels"
              buttonText="Become a partner"
              link="become_smartpilot"
            />
          </div>
          <div className="w-1/2 h-96 ml-5 bg-secondary rounded-lg">
            <FindUsCard
              head="Become an investor"
              text="We are looking for an EV enthusiast like you"
              buttonText="Make an offer"
              link="become_investor"
            />
          </div>
        </div>
        <div className="flex w-full h-max my-60">
          <h1 className="text-sectionParaText text-5xl w-1/2 pr-20 mr-10">
            Till the time our development team clear the bugs subscribe to our
            EV newsletter
          </h1>
          <div className="flex flex-col w-1/2 px-10">
            <input
              type="text"
              placeholder="Enter your mail ID here "
              className="h-14 w-full px-4 text-lg py-0 border-2 text-black border-borderColor rounded-lg mb-5"
            />
            <a
              href="/"
              className="h-14 w-80 text-center bg-secondary font-semibold text-primary rounded-lg pt-3.5 text-lg"
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
