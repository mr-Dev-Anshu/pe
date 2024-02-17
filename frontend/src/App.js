import React from "react";
import Home from "./Pages/Home/Home";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import ThemeContextProvider from "./contex/themeContext/ThemeContextProvider";
import SkillsContextProvider from "./contex/skillsContext/SkillsContextProvider";
import NavBar from "./Pages/Header/NavBar";
export default function App() {
  return (
    <div>
      <SkillsContextProvider>
      <ThemeContextProvider>
        <NavBar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      </ThemeContextProvider>
      </SkillsContextProvider>
    </div>
  );
}
