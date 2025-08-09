import React, { useState } from "react";
import { getAllAds } from "../../../api/adsService";

const SearchBar = () => {
  // State برای ذخیره متن جستجو
  const [searchQuery, setSearchQuery] = useState("");

  // تغییرات در فیلد ورودی
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleSearchClick = async () => {
    const response = await getAllAds();
    
  };

  return (
    <div className="bg-gray-700 rounded-lg p-2 w-full max-w-md mt-2">
      <div className="flex items-center space-x-2">
        {/* آیکون جستجو */}
        <svg
          onClick={handleSearchClick}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>

        {/* فیلد ورودی جستجو */}
        <input
          type="text"
          placeholder="جستجو در همه آگهی‌ها"
          value={searchQuery}
          onChange={handleInputChange}
          className="bg-transparent border-none outline-none text-white w-full placeholder:text-gray-400"
        />
      </div>
    </div>
  );
};

export default SearchBar;
