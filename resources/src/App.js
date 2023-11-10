import { Route, Routes } from "react-router-dom";
import "./App.css";
import React, { useState } from "react";
import Login from "./Components/Login/Login.jsx";
import ContactScreen from "./Components/Contacts/ContactScreen.jsx";

function App() {
  return (
    <Routes>
      <Route path="/cs" element={<Login />} />
      <Route path="/" element={<ContactScreen />} />
    </Routes>
  );
}

export default App;
