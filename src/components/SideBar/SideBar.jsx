import React, { useEffect, useState } from "react";
import { getAllCategories } from "../../api/SideBarService";
import CategoryItem from "../Common/Category/CategoryItems";

function Sidebar({ onCategoryClick }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await getAllCategories();
      setCategories(res.data);
    };
    fetchCategories();
  }, []);
  return (
    <aside className="w-64 bg-neutral-800 p-4 rounded shadow-md sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto">
      <h3 className="text-sm mb-4 text-gray-300">دسته‌ها</h3>
      <ul className="space-y-6 font-bold text-sm text-gray-400">
        {categories.map((cat) => (
          <CategoryItem
            key={cat.id}
            name={cat.name}
            iconClass={cat.iconClass}
            onClick={() => onCategoryClick(cat.id)}
          />
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
