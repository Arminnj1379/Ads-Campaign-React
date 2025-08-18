import React from "react";
import { Card, CardContent, Button } from "../SimpleUI/SimpleUI";

import { Trash2, UserPlus, UserMinus } from "lucide-react";

const UserTable = ({ users, onDelete, onToggleAdmin }) => {
  return (
    <Card className="w-full shadow-xl rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800">
      <CardContent className="p-6">
        <h2 className="flex items-center gap-2 text-2xl font-bold mb-6 text-white tracking-wide">
          <span className="text-gray-400">👥</span>
          مدیریت کاربران
        </h2>

        <div className="overflow-x-auto rounded-xl shadow-inner">
          <table className="min-w-full border-collapse overflow-hidden rounded-xl">
            <thead>
              <tr className="bg-gray-700/80 backdrop-blur text-center">
                <th className="p-4 text-sm font-semibold text-gray-200">
                  نام کاربری
                </th>
                <th className="p-4 text-sm font-semibold text-gray-200">
                  ایمیل
                </th>
                <th className="p-4 text-sm font-semibold text-gray-200">
                  شماره تلفن
                </th>
                <th className="p-4 text-sm font-semibold text-gray-200">نقش</th>
                <th className="p-4 text-sm font-semibold text-gray-200">
                  عملیات
                </th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, index) => (
                <tr
                  key={user.id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-800/80" : "bg-gray-700/70"
                  } border-b border-gray-700 hover:bg-gray-600/60 transition-all duration-300`}
                >
                  <td className="p-4 text-sm text-gray-100 text-center">
                    {user.userName}
                  </td>
                  <td className="p-4 text-sm text-gray-100 text-center">
                    {user.email}
                  </td>
                  <td className="p-4 text-sm text-gray-100 text-center">
                    {user.phoneNumber}
                  </td>
                  <td className="p-4 text-sm font-medium text-center">
                    {user.role === "Admin" ? (
                      <span className="px-3 py-1 bg-green-800/70 text-green-300 rounded-full text-xs font-semibold shadow-sm">
                        ادمین
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-gray-600/70 text-gray-200 rounded-full text-xs font-semibold shadow-sm">
                        کاربر
                      </span>
                    )}
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2 items-center justify-center">
                      {/* حذف */}
                      <Button
                        size="sm"
                        onClick={() => onDelete(user.id)}
                        className="flex items-center gap-1 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white border border-red-500 rounded-lg shadow-md transition-all duration-300"
                      >
                        <Trash2 size={16} /> حذف
                      </Button>

                      {/* تغییر نقش */}
                      {user.role === "Admin" ? (
                        <Button
                          size="sm"
                          onClick={() => onToggleAdmin(user.id)}
                          className="flex items-center gap-1 text-red-300 border border-red-400 rounded-lg hover:bg-red-900/70 hover:text-red-100 transition-all duration-300 shadow-sm"
                        >
                          <UserMinus size={16} /> حذف ادمین
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          onClick={() => onToggleAdmin(user.id)}
                          className="flex items-center gap-1 text-blue-300 border border-blue-400 rounded-lg hover:bg-blue-900/70 hover:text-blue-100 transition-all duration-300 shadow-sm"
                        >
                          <UserPlus size={16} /> ادمین کردن
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserTable;
