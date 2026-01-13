import React from "react";

const UserCard = () => {
  return (
    <div className="w-full p-2 bg-gray-200 rounded-md flex mt-2 dark:bg-gray-800">
      <span className="text-4xl pr-2 shadow-[0_0_0_1px_rgba(255,255,255,0.08)">
        🙎‍♂️
      </span>
      {/* <span className="text-4xl pr-2 shadow-[0_0_0_1px_rgba(255,255,255,0.08)">
        👩‍🦰
      </span> */}
      <div className="dark:text-white">
        <h1 className="font-bold text-1xl w-full ">Amit Patra</h1>
        <p className="w-full text-sm">Frontend Lead</p>
      </div>
    </div>
  );
};

export default UserCard;
