import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import ERC20UnlockContent from "./views/ERC20UnlockContent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="erc20-unlock-content" element={<ERC20UnlockContent />} />
    </Routes>
  );
}

export default App;
