import type React from "react";
import { useContext } from "react";
import { AuthContext, type AuthContextType } from "../context/auth.context";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated } = useContext<AuthContextType>(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  //   If the user isAutheticated (meaning isAuthenticated is true) we gonna display/return the children (the elements that are wrapped in between opening and closing ProtectedRoute)
  return <>{children}</>;
};
