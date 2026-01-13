import React from "react";
import UserCard from "./UserCard";
import Shimmer from "./Shimmer";

const UserList = () => {
  return (
    <div className="pt-2">
      {/* <Shimmer /> */}

      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
    </div>
  );
};

export default UserList;
