import React from "react";
import { Route, Routes } from "react-router-dom";
import { SupplyPage } from "./pages/SupplyPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<div>home page</div>} />
      <Route path="/supply" element={<SupplyPage />} />
    </Routes>
  );
};

export default App;
