import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AccessoriesPage from "./pages/AccessoriesPage";
import PartsPage from "./pages/PartsPage";
import HelmetsPage from "./pages/HelmetsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/accesories" element={<AccessoriesPage />} />
        <Route path="/parts" element={<PartsPage />} />
        <Route path="/helmets" element={<HelmetsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
