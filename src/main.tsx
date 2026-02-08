import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/font/italian-plate-no2/stylesheet.css";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
