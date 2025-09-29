import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import "./App.css";
import NavBar from "./pages/components/NavBar";
import Footer from "./pages/components/Footer";
import ArrestDash from "./pages/ArrestDash";
import About from "./pages/About";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter basename="/SOCO_Transparency_Dashboard">
      <div className="app">
        <NavBar />
        <motion.main
          className="main-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<ArrestDash />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </motion.main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
