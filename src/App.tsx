import React, { useEffect } from "react";
import HomePage from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import AuthLoader from "./components/AuthLoader/AuthLoader";
import AdPage from "./pages/AdPage/AdPage";
import CreateAdPage from "./pages/AdPage/CreateAdPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<AuthLoader />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/ad/:id" element={<AdPage />} />
        <Route path="/ads/create" element={<CreateAdPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
