import React from "react";
import facebook from "../../assets/images/facebookwhite.svg";
import twitter from "../../assets/images/twitterwhite.svg";
import instagram from "../../assets/images/instagramwhite.svg";
import linkedin from "../../assets/images/linkedinwhite.svg";

const Footer = () => {
  return (
    <div className="w-full">
      <div
        id="footer"
        className="w-full h-max bg-secondary 2xl:px-48 lg:px-36 px-10 2xl:py-32 lg:py-16 py-10"
      >
        <div className="w-full lg:h-96 2xl:h-footer flex flex-col md:flex-row">
          <div id="left-section" className="md:w-1/3 w-full flex flex-col">
            <div className="flex flex-col 2xl:mb-28 lg:mb-14 mb-8">
              <h1 className="2xl:text-7xl lg:text-5xl text-4xl font-bold text-primary 2xl:mb-4 lg:mb-2 mb-2">
                Let's talk
              </h1>
              <h3 className="2xl:text-4xl lg:text-2xl text-2xl text-primary">
                Connect@Echarge.com
              </h3>
            </div>
            <div className="flex flex-col 2xl:mb-14 lg:mb-7 mb-8">
              <p className="2xl:text-xl lg:text-sm text-md text-primary 2xl:mb-2 lg:mb-1 mb-2">
                Locate us
              </p>
              <h3 className="2xl:text-4xl lg:text-2xl text-2xl text-primary">
                S.No-3/3, Padmalaya
                <br /> Park, Punawale,
                <br /> Pune-411033{" "}
              </h3>
            </div>
            <div className="flex 2xl:mt-8 lg:mt-4">
              <div className="2xl:h-12 2xl:w-12 lg:h-9 lg:w-9 rounded-full flex justify-center items-center 2xl:border-2 lg:border 2xl:mr-4 lg:mr-2 border-primary cursor-pointer">
                <a href="/" className="2xl:h-5 2xl:w-5 lg:w-4 lg:h-4">
                  <img
                    src={facebook}
                    className="2xl:h-5 2xl:w-5 lg:w-4 lg:h-4"
                  ></img>
                </a>
              </div>
              <div className="2xl:h-12 2xl:w-12 lg:h-9 lg:w-9 rounded-full flex justify-center items-center 2xl:border-2 lg:border 2xl:mr-4 lg:mr-2 border-primary cursor-pointer">
                <a href="/">
                  <img
                    src={twitter}
                    className="2xl:h-5 2xl:w-5 lg:w-4 lg:h-4 "
                  ></img>
                </a>
              </div>
              <div className="2xl:h-12 2xl:w-12 lg:h-9 lg:w-9 rounded-full flex justify-center items-center 2xl:border-2 lg:border 2xl:mr-4 lg:mr-2 border-primary cursor-pointer">
                <a href="/">
                  <img
                    src={instagram}
                    className="2xl:h-5 2xl:w-5 lg:w-4 lg:h-4"
                  ></img>
                </a>
              </div>
              <div className="2xl:h-12 2xl:w-12 lg:h-9 lg:w-9 rounded-full flex justify-center items-center 2xl:border-2 lg:border 2xl:mr-4 lg:mr-2 border-primary cursor-pointer">
                <a href="/">
                  <img
                    src={linkedin}
                    className="2xl:h-5 2xl:w-5 lg:w-4 lg:h-4"
                  ></img>
                </a>
              </div>
            </div>
          </div>
          <div id="right-section md:w-2/3 w-full">
            <div className="flex flex-col md:flex-row w-full">
              <div className="flex flex-col 2xl:ml-36 lg:ml-40 md:ml-16 mb-8 md:mb-0">
                <h1 className="2xl:text-lg lg:text-xs text-md text-primary 2xl:mb-2 lg:mb-1 mb-1">
                  Echarge
                </h1>
                <a
                  id="home"
                  className="menu-item text-primary font-semibold 2xl:text-xl lg:text-sm 2xl:my-1 lg:my-0.5 my-0.5"
                  href="/"
                >
                  About
                </a>
                <a
                  id="about"
                  className="menu-item text-primary font-semibold 2xl:text-xl lg:text-sm 2xl:my-1 lg:my-0.5 my-0.5"
                  href="/"
                >
                  Team
                </a>
                <a
                  id="contact"
                  className="menu-item text-primary font-semibold 2xl:text-xl lg:text-sm 2xl:my-1 lg:my-0.5 my-0.5"
                  href="/"
                >
                  Hirings
                </a>
                <a
                  id="contact"
                  className="menu-item text-primary font-semibold 2xl:text-xl lg:text-sm 2xl:my-1 lg:my-0.5 my-0.5"
                  href="/"
                >
                  Newsletter
                </a>
                <a
                  id="contact"
                  className="menu-item text-primary font-semibold 2xl:text-xl lg:text-sm 2xl:my-1 lg:my-0.5 my-0.5"
                  href="/"
                >
                  Contact us
                </a>
              </div>
              <div className="flex flex-col 2xl:ml-36 lg:ml-20 md:ml-7 mb-8 md:mb-0">
                <h1 className="2xl:text-lg lg:text-xs text-md text-primary 2xl:mb-2 lg:mb-1 mb-1">
                  Join
                </h1>
                <a
                  id="home"
                  className="menu-item text-primary font-semibold 2xl:text-xl lg:text-sm 2xl:my-1 lg:my-0.5 my-0.5"
                  href="/be_alpha"
                >
                  Alpha release
                </a>
                <a
                  id="about"
                  className="menu-item text-primary font-semibold 2xl:text-xl lg:text-sm 2xl:my-1 lg:my-0.5 my-0.5"
                  href="/become_smartpilot"
                >
                  Become a partner
                </a>
                <a
                  id="contact"
                  className="menu-item text-primary font-semibold 2xl:text-xl lg:text-sm 2xl:my-1 lg:my-0.5 my-0.5"
                  href="/become_investor"
                >
                  Become an investor
                </a>
              </div>
              <div className="flex flex-col 2xl:ml-36 lg:ml-20 md:ml-4">
                <h1 className="2xl:text-lg lg:text-xs text-md text-primary 2xl:mb-2 lg:mb-1 mb-1">
                  Support
                </h1>
                <a
                  id="home"
                  className="menu-item text-primary font-semibold 2xl:text-xl lg:text-sm 2xl:my-1 lg:my-0.5 my-0.5"
                  href="/"
                >
                  Sitemap
                </a>
                <a
                  id="about"
                  className="menu-item text-primary font-semibold 2xl:text-xl lg:text-sm 2xl:my-1 lg:my-0.5 my-0.5"
                  href="/"
                >
                  Terms and Conditions
                </a>
                <a
                  id="contact"
                  className="menu-item text-primary font-semibold 2xl:text-xl lg:text-sm 2xl:my-1 lg:my-0.5 my-0.5"
                  href="/"
                >
                  Cookie policy
                </a>
                <a
                  id="contact"
                  className="menu-item text-primary font-semibold 2xl:text-xl lg:text-sm 2xl:my-1 lg:my-0.5 my-0.5"
                  href="/"
                >
                  Help
                </a>
              </div>
              <div className="flex  mt-6 block md:hidden">
                <div className="2xl:h-12 2xl:w-12 lg:h-9 lg:w-9 h-9 w-9 rounded-full flex justify-center items-center 2xl:border-2 lg:border border 2xl:mr-4 lg:mr-2 mr-2 border-primary cursor-pointer">
                  <a href="/" className="2xl:h-5 2xl:w-5 lg:w-4 lg:h-4 h-3 w-3">
                    <img
                      src={facebook}
                      className="2xl:h-5 2xl:w-5 lg:w-4 lg:h-4 h-4 w-4"
                    ></img>
                  </a>
                </div>
                <div className="2xl:h-12 2xl:w-12 lg:h-9 lg:w-9 h-9 w-9 rounded-full flex justify-center items-center 2xl:border-2 lg:border border 2xl:mr-4 lg:mr-2 mr-2 border-primary cursor-pointer">
                  <a href="/">
                    <img
                      src={twitter}
                      className="2xl:h-5 2xl:w-5 lg:w-4 lg:h-4 h-4 w-4 "
                    ></img>
                  </a>
                </div>
                <div className="2xl:h-12 2xl:w-12 lg:h-9 lg:w-9 h-9 w-9 rounded-full flex justify-center items-center 2xl:border-2 lg:border border 2xl:mr-4 lg:mr-2 mr-2 border-primary cursor-pointer">
                  <a href="/">
                    <img
                      src={instagram}
                      className="2xl:h-5 2xl:w-5 lg:w-4 lg:h-4 h-4 w-4"
                    ></img>
                  </a>
                </div>
                <div className="2xl:h-12 2xl:w-12 lg:h-9 lg:w-9 h-9 w-9 rounded-full flex justify-center items-center 2xl:border-2 lg:border border 2xl:mr-4 lg:mr-2 mr-2 border-primary cursor-pointer">
                  <a href="/">
                    <img
                      src={linkedin}
                      className="2xl:h-5 2xl:w-5 lg:w-4 lg:h-4 h-4 w-4"
                    ></img>
                  </a>
                </div>
              </div>
            </div>
            <div className="2xl:ml-36 lg:ml-40 md:ml-16 2xl:mt-72 lg:mt-44 mt-6">
              <p className="2xl:text-2xl lg:text-md text-primary">
                Designed with love & same passion{" "}
                <span className="2xl:ml-48 lg:ml-24 md:ml-4">&copy;2021</span>
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
