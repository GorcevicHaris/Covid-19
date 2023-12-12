import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/HomePage";
import Header from "./Header/Header";
import WorldoMeter from "./Pages/WorldoMeter";
import Population from "./Pages/Population";
import Footer from "./Footer/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/population" element={<Population />} />
        <Route path="/worldometer" element={<WorldoMeter />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
