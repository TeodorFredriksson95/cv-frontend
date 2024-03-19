import React, { createContext, useContext, useState } from "react";

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
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    localStorage.setItem("authToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
  };

  const logout = () => {
    setAccessToken(null);
    localStorage.removeItem("authToken");
    localStorage.removeItem("refreshToken");
  };

  return <AuthContext.Provider value={{ accessToken, setAccessToken, refreshToken, setRefreshToken, isAuthenticated, login, logout }}>{children}</AuthContext.Provider>;
};
