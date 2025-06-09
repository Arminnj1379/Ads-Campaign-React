import React from "react";
import HomePage from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        {/* اگر صفحات دیگه هم داشتی اینجا اضافه کن */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
