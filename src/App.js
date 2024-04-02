import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
import SkillSet from "./pages/SkillSet";
import ApiPage from "./pages/ApiPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Credits from "./pages/Credits";
import Story from "./pages/Story";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Dashboard from "./pages/Dashboard";
import { ProtectedRoute } from "./Helpers/ProtectedRoute";
import ToS from "./pages/ToS";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route
              path="dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="skillset" element={<SkillSet />} />
            <Route path="story" element={<Story />} />
            <Route path="apipage" element={<ApiPage />} />
            <Route path="credits" element={<Credits />} />
            <Route path="privacypolicy" element={<PrivacyPolicy />} />
            {/* <Route path="termsofservice" element={<ToS />} /> */}
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
