import axios from "axios";
// ساخت یک instance
const loginapi = axios.create({
  baseURL: process.env.REACT_APP_API_URL + "/api/adscampaign",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 👉 Interceptors (اختیاری - برای auth, logging و ...)
loginapi.interceptors.response.use(
  (response) => response,
  (error) => {
    // مثلا logout کن اگه 401 بود
    if (error.response?.status === 401) {
      console.error("Unauthorized - لطفا دوباره وارد شوید");
    }
    return Promise.reject(error);
  }
);

export default loginapi;
