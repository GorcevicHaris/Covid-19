import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/HomePage";
import Header from "./Header/Header";
import WorldoMeter from "./Pages/WorldoMeter";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/worldometer" element={<WorldoMeter />} />
      </Routes>
    </BrowserRouter>
  );
}
