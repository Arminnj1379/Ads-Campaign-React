import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const darkBase = {
  background: "#1e1e2f", // پس‌زمینه تیره
  color: "#f1f1f1", // متن روشن
  customClass: {
    popup: "custom-swal-popup",
    confirmButton: "custom-swal-confirm",
    cancelButton: "custom-swal-cancel",
  },
};

const AlertService = {
  unauthorized: () => {
    return Swal.fire({
      ...darkBase,
      icon: "error",
      title: "❌ دسترسی غیرمجاز",
      text: "شما مجاز نیستید. لطفاً مجدداً وارد شوید.",
      confirmButtonText: "ورود مجدد",
      confirmButtonColor: "#e74c3c",
    });
  },

  success: (title, text = "") => {
    return Swal.fire({
      ...darkBase,
      icon: "success",
      title: `✅ ${title}`,
      text,
      confirmButtonText: "متوجه شدم",
      confirmButtonColor: "#27ae60",
    });
  },

  error: (title, text = "") => {
    return Swal.fire({
      ...darkBase,
      icon: "error",
      title: `❌ ${title}`,
      text,
      confirmButtonText: "باشه",
      confirmButtonColor: "#e74c3c",
    });
  },

  warning: (title, text = "") => {
    return Swal.fire({
      ...darkBase,
      icon: "warning",
      title: `⚠️ ${title}`,
      text,
      confirmButtonText: "متوجه شدم",
      confirmButtonColor: "#f39c12",
    });
  },

  show: (options) => {
    return Swal.fire({
      ...darkBase,
      ...options,
    });
  },
};

export default AlertService;
