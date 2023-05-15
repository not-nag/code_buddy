import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserAuth = ({ children }) => {
  const [user, setUser] = useState(false);
  const [displayId, setDisplayId] = useState("");
  const [displayPass, setDisplayPass] = useState("");

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        displayId,
        setDisplayId,
        displayPass,
        setDisplayPass,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
