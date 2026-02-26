import { createContext, useState } from "react";
import React from "react";

export const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const [userName, setUserName] = useState(
    () => localStorage.getItem("userName") || "",
  );
  const value = {
    userName,
    setUserName,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
export default UserContextProvider;
