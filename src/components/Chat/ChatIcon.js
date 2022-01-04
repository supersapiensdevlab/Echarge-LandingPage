import React from "react";

const ChatIcon = () => {
  return (
    <div className="2xl:h-20 2xl:w-20 lg:h-14 lg:w-14 fixed 2xl:bottom-5 lg:bottom-3 2xl:right-28 lg:right-24 bg-white flex justify-center z-10 items-center rounded-full shadow-md shadow-gray-900">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="2xl:h-10 2xl:w-10 lg:h-7 lg:w-7 text-secondary"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
        <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
      </svg>
    </div>
  );
};

export default ChatIcon;
