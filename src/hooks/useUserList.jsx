import { useEffect, useState } from "react";
import { USERS_URL } from "../utils/constant";

const useUserList = () => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = async () => {
    const data = await fetch(USERS_URL);
    const json = await data.json();
    setUserList(json);
  };
  return userList;
};

export default useUserList;
