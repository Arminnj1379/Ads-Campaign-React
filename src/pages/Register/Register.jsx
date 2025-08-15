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
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
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
      await createUser(formData);
      AlertService.success("", "کاربر با موفقیت ثبت شد").then(() => {
        navigate("/login");
      });
    } catch (err) {
      AlertService.error("", "خطا در انجام عملیات");
    }
  };

  const renderInput = (label, name, type = "text", placeholder) => (
    <div className="mb-4">
      <label className="block text-gray-300 mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className="w-full p-3 rounded-lg bg-[#1e1e1e] text-white border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none transition"
        placeholder={placeholder}
      />
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">{errors[name]}</p>
      )}
    </div>
  );

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#1e1e1e] px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#2a2a2a] p-8 rounded-2xl shadow-lg w-full max-w-3xl"
      >
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          ثبت نام کاربر
        </h2>

        {/* Grid with 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {renderInput("نام", "firstName", "text", "نام خود را وارد کنید")}
          {renderInput(
            "نام خانوادگی",
            "lastName",
            "text",
            "نام خانوادگی خود را وارد کنید"
          )}
          {renderInput("نام کاربری", "userName", "text", "نام کاربری")}
          {renderInput("ایمیل", "email", "email", "ایمیل")}
          {renderInput("شماره تلفن", "phoneNumber", "text", "شماره تلفن")}
          {renderInput("رمز عبور", "password", "password", "رمز عبور")}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-bold transition-all transform hover:scale-[1.02]"
        >
          ثبت نام
        </button>
      </form>
    </div>
  );
}
