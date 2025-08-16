import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Button,
} from "../SimpleUI/SimpleUI";

import { Trash2, UserPlus, UserMinus } from "lucide-react";

const UserTable = ({ users, onDelete, onToggleAdmin }) => {
  return (
    <Card className="w-full shadow-lg rounded-2xl border border-gray-200">
      <CardContent className="p-6">
        <h2 className="text-lg font-bold mb-4 text-gray-700">مدیریت کاربران</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-100 text-right">
                <th className="p-3 text-sm font-semibold text-gray-600">
                  نام کاربری
                </th>
                <th className="p-3 text-sm font-semibold text-gray-600">
                  ایمیل
                </th>
                <th className="p-3 text-sm font-semibold text-gray-600">
                  شماره تلفن
                </th>
                <th className="p-3 text-sm font-semibold text-gray-600">نقش</th>
                <th className="p-3 text-sm font-semibold text-gray-600">
                  عملیات
                </th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, index) => (
                <tr
                  key={user.id}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } border-b hover:bg-gray-100 transition`}
                >
                  <td className="p-3 text-sm text-gray-700">{user.userName}</td>
                  <td className="p-3 text-sm text-gray-700">{user.email}</td>
                  <td className="p-3 text-sm text-gray-700">
                    {user.phoneNumber}
                  </td>
                  <td className="p-3 text-sm font-medium">
                    {user.role === "Admin" ? (
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                        ادمین
                      </span>
                    ) : (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                        کاربر
                      </span>
                    )}
                  </td>
                  <td className="p-3 flex gap-2">
                    {/* حذف */}
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => onDelete(user.id)}
                      className="flex items-center gap-1"
                    >
                      <Trash2 size={16} /> حذف
                    </Button>

                    {/* تغییر نقش */}
                    {user.role === "Admin" ? (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onToggleAdmin(user.id)}
                        className="flex items-center gap-1 text-red-600 border-red-300 hover:bg-red-50"
                      >
                        <UserMinus size={16} /> حذف ادمین
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onToggleAdmin(user.id)}
                        className="flex items-center gap-1 text-blue-600 border-blue-300 hover:bg-blue-50"
                      >
                        <UserPlus size={16} /> ادمین کردن
                      </Button>
                    )}
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
