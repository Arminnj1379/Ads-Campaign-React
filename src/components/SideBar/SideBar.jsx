import React, { useEffect, useState } from "react";
import { getAllCategories } from "../../api/SideBarService";

function Sidebar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      debugger
      const res = await getAllCategories();
      setCategories(res.data);
    };
    fetchCategories();
  }, []);
  return (
    <aside className="w-64 bg-gray-800 p-4 rounded shadow-md sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto">
      <h3 className="text-lg font-bold mb-4">دسته‌ها</h3>
      <ul className="space-y-2 text-sm">
        {categories.map((cat) => (
          <li key={cat.id}>{cat.name}</li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
