import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import SearchBar from "./SearchBar/SearchBar";
import KARPA from "../../karpa.svg";
import { FaMapMarkerAlt } from "react-icons/fa";

function Header({ onSearch, user }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // پاک کردن توکن یا اطلاعات کاربر
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <nav className="bg-neutral-800 px-4 py-2 flex items-center nav-bar">
        <div className="flex items-center justify-end gap-2 basis-1/4">
          <FaMapMarkerAlt className="text-neutral-400 font-semibold" />
          تهران
          <img
            src={KARPA}
            alt="KARPA"
            style={{ height: "1.9rem", width: "auto" }}
          />
        </div>
        {/* بخش جستجو */}
        <div className="basis-1/2 flex gap-2">
          <SearchBar onSearch={onSearch} />
        </div>

        <div className="basis-1/4 flex gap-4 justify-end items-center">
          {/* نام کاربر */}
          {user && (
            <span
              className="flex items-center gap-2 bg-gray-700 text-gray-200 font-semibold px-4 py-2 rounded-lg shadow-sm
       hover:bg-gray-600 transition-colors duration-300 text-sm"
            >
              👤 {user.fullName}
            </span>
          )}

          {/* دکمه مدیریت کاربران (فقط برای ادمین) */}
          {user?.role === "Admin" && (
            <Link to="/admin/users">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition text-sm">
                مدیریت کاربران
              </button>
            </Link>
          )}

          {/* ثبت آگهی */}
          <Link to={`/ads/create`}>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded-lg shadow-md 
       hover:bg-red-700 hover:text-gray-900 transition-all duration-300 ease-in-out 
       transform hover:scale-105 text-sm"
            >
              ثبت آگهی
            </button>
          </Link>

          {/* دکمه خروج */}
          {user && (
            <button
              onClick={handleLogout}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600 transition text-sm"
            >
              خروج
            </button>
          )}
        </div>
      </nav>
      <hr className="border-t border-gray-700 w-full"></hr>
    </div>
  );
}

export default Header;
