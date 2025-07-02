import { createContext, type ReactNode, useEffect, useState } from "react";
import type { User } from "../types/auth.type";
import { useNavigate } from "react-router-dom";
import { AuthSerice } from "../services/auth.service";

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
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const storedUser = AuthSerice.getUser();
    if (storedUser && AuthSerice.isAuthenticated()) {
      setUser(storedUser);
    }
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    try {
      setIsLoading(true);
      const response = await AuthSerice.login({ email, password });
      setUser(response.user);
      navigate("/trips");
    } catch (error) {
      // TODO: handle error, show some informative message
      setErrors({ login: true });
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (
    email: string,
    password: string,
    name: string
  ): Promise<void> => {
    try {
      setIsLoading(true);
      await AuthSerice.register({ email, password, name });
      navigate("/login");
    } catch (error) {
      setErrors({ register: true });
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    AuthSerice.logout();
    setUser(null);
    navigate("/login");
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
