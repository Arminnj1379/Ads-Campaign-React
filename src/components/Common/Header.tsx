import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchBar from "./SearchBar/SearchBar";

function Header() {
  return (
    <div>
      <nav className="bg-neutral-800 px-4 py-2 flex items-center nav-bar">
        <div className="basis-1/4 flex gap-4">
          <span>آگهی های تهران</span>
        </div>
        {/* بخش جستجو */}
        <div className="basis-1/2 flex gap-2">
          <SearchBar />
        </div>
        <div className="basis-1/4 flex gap-4 justify-end">
          <Link to={`/ads/create`}>
            <button className="bg-red-600 text-white px-4 py-2 rounded">
              ثبت آگهی
            </button>
          </Link>
        </div>
      </nav>
      <hr className="border-t border-gray-700 w-full"></hr>
    </div>
  );
}

export default Header;
