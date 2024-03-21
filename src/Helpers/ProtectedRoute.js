import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, logout } = useAuth();
  if (!isAuthenticated) {
    logout();
    return <Navigate to="/login" />;
  }
  return children;
};
