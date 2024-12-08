import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Vision from "./pages/Vision.jsx";
import Endpoints from "./pages/Endpoints.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path="vision" element={<Vision />} />
                    <Route path="endpoints" element={<Endpoints />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
