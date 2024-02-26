import { Component } from "react";
import PageLayout from "../components/Page-Layout";
import { Routes, Route } from "react-router-dom";
import Main from "./main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
}

export default App;
