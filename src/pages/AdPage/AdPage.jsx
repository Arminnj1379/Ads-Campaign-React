// src/components/AdPage.jsx
import React from "react";
import { useParams } from "react-router-dom";

const AdPage = () => {
  const adData = {
    title: "خریدفروش ضایعات کارتن در محل",
    location: "تهران‌سر، تهران",
    posted: "۱ هفته پیش",
    status: "کارکرده",
    trade: "نیستم",
    price: "۱۵۰,۰۰۰ تومان",
    image: "/images/karton.jpg", // این تصویر رو باید دستی در public/images قرار بدی
  };
const { id } = useParams();

  return (
    <div className="bg-[#1e1e1e] text-white min-h-screen p-6 font-sans">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* تصویر */}
        <div className="flex flex-col items-center">
          <img
            src={adData.image}
            alt="تصویر آگهی"
            className="rounded w-full max-w-md"
          />
          <textarea
            placeholder="یادداشت شما..."
            className="bg-[#2c2c2c] text-white mt-4 p-2 w-full max-w-md rounded"
          />
          <p className="text-xs text-gray-400 mt-1">
            یادداشت تنها برای شما قابل دیدن است و پس از حذف آگهی پاک خواهد شد.
          </p>
        </div>

        {/* جزئیات آگهی */}
        <div className="space-y-4">
          <h1 className="text-xl font-bold">{adData.title}</h1>
          <p className="text-gray-400">{adData.posted} در {adData.location}</p>
          <div className="flex items-center gap-4">
            <button className="bg-pink-600 text-white px-4 py-2 rounded">اطلاعات تماس</button>
            <button className="bg-gray-700 px-4 py-2 rounded">چت</button>
          </div>
          <div className="text-sm space-y-2 mt-4">
            <div><span className="text-gray-400">وضعیت:</span> {adData.status}</div>
            <div><span className="text-gray-400">مایل به معاوضه:</span> {adData.trade}</div>
            <div><span className="text-gray-400">قیمت:</span> {adData.price}</div>
          </div>

          {/* پرداخت امن */}
          <div className="bg-[#2d2d2d] p-4 rounded mt-6 space-y-2">
            <h2 className="font-bold text-lg">پرداخت امن تون</h2>
            <p className="text-sm text-gray-300">
              در پرداخت امن تون، مبلغ پرداختی نزد تون به امانت باقی می‌ماند و پس از ارسال و تأیید کالا، مبلغ به حساب فروشنده واریز می‌شود.
            </p>
            <button className="bg-green-600 px-4 py-2 rounded">شروع پرداخت امن</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdPage;
