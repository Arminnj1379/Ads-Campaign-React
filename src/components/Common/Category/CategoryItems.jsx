import * as Icons from "lucide-react";
import { Link } from "react-router-dom";

const CategoryItem = ({ name, iconClass, to = "#", onClick }) => {
  const LucideIcon = Icons[iconClass] || Icons.Circle; // fallback icon

  return (
    <Link
      onClick={onClick}
      to={to}
      className="flex items-center gap-2 text-gray-500 font-bold text-sm 
                 hover:text-white hover:bg-neutral-700 rounded-md px-2 py-1 transition-colors duration-200"
    >
      <LucideIcon className="w-5 h-5 text-gray-400 hover:text-white transition-colors duration-200" />
      {name}
    </Link>
  );
};

export default CategoryItem;
