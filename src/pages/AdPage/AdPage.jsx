// src/components/AdPage.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getByIdAds, viewAds, getRelatedAds } from "../../api/adsService";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTag,
  FaListUl,
  FaInfoCircle,
  FaEye,
  FaCalendarAlt,
} from "react-icons/fa";

const AdPage = () => {
  const { id } = useParams();
  const [adData, setAd] = useState([]);
  const [relatedAdsData, setRelatedAd] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAd = async () => {
      try {
        const response = await getByIdAds(id);
        setAd(response.data);
        setLoading(false);
        await viewAds(id); // افزایش بازدید
        const relatedAds = await getRelatedAds(id);
        setRelatedAd(relatedAds.data);
      } catch (err) {
        setError("خطا در بارگذاری آگهی");
        setLoading(false);
      }
    };

    fetchAd();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center text-white p-10 animate-pulse">
        در حال بارگذاری...
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-400 p-10">{error}</div>;
  }

  return (
    <div className="bg-[#1e1e1e] text-white min-h-screen p-8 font-sans">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mt-5">
        {/* تصویر */}
        <div className="flex flex-col items-center">
          <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl p-3 shadow-2xl w-[600px] h-[600px] flex items-center justify-center overflow-hidden">
            <img
              src={
                adData.images?.[0]
                  ? process.env.REACT_APP_API_URL + adData.images[0]
                  : "https://www.belugacdn.com/images/cdn-performance-testing.png"
              }
              alt="تصویر آگهی"
              className="rounded-xl w-full h-full object-contain"
            />
          </div>

          {adData.description && (
            <div className="bg-[#2d2d2d]/50 backdrop-blur-xl p-5 rounded-xl mt-6 shadow-lg w-[600px] border border-gray-700">
              <h2 className="font-bold text-lg mb-3 border-b border-gray-600 pb-2">
                توضیحات
              </h2>
              <p className="text-sm text-gray-300 leading-7">
                {adData.description}
              </p>
            </div>
          )}
        </div>

        {/* جزئیات آگهی */}
        <div className="space-y-6">
          <h1 className="text-3xl font-extrabold tracking-wide">
            {adData.title}
          </h1>

          {/* تاریخ و بازدید */}
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-1">
              <FaCalendarAlt className="text-blue-400" />{" "}
              {adData.creationDateDesc || "امروز"}
            </span>
            <span className="flex items-center gap-1">
              <FaEye className="text-green-400" /> {adData.viewCount || "۱۲"}{" "}
              بازدید
            </span>
          </div>

          <p className="flex items-center gap-2 text-gray-300 font-medium">
            <FaMapMarkerAlt className="text-red-500" /> در {adData.location}
          </p>

          {/* کارت اطلاعات */}
          <div className="grid sm:grid-cols-2 gap-4 bg-[#2d2d2d]/70 backdrop-blur-lg p-6 rounded-2xl border border-gray-700 shadow-xl">
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-500" />
              <span className="text-gray-400">اطلاعات تماس:</span>{" "}
              {adData.number}
            </p>
            <p className="flex items-center gap-2">
              <FaInfoCircle className="text-blue-500" />
              <span className="text-gray-400">وضعیت:</span> {adData.status}
            </p>
            <p className="flex items-center gap-2">
              <FaTag className="text-yellow-500" />
              <span className="text-gray-400">قیمت:</span> {adData.price}
            </p>
            <p className="flex items-center gap-2">
              <FaListUl className="text-purple-500" />
              <span className="text-gray-400">دسته‌بندی:</span>{" "}
              {adData.categoryid}
            </p>
            <p className="flex items-center gap-2 col-span-2">
              <FaMapMarkerAlt className="text-red-500" />
              <span className="text-gray-400">آدرس:</span> {adData.address}
            </p>
          </div>
        </div>
      </div>

      {/* آگهی‌های مشابه */}
      <div className="mt-14 max-w-6xl mx-auto">
        <h2 className="text-xl font-bold mb-6 border-b border-gray-700 pb-2">
          آگهی‌های مشابه
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {relatedAdsData.map((ad) => (
            <div
              key={ad.id}
              className="group bg-[#2d2d2d]/80 p-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border border-gray-700"
            >
              <div className="w-full h-[220px] bg-[#1f1f1f] rounded-lg flex items-center justify-center overflow-hidden mb-3">
                <img
                  src={
                    ad.images?.[0]
                      ? process.env.REACT_APP_API_URL + ad.images[0]
                      : "https://www.belugacdn.com/images/cdn-performance-testing.png"
                  }
                  alt="آگهی مشابه"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-sm font-bold truncate">{ad.title}</h3>
              <p className="text-xs text-gray-400 mt-1">
                {ad.location || "نامشخص"} - {ad.price || "توافقی"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdPage;
