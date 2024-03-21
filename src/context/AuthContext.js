import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(() => {
    const accessToken = localStorage.getItem("authToken");
    return accessToken || null;
  });

  const [refreshToken, setRefreshToken] = useState(() => {
    const refreshToken = localStorage.getItem("refreshToken");
    return refreshToken || null;
  });

  const isAuthenticated = accessToken !== null;

  const login = (accessToken, refreshToken) => {
    localStorage.setItem("authToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("refreshToken");
    setAccessToken(null);
    setRefreshToken(null);
  };

  return <AuthContext.Provider value={{ accessToken, setAccessToken, refreshToken, setRefreshToken, isAuthenticated, login, logout }}>{children}</AuthContext.Provider>;
};
