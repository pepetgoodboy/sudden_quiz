import { Link } from "react-router-dom";

export default function Button({ onClick, link, name, variant }) {
  return (
    <>
      <Link to={link}>
        <button
          onClick={onClick}
          type="button"
          className={`px-8 py-[10px] bg-secondaryhover hover:bg-[#ffae00] ${variant} rounded-2xl`}
        >
          {name}
        </button>
      </Link>
    </>
  );
}
