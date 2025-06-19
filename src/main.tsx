// src/main.tsx
import 'leaflet/dist/leaflet.css'; // ✅ Leaflet CSS added first
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./i18n";
import { CurrencyProvider } from "./context/CurrencyContext";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <CurrencyProvider>
        <App />
      </CurrencyProvider>
    </I18nextProvider>
  </React.StrictMode>
);