import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-gray-800 px-4 py-2 flex justify-between items-center">
      {/* منوی چپ */}
      <div className="flex gap-4">
        <Link to={`/ads/create`}>
          <button className="bg-red-600 text-white px-4 py-2 rounded">
            ثبت آگهی
          </button>
        </Link>
        <span className="text-sm bg-red-500 text-white px-1 rounded">
          پشتیبانی
        </span>
        <span>چت و تماس</span>
        <span>دیوار من</span>
        <span>دستیار خرد</span>
      </div>

      {/* بخش جستجو */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="جستجو در همه آگهی‌ها"
          className="px-4 py-2 rounded-lg border border-gray-700"
        />
        <button className="bg-gray-700 text-white px-4 py-2 rounded">
          دسته‌ها
        </button>
      </div>

      {/* منوی راست */}
      <div className="flex gap-4">
        <span>تهران</span>
        <span>دیوار</span>
      </div>
    </nav>
  );
}

export default Header;
