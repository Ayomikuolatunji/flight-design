import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Flight from "./pages/Flights";

function App() {
  return (
    <>
      <Routes>
        <Route path="/flight" element={<Flight />} />
        <Route path="/" element={<Navigate replace to="/flight" />} />
      </Routes>
    </>
  );
}

export default App;
