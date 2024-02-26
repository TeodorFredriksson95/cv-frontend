import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./fonts/static/Montserrat-Bold.ttf";
import "./fonts/static/Montserrat-LightItalic.ttf";
import "./fonts/static/Montserrat-SemiBoldItalic.ttf";
import "./fonts/static/Montserrat-LightItalic.ttf";
import "./fonts/static/Montserrat-ExtraBoldItalic.ttf";
import "./fonts/static/Montserrat-BoldItalic.ttf";
import "./fonts/static/Montserrat-MediumItalic.ttf";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
