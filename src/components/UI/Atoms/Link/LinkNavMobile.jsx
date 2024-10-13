import { Link } from "react-router-dom";

export default function LinkNavMobile({ link, name }) {
  return (
    <>
      <Link
        to={link}
        className="text-white hover:text-[#FFD800] hover:scale-110 transition-all duration-300"
      >
        {name}
      </Link>
    </>
  );
}
