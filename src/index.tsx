import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Toaster } from "react-hot-toast";
import App from "./App";
import { AppProvider } from "./store/AppProvider";

ReactDOM.render(
    <React.StrictMode>
        <AppProvider>
            <App />
            <Toaster />
        </AppProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
