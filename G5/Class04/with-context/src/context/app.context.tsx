import { createContext, useState, useContext } from "react";
import React from "react";
import { AuthContext } from "./auth.context";

// 1. Define the structure of the context
interface AppContext {
  title: string;
  handleChangeTitle: (value: string) => void;
}

// 2. Create default values for the context
const defaultContext: AppContext = {
  title: "",
  handleChangeTitle: (value: string) => {},
};

// 3. Create the context using the default values
export const AppContext = createContext(defaultContext);

// 4. Create Context provider / Wrapper component
// Will wrap the component that can use the context
interface AppContextProviderProps {
  children: React.ReactNode;
}
export const AppContextProvider = (props: AppContextProviderProps) => {
  const { children } = props;
  const [title, setTitle] = useState("ComponentC");
  const authContext = useContext(AuthContext);
  console.log("Auth context in AppContextProvider:", authContext);

  const handleChangeTitle = (value: string) => {
    setTitle(value);
  };

  return (
    <AppContext.Provider
      value={{ title: title, handleChangeTitle: handleChangeTitle }}
    >
      {children}
    </AppContext.Provider>
  );
};
