import { useEffect, useState } from "react";
import { USER_API } from "../utils/constant";

const useUserList = () => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = async () => {
    const data = await fetch(USER_API);
    const json = await data.json();
    setUserList(json);
  };
  return userList;
};

export default useUserList;
