import React, { useState } from "react";
import { createUser } from "../../api/userService";
import AlertService from "../../utils/alertService";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" })); // پاک کردن خطا هنگام تایپ
  };

  const validate = () => {
    let tempErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        tempErrors[key] = "پر کردن این فیلد الزامی است";
      }
    });
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      debugger;
      await createUser(formData);
      AlertService.success("", "کاربر با موفقیت ثبت شد").then(() => {
        navigate("/login");
      });
    } catch (err) {
      AlertService.error("", "حطا در انجام عملیات");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#1e1e1e]">
      <form
        onSubmit={handleSubmit}
        className="bg-[#2a2a2a] p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          ثبت نام کاربر
        </h2>

        {/* FirstName */}
        <div className="mb-4">
          <label className="block text-gray-300 mb-1">نام</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-[#1e1e1e] text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
            placeholder="نام خود را وارد کنید"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
          )}
        </div>

        {/* LastName */}
        <div className="mb-4">
          <label className="block text-gray-300 mb-1">نام خانوادگی</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-[#1e1e1e] text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
            placeholder="نام خانوادگی خود را وارد کنید"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
          )}
        </div>

        {/* UserName */}
        <div className="mb-4">
          <label className="block text-gray-300 mb-1">نام کاربری</label>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-[#1e1e1e] text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
            placeholder="نام کاربری"
          />
          {errors.userName && (
            <p className="text-red-500 text-sm mt-1">{errors.userName}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-300 mb-1">ایمیل</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-[#1e1e1e] text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
            placeholder="ایمیل"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-gray-300 mb-1">رمز عبور</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-[#1e1e1e] text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
            placeholder="رمز عبور"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-bold transition-all"
        >
          ثبت نام
        </button>
      </form>
    </div>
  );
}
