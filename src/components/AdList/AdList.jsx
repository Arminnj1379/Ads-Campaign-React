import React from "react";
import { Link } from "react-router-dom";

function AdList() {
  const ads = [
    {
      id: 1,
      title: "پاسداران ۱۱۵ متر ۲خواب",
      subtitle: "خوش‌نو / بازاری شده",
      price: "۱۷,۰۰۰,۰۰۰ تومان",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "جراغ جلو عقب ۲۰۰۶ کریتی",
      subtitle: "آرنلس شایگان در یا",
      price: "۱,۸۰۰,۰۰۰ تومان",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "ویلاهای پیش ساخته مدرن با",
      subtitle: "کیفیت بالا",
      price: "۸,۵۰۰,۰۰۰ تومان",
      image: "https://via.placeholder.com/150",
    },
    // ... دیگر آگهی‌ها
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {ads.map((ad) => (
        <div key={ad.id} className="bg-gray-800 p-4 rounded shadow-md">
          <img
            src={ad.image}
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
}

export default AdList;
