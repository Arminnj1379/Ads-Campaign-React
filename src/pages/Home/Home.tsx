import React, { useState, useEffect } from "react";
import User from "../UserList/UserList";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import AlertService from "../../utils/alertService";
import Header from "../../components/Common/Header";
import AdList from "../../components/AdList/AdList";
import Sidebar from "../../components/SideBar/SideBar";

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const redirectLogin = () => {
      AlertService.unauthorized().then(() => {
        navigate("/");
      });
    };
    window.addEventListener("unauthorized", redirectLogin);
    return () => window.removeEventListener("unauthorized", redirectLogin);
  }, [navigate]);

  return (
    <div dir="rtl" className="bg-neutral-800 text-white min-h-screen">
      {/* Header */}
      <Header />
      {/* Main Layout */}
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row-reverse gap-6">
        {/* Ad List */}
        <div className="flex-1 space-y-6">
          <AdList />
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-72">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
