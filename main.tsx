import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import sksLogo from "./assets/skslogo.png";


const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement;

if (favicon) {
  favicon.href = sksLogo;
} else {
  const newFavicon = document.createElement("link");
  newFavicon.rel = "icon";
  newFavicon.href = sksLogo;
  document.head.appendChild(newFavicon);
}


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
