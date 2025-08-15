import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllAds } from "../../api/adsService";

const AdList = ({ ads: propAds }) => {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (propAds?.length > 0) {
      setAds(propAds);
      setLoading(false);
    } else {
      const fetchAds = async () => {
        try {
          const response = await getAllAds();
          setAds(response.data);
          setLoading(false);
        } catch (err) {
          setError("خطا در بارگذاری آگهی‌ها");
          setLoading(false);
        }
      };
      fetchAds();
    }
  }, [propAds]);

  if (loading) return <p>در حال بارگذاری...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-3 gap-4">
      {ads.map((ad) => (
        <div
          key={ad.id}
          className="bg-neutral-800 p-3 rounded shadow-md border border-gray-700 flex gap-4 w-full max-w-md h-48"
        >
          {/* متن */}
          <div className="flex flex-col justify-between overflow-hidden ">
            <Link to={`/ad/${ad.id}`} className="hover:underline">
              <h3 className="text-white-500 font-semibold text-sm leading-5 mb-1 line-clamp-2">
                {ad.title}
              </h3>
            </Link>
            <p className="text-gray-500 text-xs">{ad.title}</p>
            <p className="text-gray-500 text-sm font-medium">
              {ad.price?.toLocaleString("fa-IR")} تومان
            </p>
            <p className="text-gray-500 text-xs">
              لحظاتی پیش در {ad.location || "نامشخص"}
            </p>
          </div>
          {/* تصویر */}
          <div className="relative w-36 h-40 flex-shrink-0 flex-grow">
            <img
              src={
                ad.images?.[0]
                  ? process.env.REACT_APP_API_URL + ad.images[0]
                  : "https://www.belugacdn.com/images/cdn-performance-testing.png"
              }
              alt={ad.title}
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdList;
