import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Layout from './pages/Layout';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

