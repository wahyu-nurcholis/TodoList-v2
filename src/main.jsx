import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import DarkModeContextProvider from "./context/DarkModeContext";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </React.StrictMode>
);
