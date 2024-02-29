import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.tsx";
import {
    Episodes,
    Location,
    Characters,
    EpisodeDetails,
    CharacterDetails,
    LocationDetails,
} from "./pages/index.ts";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<App />}>
                    <Route path="/" element={<Characters />} />
                    <Route
                        path="/character/:id"
                        element={<CharacterDetails />}
                    />
                    <Route path="/episodes" element={<Episodes />} />
                    <Route path="/episode/:id" element={<EpisodeDetails />} />
                    <Route path="/location" element={<Location />} />
                    <Route path="/location/:id" element={<LocationDetails />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);
