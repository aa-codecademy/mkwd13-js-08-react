import React, { createContext, useState } from "react";

interface AuthContext {
  isLoggedIn: boolean;
  user_fullname: string;
  user_avatar: string;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

const defaultAuthContext: AuthContext = {
  isLoggedIn: false,
  user_fullname: "",
  user_avatar: "",
  setIsLoggedIn: (isLoggedIn: boolean) => {},
};

export const AuthContext = createContext(defaultAuthContext);

interface AuthContextProviderProps {
  children: React.ReactNode;
}
export const AuthContextProvider = (props: AuthContextProviderProps) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const setIsLoggedIn = (isLoggedIn: boolean) => {
    setLoggedIn(isLoggedIn);
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: false,
        user_fullname: "Bob Bobski",
        user_avatar: "",
        setIsLoggedIn,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
