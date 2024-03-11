import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import ReactDOM from "react-dom/client";

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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="skillset" element={<SkillSet />} />
          <Route path="story" element={<Story />} />
          <Route path="apipage" element={<ApiPage />} />
          <Route path="credits" element={<Credits />} />
          <Route path="privacypolicy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
