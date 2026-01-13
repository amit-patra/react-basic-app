import React from "react";
import ToggleTheme from "./ToggleTheme";

const Header = () => {
  return (
    <div className="flex bg-gray-100 p-2 justify-between">
      <h1 className="font-bold mt-2">User Management DashBoard</h1>
      <ToggleTheme />
    </div>
  );
};

export default Header;
