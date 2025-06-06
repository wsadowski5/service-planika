import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import './i18n';
import i18n from './i18n';

const htmlLang = document.documentElement.lang?.split("-")[0] || "en";
i18n.changeLanguage(htmlLang);

const cssFile = document.createElement("link");
cssFile.rel = "stylesheet";
cssFile.href = "/wp-content/themes/planika/service-app/assets/index-BY9pLTgw.css";
document.head.appendChild(cssFile);

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <App />
  </HashRouter>
);
