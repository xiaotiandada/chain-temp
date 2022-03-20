import React from 'react';
import { Routes, Route } from "react-router-dom";
import Account from './views/Account';
import ERC20UnlockContent from './views/ERC20UnlockContent';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Account />} />
      <Route path="erc20-unlock-content" element={<ERC20UnlockContent />} />
    </Routes>
  );
}

export default App;
