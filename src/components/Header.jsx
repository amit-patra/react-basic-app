import React, { useContext } from "react";
import { ThemeContext } from "../utils/ThemeContext";
// import ToggleTheme from "./ToggleTheme";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="flex bg-gray-100 p-2 justify-between dark:bg-black dark:border dark:border-b-gray-600">
      <h1 className="font-bold mt-2 dark:text-white">
        User Management DashBoard
      </h1>
      {/* <ToggleTheme /> */}
      <button
        className="bg-white border border-black p-2 cursor-pointer  rounded-md dark:text-white dark:bg-black dark:border-gray-500"
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Header;
