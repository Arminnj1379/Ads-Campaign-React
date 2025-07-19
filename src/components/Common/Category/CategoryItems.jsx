import * as Icons from "lucide-react";

const CategoryItem = ({ name, iconClass }) => {
  const LucideIcon = Icons[iconClass] || Icons.Circle; // fallback icon

  return (
    <li className="flex items-center gap-2 text-gray-500 font-bold text-sm">
      <LucideIcon className="w-5 h-5 text-gray-400" />
      {name}
    </li>
  );
};
export default CategoryItem;    