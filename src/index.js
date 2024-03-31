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
import "./fonts/static/Montserrat-Medium.ttf";
import "./fonts/static/Montserrat-Light.ttf";
import { ScrollProvider } from "./context/ScrollContext";
import { LoadingProvider } from "./context/LoadingContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <LoadingProvider>
      <ScrollProvider>
        <App />
      </ScrollProvider>
    </LoadingProvider>
  </React.StrictMode>
);

reportWebVitals();
