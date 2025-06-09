// src/utils/apiClient.js
import axios from "axios";

// 🔧 ساخت یک instance از Axios
const api = axios.create({
  baseURL: "http://192.168.0.40:85/api/adscampaign", // آدرس API شما
  timeout: 10000, // زمان انتظار حداکثر 10 ثانیه
  headers: {
    "Content-Type": "application/json",
  },
});

// 📡 Interceptor برای اضافه کردن توکن قبل از هر درخواست
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // 👉 توکن رو از localStorage بگیر
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // مدیریت خطا در درخواست
    console.error("خطا در درخواست:", error);
    return Promise.reject(error);
  }
);

// 🛡️ Interceptor برای مدیریت خطاهای پاسخ (response)
api.interceptors.response.use(
  (response) => {
    // ✅ اگر پاسخ موفقیت‌آمیز بود، فقط response رو برگردون
    return response;
  },
  (error) => {
    // ❌ مدیریت خطاها (مثل 401 - غیرمجاز، 500 - خطای سرور و ...)
    const status = error?.response?.status;

    switch (status) {
      case 401:
        console.error("❌ شما مجاز نیستید. لطفاً مجدداً وارد شوید.");
        // مثلاً redirect به صفحه login
        // window.location.href = '/login';
        break;
      case 404:
        console.error("❌ مسیر مورد نظر پیدا نشد.");
        break;
      case 500:
        console.error("❌ خطای داخلی سرور.");
        break;
      default:
        console.error("⚠️ خطایی رخ داده است:", error.message);
    }

    return Promise.reject(error);
  }
);

export default api;