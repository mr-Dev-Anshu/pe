import React from "react";
import Home from "./Pages/Home/Home";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import ThemeContextProvider from "./contex/themeContext/ThemeContextProvider";
import SkillsContextProvider from "./contex/skillsContext/SkillsContextProvider";
import NavBar from "./Pages/Header/NavBar";
import AuthPage from "./Pages/auth/AuthPage";
import AuthPageContextProvider from "./contex/authContext/AuthPageContextProvider";
export default function App() {
  return (
    <div>
      <AuthPageContextProvider>
      <SkillsContextProvider>
      <ThemeContextProvider>
        <NavBar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthPage/>}/>
        </Routes>
      </Router>
      </ThemeContextProvider>
      </SkillsContextProvider>
      </AuthPageContextProvider>
    </div>
  );
}
