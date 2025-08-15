import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  // State برای ذخیره متن جستجو
  const [searchQuery, setSearchQuery] = useState("");

  // تغییرات در فیلد ورودی
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleSearchClick = async () => {
    onSearch(searchQuery);
  };

  return (
    <div className="bg-neutral-700 rounded-lg p-2 w-full max-w-md mt-2 shadow-md">
      <div className="flex items-center space-x-2">
        {/* فیلد ورودی جستجو */}
        <input
          type="text"
          placeholder="جستجو در همه آگهی‌ها"
          value={searchQuery}
          onChange={handleInputChange}
          className="bg-transparent border-none outline-none text-gray-200 w-full placeholder:text-neutral-500 focus:placeholder:text-neutral-400"
        />
        {/* آیکون جستجو */}
        <svg
          onClick={handleSearchClick}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-300 cursor-pointer hover:text-red-400 transition-colors duration-200"
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
      </div>
    </div>
  );
};

export default SearchBar;
