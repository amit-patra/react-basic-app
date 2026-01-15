import React from "react";
import UserCard from "./UserCard";
import Shimmer from "./Shimmer";
import useUserList from "../hooks/useUserList";

const UserList = () => {
  const userList = useUserList();
  if (!userList.length) return <Shimmer />;
  return (
    <div className="pt-2">
      {userList.map((userData) => (
        <UserCard key={userData.id} userData={userData} />
      ))}
    </div>
  );
};

export default UserList;
