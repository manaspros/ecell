import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home/Home"; // Adjust path if needed
import "./styles/global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>
);