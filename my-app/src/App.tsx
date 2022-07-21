import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import NavBar from "./components/NavBar";
function App() {
    return (
        <>
            <NavBar labels={["home", "about", "projects"]} />
            <Router>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
