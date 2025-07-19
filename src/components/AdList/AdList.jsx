import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllAds } from "../../api/adsService";

const AdList = () => {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await getAllAds(); // api.get("/Ad/GetAll")
        setAds(response.data); // یا هرچیزی که در پاسخ داده‌ات هست (مثلا response.data یا response)
        setLoading(false);
      } catch (err) {
        setError("خطا در بارگذاری آگهی‌ها");
        setLoading(false);
      }
    };

    fetchAds();
  }, []);

  if (loading) return <p>در حال بارگذاری...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-3 gap-4">
      {ads.map((ad) => (
        <div key={ad.id} className="bg-neutral-800 p-4 rounded shadow-md border border-gray-700">
          <img
            src={
              process.env.REACT_APP_API_URL + ad.images?.[0] ||
              "https://www.belugacdn.com/images/cdn-performance-testing.png"
            }
            alt={ad.title}
            className="w-full h-40 object-cover mb-2"
          />
          <Link to={`/ad/${ad.id}`}>
            <h3 className="text-lg font-semibold text-blue-600 hover:underline">
              {ad.title}
            </h3>
          </Link>
          <p className="text-gray-400">{ad.subtitle}</p>
          <p className="text-green-400">{ad.price}</p>
        </div>
      ))}
    </div>
  );
};

export default AdList;
