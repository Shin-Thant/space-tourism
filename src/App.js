import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { DestinationPage } from "./pages/destination/DestinationPage";
import { CrewPage } from "./pages/crew/CrewPage";
import { TechnologyPage } from "./pages/technology/TechnologyPage";
import { Navbar } from "./components/navbar/Navbar";
import { HomePage } from "./pages/home/HomePage";
import { useState } from "react";
import { useSelector } from "react-redux";

function App() {
    const { bg } = useSelector((state) => state.bg);

    return (
        <Router>
            <div className={`main-container ${bg}`}>
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<HomePage />} />
                    <Route path="/destination" element={<DestinationPage />} />
                    <Route path="/crew" element={<CrewPage />} />
                    <Route path="/technology" element={<TechnologyPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
