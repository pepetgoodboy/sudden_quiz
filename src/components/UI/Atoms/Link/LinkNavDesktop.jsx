import { Link, useLocation } from "react-router-dom";

export default function LinkNavDesktop({ link, name }) {
  const location = useLocation();

  const isActive = location.pathname === link;

  return (
    <Link
      to={link}
      className={`text-gray-500 hover:border-[#FFD800] hover:text-gray-700 border-b-2 py-2 mt-1 ${
        isActive ? "border-[#FFD800] text-gray-700" : "border-transparent"
      }`}
    >
      {name}
    </Link>
  );
}
