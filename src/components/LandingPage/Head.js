import React from "react";

const Head = () => {
  return (
    <div className="w-full h-head bg-secondary ">
      <div className="w-full h-full flex flex-col justify-center items-center px-20">
        <p className="text-8xl text-primary">
          Find the most compatible charging <br /> location for your electric
          vehicle <br />
          with optimized mapping
        </p>
        <div className="flex flex-col items-center absolute bottom-28">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-primary"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-primary mt-8 text-xl">Scroll down</p>
        </div>
        <div className="h-20 w-20 fixed bottom-5 right-28 bg-white flex justify-center items-center rounded-full shadow-lg shadow-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-secondary"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
            <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Head;
