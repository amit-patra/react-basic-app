import React, { useEffect, useRef } from "react";

const Searchbar = () => {
  const searchText = useRef("");

  useEffect(() => {
    searchText?.current?.focus();
  }, []);

  const searchHandle = (e) => {
    const searchVal = searchText?.current?.value;
    e.preventDefault();

    if (!searchVal) return;
    console.log(searchVal);
  };

  return (
    <div className="relative pb-1">
      <form onSubmit={searchHandle}>
        {/* Search Icon */}
        <svg
          className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3a7.5 7.5 0 006.15 13.65z"
          />
        </svg>

        {/* Input */}
        <input
          className="w-full bg-white border border-gray-400 p-1 pl-8 rounded-md focus:outline-none dark:bg-black dark:placeholder-white dark:border-gray-700 dark:text-white"
          type="text"
          ref={searchText}
          placeholder="Search User..."
        />
      </form>
    </div>
  );
};

export default Searchbar;
