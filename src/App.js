import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Favorite from "./components/Favorite";

function App() {
  return (
    <div style={{ backgroundColor: "rgba(56, 57, 60, 0.05)" }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/favorites" element={<Favorite />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
