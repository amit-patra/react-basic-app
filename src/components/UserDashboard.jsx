import React from "react";
import Header from "./Header";
import Searchbar from "./Searchbar";
import UserList from "./UserList";
import Footer from "./Footer";

const UserDashboard = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="h-auto bg-gray-50 w-1/2 rounded-sm shadow-[0_0_0_1px_rgba(255,255,255,0.08) dark:bg-black">
        <Header />
        <div className="p-5 bg-white dark:bg-black">
          <Searchbar />
          <UserList />
        </div>
        <div className="mt-2 p-5">
          <hr className="border-gray-300 border dark:border-b-gray-950" />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
