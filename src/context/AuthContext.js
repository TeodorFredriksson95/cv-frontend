import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(() => {
    const token = localStorage.getItem("authToken");
    return token || null;
  });

  const isAuthenticated = authToken !== null;

  const login = (token) => {
    setAuthToken(token);
    localStorage.setItem("authToken", token);
  };

  const logout = () => {
    setAuthToken(null);
    localStorage.removeItem("authToken");
  };

  return <AuthContext.Provider value={{ authToken, isAuthenticated, login, logout }}>{children}</AuthContext.Provider>;
};
