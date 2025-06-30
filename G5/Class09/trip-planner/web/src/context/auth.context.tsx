import { createContext, type ReactNode, useState } from "react";
import type { User } from "../types/auth.type";
import { useNavigate } from "react-router-dom";

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType // Todo: Maybe add the default values
);

interface AuthProviderProps {
  children: ReactNode;
}
export const AuthContextProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, password: string): Promise<void> => {
    console.log(email, password);
    setUser({
      email: email,
      name: "John Doe",
      id: "1",
    });

    navigate("/trips");
    // TODO: PERFORM LOGIN API REQUEST HERE
  };

  const register = async (
    email: string,
    password: string,
    name: string
  ): Promise<void> => {
    console.log(email, password, name);

    // TODO: PERFORM REGISTER API REQUEST HERE
  };

  const logout = async (): Promise<void> => {
    console.log("logout");

    setUser(null);
    navigate("/login");
    // TODO: PERFORM LOGOUT API REQUEST HERE
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user, // !! returns boolean from the value passed
    isLoading,

    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
