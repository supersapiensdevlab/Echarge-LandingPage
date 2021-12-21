import React from "react";
import logo from "../../assets/images/dbeats-logo.png";

const Navbar = () => {
  return (
    <div className="w-full h-24 bg-primary px-10">
      <div className="w-full flex justify-between items-center h-full">
        <img src={logo} className="h-20 w-20"></img>
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 mx-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 mx-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
