import React, { useEffect, useState } from "react";
import { addAdmin, deleteUser, getUsers } from "../../api/userService";
import UserTable from "../../components/Admin/UserTable";

export default function UserManagement() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data); // چون تو سرویس احتمالا axios استفاده کردی
    } catch (err) {
      console.error("خطا در دریافت کاربران:", err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("آیا مطمئنی که می‌خوای این کاربر حذف بشه؟")) return;

    try {
      await deleteUser(id);
      setUsers(users.filter((u) => u.id !== id));
    } catch (err) {
      console.error("خطا در حذف کاربر:", err);
    }
  };

  const handleToggleAdmin = async (id, role) => {
    try {
      if (role === "Admin") {
        // 🔹 اگه ادمین هست، برگردون به یوزر
        await addAdmin(id, "User");
        loadUsers();
      } else {
        // 🔹 اگه یوزره، ادمینش کن
        await addAdmin(id, "Admin");
        loadUsers();
      }
    } catch (err) {
      console.error("خطا در تغییر نقش کاربر:", err);
    }
  };

  return (
    <div className="p-8">
      <UserTable
        users={users}
        onDelete={handleDelete}
        onToggleAdmin={handleToggleAdmin}
      />
    </div>
  );
}
