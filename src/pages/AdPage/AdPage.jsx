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
        await viewAds(id); // Increment view count
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
      <div className="text-center text-white p-10">در حال بارگذاری...</div>
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
          <div className="bg-[#2a2a2a] rounded-2xl p-2 shadow-lg w-[600px] h-[600px] flex items-center justify-center overflow-hidden">
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
            <div className="bg-[#2d2d2d]/70 backdrop-blur-md p-4 rounded-xl mt-6 shadow-md border border-gray-700">
              <h2 className="font-bold text-lg mb-2">توضیحات</h2>
              <p className="text-sm text-gray-300 leading-6">
                {adData.description}
              </p>
            </div>
          )}
        </div>

        {/* جزئیات آگهی */}
        <div className="space-y-5">
          <h1 className="text-2xl font-bold">{adData.title}</h1>

          {/* تاریخ و بازدید */}
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-1">
              <FaCalendarAlt /> {adData.creationDateDesc || "امروز"}
            </span>
            <span className="flex items-center gap-1">
              <FaEye /> {adData.viewCount || "۱۲"} بازدید
            </span>
          </div>

          <p className="flex items-center gap-2 text-gray-400">
            <FaMapMarkerAlt className="text-red-500" /> در {adData.location}
          </p>

          <div className="bg-[#2d2d2d]/60 backdrop-blur-md p-4 rounded-xl space-y-3 border border-gray-700 shadow-lg">
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
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-red-500" />
              <span className="text-gray-400">آدرس:</span> {adData.address}
            </p>
          </div>
        </div>
      </div>

      {/* آگهی‌های مشابه */}
      <div className="mt-10">
        <h2 className="text-lg font-bold mb-4">آگهی‌های مشابه</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {relatedAdsData.map((ad) => (
            <div
              key={ad.id}
              className="bg-[#2d2d2d] p-3 rounded-lg shadow hover:shadow-xl transition"
            >
              <div className="w-full h-[250px] bg-[#1f1f1f] rounded-md flex items-center justify-center overflow-hidden mb-2">
                <img
                  src={
                    ad.images?.[0]
                      ? process.env.REACT_APP_API_URL + ad.images[0]
                      : "https://www.belugacdn.com/images/cdn-performance-testing.png"
                  }
                  alt="آگهی مشابه"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-sm font-bold">{ad.title}</h3>
              <p className="text-xs text-gray-400">موقعیت - قیمت</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdPage;
