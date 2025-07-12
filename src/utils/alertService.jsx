import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css"; // ✅ بدون مشکل sass

const AlertService = {
  /**
   * هشدار عدم دسترسی
   */
  unauthorized: () => {
    return Swal.fire({
      icon: "error",
      title: "❌ دسترسی غیرمجاز",
      text: "شما مجاز نیستید. لطفاً مجدداً وارد شوید.",
      confirmButtonText: "ورود مجدد",
      confirmButtonColor: "#d33",
      background: "#fff", // پس‌زمینه سفید
      customClass: {
        popup: "custom-swal-popup",
        confirmButton: "custom-swal-confirm",
        cancelButton: "custom-swal-cancel",
      },
    });
  },

  /**
   * هشدار موفقیت
   */
  success: (title, text = "") => {
    return Swal.fire({
      icon: "success",
      title: `✅ ${title}`,
      text,
      confirmButtonText: "متوجه شدم",
      confirmButtonColor: "#3085d6",
      background: "#fff",
    });
  },

  /**
   * هشدار خطا
   */
  error: (title, text = "") => {
    return Swal.fire({
      icon: "error",
      title: `❌ ${title}`,
      text,
      confirmButtonText: "متوجه شدم",
      confirmButtonColor: "#d33",
      background: "#fff",
    });
  },

  /**
   * هشدار هشداردهی
   */
  warning: (title, text = "") => {
    return Swal.fire({
      icon: "warning",
      title: `⚠️ ${title}`,
      text,
      confirmButtonText: "متوجه شدم",
      confirmButtonColor: "#f8bb86",
      background: "#fff",
    });
  },

  /**
   * هشدار عمومی قابل شخصی‌سازی
   */
  show: (options) => {
    return Swal.fire({
      background: "#fff",
      ...options,
    });
  },
};

export default AlertService;
