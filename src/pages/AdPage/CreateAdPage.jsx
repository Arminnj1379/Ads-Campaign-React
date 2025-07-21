import React, { useState, useEffect } from "react";
import { Listbox } from "@headlessui/react";
import { saveAds } from "../../api/adsService";
import { useNavigate } from "react-router-dom";
import { getAllCategories } from "../../api/SideBarService";

const statuses = [
  { id: "0", name: "نو" },
  { id: "1", name: "در حد نو" },
  { id: "2", name: "کارکرده" },
];

export default function CreateAdPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    address: "",
    categoryId: null,
    status: "",
    userId: "test-user-id-123",
    location: "",
  });

  const [images, setImages] = useState([]);
  const [preview, setPreview] = useState([]);
  const [categories, setCategories] = useState([]); // ✅ state برای دسته‌ها
  const [loading, setLoading] = useState(true); // ✅ حالت loading
  const [error, setError] = useState(null); // ✅ مدیریت خطا

  // 🔽 بارگذاری دسته‌ها در mount component
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getAllCategories();
        setCategories(response.data); // ✅ ذخیره داده در state
        setLoading(false);
      } catch (err) {
        setError("خطا در دریافت دسته‌ها");
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const files = [...e.target.files];
    setImages(files);
    const previews = files.map((file) => URL.createObjectURL(file));
    setPreview(previews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    debugger;
    const data = {
      title: form.title,
      description: form.description,
      price: form.price,
      address: form.address,
      userId: "1", //Todo
      categoryId: Number(form.categoryId?.id),
      status: Number(form.status?.id),
      image: images[0],
      location: form.location || "default-location", // اگر موقعیت مکانی خالی بود، مقدار پیش‌فرض قرار می‌دهیم
    };
    // for (const key in form) {
    //   if (key === "categoryId") data.append("categoryId", form.categoryId?.id);
    //   else if (key === "status") data.append("status", form.status?.id);
    //   else data.append(key, form[key]);
    // }
    // images.forEach((img) => data.append("images", img));

    try {
      await saveAds(data);
      navigate("/home");
    } catch (err) {}
  };

  const SelectBox = ({ label, options, selected, onChange }) => (
    <div>
      <label className="block mb-1 text-sm text-gray-400">{label}</label>
      <Listbox value={selected} onChange={onChange}>
        <div className="relative">
          <Listbox.Button className="w-full bg-[#1e1e1e] border border-gray-600 p-3 rounded-lg text-left text-white">
            {selected?.name || "-- انتخاب کنید --"}
          </Listbox.Button>
          <Listbox.Options className="absolute z-10 mt-1 w-full bg-[#2b2b2b] border border-gray-700 rounded-md max-h-60 overflow-auto text-white">
            {options.map((opt) => (
              <Listbox.Option
                key={opt.id}
                value={opt}
                className={({ active }) =>
                  `cursor-pointer select-none px-4 py-2 ${
                    active ? "bg-pink-600" : ""
                  }`
                }
              >
                {opt.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white p-6 font-sans">
      <div className="max-w-3xl mx-auto bg-[#2b2b2b] p-8 rounded-2xl shadow-xl border border-[#3a3a3a]">
        <h2 className="text-2xl font-bold mb-6 text-white tracking-wide">
          📝 ثبت آگهی جدید
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm text-gray-400">
              عنوان آگهی
            </label>
            <input
              name="title"
              type="text"
              placeholder="مثلاً: فروش لپ‌تاپ"
              value={form.title}
              onChange={handleChange}
              className="w-full bg-[#1e1e1e] border border-gray-600 focus:border-pink-600 transition-all p-3 rounded-lg text-white"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-400">توضیحات</label>
            <textarea
              name="description"
              placeholder="توضیحات کامل آگهی..."
              value={form.description}
              onChange={handleChange}
              className="w-full bg-[#1e1e1e] border border-gray-600 focus:border-pink-600 transition-all p-3 rounded-lg text-white"
              rows="4"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm text-gray-400">
                قیمت (تومان)
              </label>
              <input
                name="price"
                type="number"
                value={form.price}
                onChange={handleChange}
                className="w-full bg-[#1e1e1e] border border-gray-600 focus:border-pink-600 transition-all p-3 rounded-lg text-white"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm text-gray-400">محله</label>
              <input
                name="location"
                type="text"
                value={form.location}
                onChange={handleChange}
                className="w-full bg-[#1e1e1e] border border-gray-600 focus:border-pink-600 transition-all p-3 rounded-lg text-white"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <SelectBox
              label="دسته‌بندی"
              options={categories}
              selected={form.categoryId}
              onChange={(val) => setForm((f) => ({ ...f, categoryId: val }))}
            />
            <SelectBox
              label="وضعیت آگهی"
              options={statuses}
              selected={form.status}
              onChange={(val) => setForm((f) => ({ ...f, status: val }))}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-400">
              تصاویر آگهی
            </label>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="w-full text-sm text-gray-300 bg-[#1e1e1e] border border-gray-600 p-2 rounded"
            />
            {preview.length > 0 && (
              <div className="flex flex-wrap gap-3 mt-3">
                {preview.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`preview-${idx}`}
                    className="w-24 h-24 object-cover rounded-lg border border-gray-700"
                  />
                ))}
              </div>
            )}
            <div>
              <label className="block mb-1 text-sm text-gray-400">آدرس </label>
              <input
                name="address"
                type="text"
                value={form.address}
                onChange={handleChange}
                className="w-full bg-[#1e1e1e] border border-gray-600 focus:border-pink-600 transition-all p-3 rounded-lg text-white"
                required
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-600 to-pink-500 hover:brightness-110 text-white font-semibold py-3 rounded-lg shadow-lg transition-all"
            >
              🚀 ثبت آگهی
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
