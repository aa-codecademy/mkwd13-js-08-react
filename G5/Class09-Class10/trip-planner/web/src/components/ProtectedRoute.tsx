import type React from "react";
import { Navigate } from "react-router-dom";
import { AuthSerice } from "../services/auth.service";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isAuthenticated = AuthSerice.isAuthenticated();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  //   If the user isAutheticated (meaning isAuthenticated is true) we gonna display/return the children (the elements that are wrapped in between opening and closing ProtectedRoute)
  return <>{children}</>;
};
