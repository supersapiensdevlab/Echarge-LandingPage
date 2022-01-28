import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import menu from "../../assets/images/menu.svg";
import close from "../../assets/images/close.svg";
import facebook from "../../assets/images/facebook-f-brands.svg";
import twitter from "../../assets/images/twitter-brands.svg";
import instagram from "../../assets/images/instagram-brands.svg";
import linkedin from "../../assets/images/linkedin-brands.svg";
import { slide as Menu } from "react-burger-menu";

const Navbar = () => {
  const [showOpen, setOnOpen] = useState(false);

  const handleOnOpen = () => setOnOpen(true);
  const isMenuOpen = (state) => setOnOpen(state.isOpen);

  function handleClose() {
    setOnOpen(false);
  }

  return (
    <div className="w-full 2xl:h-32 lg:h-20 h-20 bg-primary 2xl:px-36 lg:px-20 px-8">
      <div className="w-full flex justify-between items-center h-full">
        <a href="/">
          <img
            src={logo}
            className="2xl:h-14 2xl:w-14 lg:h-10 lg:w-10 h-10 w-10"
          ></img>
        </a>
        <div className="flex mr-2 md:mr-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="2xl:h-7 2xl:w-7 lg:h-5 lg:w-5 h-6 w-6 2xl:mr-12 lg:mr-6 mr-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>{" "}
          <div className="2xl:h-7 2xl:w-7 lg:h-5 lg:w-5 h-6 w-6">
            <Menu
              right={true}
              customBurgerIcon={<img src={menu} />}
              width={window.innerWidth >= "1536" ? "475px" : "340px"}
              isOpen={showOpen}
              onStateChange={isMenuOpen}
              className={`bg-primary text-secondary 2xl:-mt-20 lg:-mt-12 -mt-10`}
            >
              <img
                src={close}
                className="2xl:h-7 2xl:w-7 lg:h-5 lg:w-5 h-6 w-6 cursor-pointer absolute md:right-10 right-7 md:-mt-16 -mt-7"
                onClick={handleClose}
              ></img>
              <div className="w-full 2xl:pl-10 lg:pl-6 pl-6">
                <div className="w-full lg:mt-24 2xl:mt-28 mt-10 flex flex-col">
                  <h1 className="2xl:text-lg lg:text-xs text-md text-sectionHeadText 2xl:mb-2 lg:mb-1">
                    Echarge
                  </h1>
                  <a
                    id="home"
                    className="menu-item text-sectionParaText font-semibold 2xl:text-xl lg:text-sm text-lg 2xl:my-0.5 lg:my-0.25 my-0.5"
                    href="/"
                  >
                    About
                  </a>
                  <a
                    id="about"
                    className="menu-item text-sectionParaText font-semibold 2xl:text-xl lg:text-sm text-lg 2xl:my-0.5 lg:my-0.25 my-0.5"
                    href="/"
                  >
                    Team
                  </a>
                  <a
                    id="contact"
                    className="menu-item text-sectionParaText font-semibold 2xl:text-xl lg:text-sm text-lg 2xl:my-0.5 lg:my-0.25 my-0.5"
                    href="/"
                  >
                    Hirings
                  </a>
                  <a
                    id="contact"
                    className="menu-item text-sectionParaText font-semibold 2xl:text-xl lg:text-sm text-lg 2xl:my-0.5 lg:my-0.25 my-0.5"
                    href="/"
                  >
                    Newsletter
                  </a>
                  <a
                    id="contact"
                    className="menu-item text-sectionParaText font-semibold 2xl:text-xl lg:text-sm text-lg 2xl:my-0.5 lg:my-0.25 my-0.5"
                    href="/"
                  >
                    Contact us
                  </a>
                </div>
                <div className="w-full 2xl:mt-12 lg:mt-6 mt-3 flex flex-col">
                  <h1 className="2xl:text-lg lg:text-xs text-md text-sectionHeadText 2xl:mb-2 lg:mb-1">
                    Join
                  </h1>
                  <a
                    id="home"
                    className="menu-item text-sectionParaText font-semibold 2xl:text-xl lg:text-sm text-lg 2xl:my-0.5 lg:my-0.25 my-0.5"
                    href="/become_alpha"
                  >
                    Alpha release
                  </a>
                  <a
                    id="about"
                    className="menu-item text-sectionParaText font-semibold 2xl:text-xl lg:text-sm text-lg 2xl:my-0.5 lg:my-0.25 my-0.5"
                    href="/become_smartpilot"
                  >
                    Become a partner
                  </a>
                  <a
                    id="contact"
                    className="menu-item text-sectionParaText font-semibold 2xl:text-xl lg:text-sm text-lg 2xl:my-0.5 lg:my-0.25 my-0.5"
                    href="/become_investor"
                  >
                    Become an investor
                  </a>
                </div>
                <div className="w-full 2xl:mt-12 lg:mt-6 mt-3 flex flex-col">
                  <h1 className="2xl:text-lg lg:text-xs text-md text-sectionHeadText 2xl:mb-2 lg:mb-1">
                    Support
                  </h1>
                  <a
                    id="home"
                    className="menu-item text-sectionParaText font-semibold 2xl:text-xl lg:text-sm text-lg 2xl:my-0.5 lg:my-0.25 my-0.5"
                    href="/"
                  >
                    Sitemap
                  </a>
                  <a
                    id="about"
                    className="menu-item text-sectionParaText font-semibold 2xl:text-xl lg:text-sm text-lg 2xl:my-0.5 lg:my-0.25 my-0.5"
                    href="/"
                  >
                    Terms and Conditions
                  </a>
                  <a
                    id="contact"
                    className="menu-item text-sectionParaText font-semibold 2xl:text-xl lg:text-sm text-lg 2xl:my-0.5 lg:my-0.25 my-0.5"
                    href="/"
                  >
                    Cookie policy
                  </a>
                  <a
                    id="contact"
                    className="menu-item text-sectionParaText font-semibold 2xl:text-xl lg:text-sm text-lg 2xl:my-0.5 lg:my-0.25 my-0.5"
                    href="/"
                  >
                    Help
                  </a>
                </div>
                <div className="flex 2xl:mt-8 lg:mt-5 mt-3">
                  <div className="2xl:h-12 2xl:w-12 lg:h-8 lg:w-8 h-8 w-8 rounded-full flex justify-center items-center 2xl:border-2 lg:border border mr-2 border-borderColor cursor-pointer">
                    <a href="/">
                      <img
                        src={facebook}
                        className="2xl:h-5 2xl:w-5 lg:h-4 lg:w-4 h-4 w-4"
                      ></img>
                    </a>
                  </div>
                  <div className="2xl:h-12 2xl:w-12 lg:h-8 lg:w-8 h-8 w-8 border rounded-full flex justify-center items-center 2xl:border-2 lg:border mr-2 border-borderColor cursor-pointer">
                    <a href="/">
                      <img
                        src={twitter}
                        className="2xl:h-5 2xl:w-5 lg:h-4 lg:w-4 h-4 w-4"
                      ></img>
                    </a>
                  </div>
                  <div className="2xl:h-12 2xl:w-12 lg:h-8 lg:w-8 h-8 w-8 border rounded-full flex justify-center items-center 2xl:border-2 lg:border mr-2 border-borderColor cursor-pointer">
                    <a href="/">
                      <img
                        src={instagram}
                        className="2xl:h-5 2xl:w-5 lg:h-4 lg:w-4 h-4 w-4"
                      ></img>
                    </a>
                  </div>
                  <div className="2xl:h-12 2xl:w-12 lg:h-8 lg:w-8 h-8 w-8 border rounded-full flex justify-center items-center 2xl:border-2 lg:border mr-2 border-borderColor cursor-pointer">
                    <a href="/">
                      <img
                        src={linkedin}
                        className="2xl:h-5 2xl:w-5 lg:h-4 lg:w-4 h-4 w-4"
                      ></img>
                    </a>
                  </div>
                </div>
                <div className="2xl:mt-8 lg:mt-5 mt-3">
                  <p className="2xl:text-lg lg:text-xs text-xs text-sectionParaText">
                    Designed with love & same passion <br />
                    &copy;2021
                  </p>
                </div>
              </div>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
