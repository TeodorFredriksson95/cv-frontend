import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { isTokenExpired } from "../components/util/isTokenExpired";

export const ProtectedRoute = ({ children }) => {
  const { accessToken, logout } = useAuth();
  if (!accessToken || isTokenExpired(accessToken)) {
    logout();
    return <Navigate to="/login" />;
  }
  return children;
};
