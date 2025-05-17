//import { StrictMode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { AppProvider } from "./context.jsx";

createRoot(document.getElementById("root")).render(
  <div>
    <AppProvider>
      <App />
    </AppProvider>
  </div>
);
