import React from "react";
import facebook from "../../assets/images/facebookwhite.svg";
import twitter from "../../assets/images/twitterwhite.svg";
import instagram from "../../assets/images/instagramwhite.svg";
import linkedin from "../../assets/images/linkedinwhite.svg";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="w-full h-max bg-secondary px-48 py-32">
        <div className="w-full h-footer flex">
          <div id="left-section" className="w-1/3 flex flex-col">
            <div className="flex flex-col mb-28">
              <h1 className="text-7xl font-bold text-primary mb-4">
                Let's talk
              </h1>
              <h3 className="text-4xl text-primary">Connect@Echarge.com</h3>
            </div>
            <div className="flex flex-col mb-14">
              <p className="text-xl text-primary mb-2">Locate us</p>
              <h3 className="text-4xl text-primary">
                S.No-3/3, Padmalaya
                <br /> Park, Punawale,
                <br /> Pune-411033{" "}
              </h3>
            </div>
            <div className="flex mt-8">
              <div className="h-12 w-12 rounded-full flex justify-center items-center border-2 mr-4 border-primary cursor-pointer">
                <a href="/" className="h-5 w-5">
                  <img src={facebook} className="h-5 w-5"></img>
                </a>
              </div>
              <div className="h-12 w-12 rounded-full flex justify-center items-center border-2 mr-4 border-primary cursor-pointer">
                <a href="/">
                  <img src={twitter} className="h-5 w-5 text-primary"></img>
                </a>
              </div>
              <div className="h-12 w-12 rounded-full flex justify-center items-center border-2 mr-4 border-primary cursor-pointer">
                <a href="/">
                  <img src={instagram} className="h-5 w-5"></img>
                </a>
              </div>
              <div className="h-12 w-12 rounded-full flex justify-center items-center border-2 mr-4 border-primary cursor-pointer">
                <a href="/">
                  <img src={linkedin} className="h-5 w-5"></img>
                </a>
              </div>
            </div>
          </div>
          <div id="right-section w-2/3">
            <div className="flex w-full">
              <div className="flex flex-col ml-36">
                <h1 className="text-lg text-primary mb-2">Echarge</h1>
                <a
                  id="home"
                  className="menu-item text-primary font-semibold text-xl my-1"
                  href="/"
                >
                  About
                </a>
                <a
                  id="about"
                  className="menu-item text-primary font-semibold text-xl my-1"
                  href="/"
                >
                  Team
                </a>
                <a
                  id="contact"
                  className="menu-item text-primary font-semibold text-xl my-1"
                  href="/"
                >
                  Hirings
                </a>
                <a
                  id="contact"
                  className="menu-item text-primary font-semibold text-xl my-1"
                  href="/"
                >
                  Newsletter
                </a>
                <a
                  id="contact"
                  className="menu-item text-primary font-semibold text-xl my-1"
                  href="/"
                >
                  Contact us
                </a>
              </div>
              <div className="flex flex-col ml-36">
                <h1 className="text-lg text-primary mb-2">Join</h1>
                <a
                  id="home"
                  className="menu-item text-primary font-semibold text-xl my-1"
                  href="/be_alpha"
                >
                  Alpha release
                </a>
                <a
                  id="about"
                  className="menu-item text-primary font-semibold text-xl my-1"
                  href="/become_smartpilot"
                >
                  Become a partner
                </a>
                <a
                  id="contact"
                  className="menu-item text-primary font-semibold text-xl my-1"
                  href="/become_investor"
                >
                  Become an investor
                </a>
              </div>
              <div className="flex flex-col ml-36">
                <h1 className="text-lg text-primary mb-2">Support</h1>
                <a
                  id="home"
                  className="menu-item text-primary font-semibold text-xl my-1"
                  href="/"
                >
                  Site map
                </a>
                <a
                  id="about"
                  className="menu-item text-primary font-semibold text-xl my-1"
                  href="/"
                >
                  Terms and Conditions
                </a>
                <a
                  id="contact"
                  className="menu-item text-primary font-semibold text-xl my-1"
                  href="/"
                >
                  Cookie policy
                </a>
                <a
                  id="contact"
                  className="menu-item text-primary font-semibold text-xl my-1"
                  href="/"
                >
                  Help
                </a>
              </div>
            </div>
            <div className="ml-36 mt-72">
              <p className="text-2xl text-primary">
                Designed with love & same passion{" "}
                <span className="ml-48">&copy;2021</span>
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
