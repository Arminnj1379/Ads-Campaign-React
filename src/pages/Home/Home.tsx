import React, { useState } from "react";
import User from "../UserList/UserList";
import "./Home.css"

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gray-100 text-right font-sans" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow p-4 flex items-center relative z-30">
        {/* لوگو و دکمه منو کنار هم در سمت راست */}
        <div className="flex items-center space-x-4 space-x-reverse">
          {/* <div className="text-2xl font-bold text-blue-600">لوگو</div> */}

          {/* دکمه سه‌خطی منو */}
          <button
            className="text-3xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="منو"
          >
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
            </div>
          </button>
        </div>

        {/* دکمه‌های ورود و ثبت‌نام فقط در حالت دسکتاپ */}
        <div className="mr-auto hidden lg:flex gap-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            ورود
          </button>
          <button className="bg-gray-300 px-4 py-2 rounded">ثبت‌نام</button>
        </div>
      </header>

      {/* Overlay وقتی منو بازه */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        ></div>
      )}

      {/* Sidebar - منوی سمت راست */}
      <aside
        className={`${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transform transition-transform duration-300 ease-in-out fixed top-16 right-0 z-50 w-64 h-full bg-white shadow-md p-4`}
      >
        <h3 className="text-lg font-semibold mb-4">دسته‌بندی‌ها</h3>
        <ul className="space-y-2">
          <li>
            <button className="text-blue-700 hover:underline">خودرو</button>
          </li>
          <li>
            <button className="text-blue-700 hover:underline">املاک</button>
          </li>
          <li>
            <button className="text-blue-700 hover:underline">دیجیتال</button>
          </li>
          <li>
            <button className="text-blue-700 hover:underline">استخدام</button>
          </li>
        </ul>
      </aside>

      {/* نوار جستجو */}
      <section className="p-4 pt-20 lg:pr-72">
        <input
          type="text"
          placeholder="جستجوی آگهی..."
          className="w-full p-3 border border-gray-300 rounded"
        />
      </section>

      {/* لیست آگهی‌ها */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 lg:pr-72">
        <div className="bg-white rounded shadow p-3">
          <img
            src="https://via.placeholder.com/300x200 "
            alt="آگهی"
            className="rounded mb-2"
          />
          <h3 className="text-lg font-semibold">عنوان آگهی</h3>
          <p className="text-gray-600">توضیح کوتاه درباره آگهی</p>
          <span className="text-green-600 font-bold">۵۰۰٬۰۰۰ تومان</span>
        </div>
        <div className="bg-white rounded shadow p-3">
          <img
            src="https://via.placeholder.com/300x200 "
            alt="آگهی"
            className="rounded mb-2"
          />
          <h3 className="text-lg font-semibold">عنوان آگهی</h3>
          <p className="text-gray-600">توضیح کوتاه درباره آگهی</p>
          <span className="text-green-600 font-bold">۳۵۰٬۰۰۰ تومان</span>
        </div>
      </section>
      <User />
    </div>
  );
};

export default HomePage;
