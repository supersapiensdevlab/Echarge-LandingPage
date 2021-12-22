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
    <div className="w-full h-24 bg-primary px-16">
      <div className="w-full flex justify-between items-center h-full">
        <img src={logo} className="h-16 w-16"></img>
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 mr-7"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>{" "}
          <div className="h-7 w-7">
            <Menu
              right
              customBurgerIcon={<img src={menu} />}
              width={"360px"}
              isOpen={showOpen}
              onStateChange={isMenuOpen}
              className={`bg-primary text-secondary -mt-20`}
            >
              <img
                src={close}
                className="h-7 w-7 cursor-pointer absolute right-10 -mt-16"
                onClick={handleClose}
              ></img>
              <div className="w-full px-10">
                <div className="w-full mt-28 flex flex-col">
                  <h1 className="text-lg text-sectionHeadText mb-2">Echarge</h1>
                  <a
                    id="home"
                    className="menu-item text-sectionParaText font-semibold text-xl my-0.5"
                    href="/"
                  >
                    About
                  </a>
                  <a
                    id="about"
                    className="menu-item text-sectionParaText font-semibold text-xl my-0.5"
                    href="/"
                  >
                    Team
                  </a>
                  <a
                    id="contact"
                    className="menu-item text-sectionParaText font-semibold text-xl my-0.5"
                    href="/"
                  >
                    Hirings
                  </a>
                  <a
                    id="contact"
                    className="menu-item text-sectionParaText font-semibold text-xl my-0.5"
                    href="/"
                  >
                    Newsletter
                  </a>
                  <a
                    id="contact"
                    className="menu-item text-sectionParaText font-semibold text-xl my-0.5"
                    href="/"
                  >
                    Contact us
                  </a>
                </div>
                <div className="w-full mt-12 flex flex-col">
                  <h1 className="text-lg text-sectionHeadText mb-2">Join</h1>
                  <a
                    id="home"
                    className="menu-item text-sectionParaText font-semibold text-xl my-0.5"
                    href="/"
                  >
                    Alpha release
                  </a>
                  <a
                    id="about"
                    className="menu-item text-sectionParaText font-semibold text-xl my-0.5"
                    href="/"
                  >
                    Become a partner
                  </a>
                  <a
                    id="contact"
                    className="menu-item text-sectionParaText font-semibold text-xl my-0.5"
                    href="/"
                  >
                    Become an investor
                  </a>
                </div>
                <div className="w-full mt-12 flex flex-col">
                  <h1 className="text-lg text-sectionHeadText mb-2">Support</h1>
                  <a
                    id="home"
                    className="menu-item text-sectionParaText font-semibold text-xl my-0.5"
                    href="/"
                  >
                    Site map
                  </a>
                  <a
                    id="about"
                    className="menu-item text-sectionParaText font-semibold text-xl my-0.5"
                    href="/"
                  >
                    Terms and Conditions
                  </a>
                  <a
                    id="contact"
                    className="menu-item text-sectionParaText font-semibold text-xl my-0.5"
                    href="/"
                  >
                    Cookie policy
                  </a>
                  <a
                    id="contact"
                    className="menu-item text-sectionParaText font-semibold text-xl my-0.5"
                    href="/"
                  >
                    Help
                  </a>
                </div>
                <div className="flex mt-8">
                  <div className="h-12 w-12 rounded-full flex justify-center items-center border-2 mr-2 border-borderColor cursor-pointer">
                    <a href="/">
                      <img src={facebook} className="h-5 w-5"></img>
                    </a>
                  </div>
                  <div className="h-12 w-12 rounded-full flex justify-center items-center border-2 mr-2 border-borderColor cursor-pointer">
                    <a href="/">
                      <img src={twitter} className="h-5 w-5"></img>
                    </a>
                  </div>
                  <div className="h-12 w-12 rounded-full flex justify-center items-center border-2 mr-2 border-borderColor cursor-pointer">
                    <a href="/">
                      <img src={instagram} className="h-5 w-5"></img>
                    </a>
                  </div>
                  <div className="h-12 w-12 rounded-full flex justify-center items-center border-2 mr-2 border-borderColor cursor-pointer">
                    <a href="/">
                      <img src={linkedin} className="h-5 w-5"></img>
                    </a>
                  </div>
                </div>
                <div className="mt-8">
                  <p className="text-md text-sectionParaText">
                    Designed with love & same passion <br />
                    &copy; 2021
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
