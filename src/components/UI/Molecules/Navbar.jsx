import Logo from "../../../assets/logo/quiz.png";
import { CgMenu } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";
import Button from "../Atoms/Button/Button";
import LinkNavDesktop from "../Atoms/Link/LinkNavDesktop";
import LinkNavMobile from "../Atoms/Link/LinkNavMobile";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white font-jakarta">
        <nav className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex justify-between h-28">
            <div className="flex space-x-28">
              <div className="flex flex-col items-center justify-center">
                <img
                  src={Logo}
                  alt="logo_suddenQuiz"
                  className="w-auto h-8 md:h-10"
                />
                <div>
                  <p className="ml-1 text-[10px] md:text-xs font-jakarta font-semibold text-gray-900 text-center">
                    Sudden Quiz
                  </p>
                </div>
              </div>
              <div className="hidden lg:ml-6 lg:flex lg:items-center lg:space-x-8 font-medium">
                <LinkNavDesktop link="/" name="Home" />
                <LinkNavDesktop link="/about" name="About" />
                <LinkNavDesktop link="/quiz" name="Quiz" />
              </div>
            </div>
            <div className="hidden lg:flex items-center">
              <Button
                link="/login"
                onClick={token ? handleLogout : () => {}}
                name={token ? "Logout" : "Login"}
                variant="text-white font-bold"
              />
            </div>
            {/* Button Menu */}
            <div
              onClick={toggleMenu}
              className="flex lg:hidden justify-center items-center cursor-pointer"
            >
              <CgMenu className="w-6 h-6 text-gray-500" />
            </div>
          </div>
        </nav>
        {/* Mobile Menu */}
        <div
          className={`fixed lg:hidden top-0 left-0 w-full h-screen bg-black transform ${
            isOpen ? "translate-y-0 opacity-90" : "-translate-y-full opacity-0"
          } transition-all duration-300 ease-in-out`}
        >
          <div className="absolute top-0 right-0 p-8 md:p-10">
            <IoClose
              onClick={toggleMenu}
              className="w-6 h-6 text-gray-300 hover:cursor-pointer hover:rotate-90 hover:text-[#FFD800] transition duration-300 ease-in"
            />
          </div>
          <div className="flex flex-col justify-center h-screen items-center gap-14">
            <h3 className="text-lg text-gray-700">SUDDEN QUIZ</h3>
            <div className="flex flex-col justify-center items-center gap-7 font-jakarta text-3xl font-medium font-2xl">
              <LinkNavMobile link="/" name="Home" />
              <LinkNavMobile link="/about" name="About" />
              <LinkNavMobile link="/quiz" name="Quiz" />
            </div>
            <Button
              link="/login"
              onClick={token ? handleLogout : () => {}}
              name={token ? "Logout" : "Login"}
              variant="text-white font-bold"
            />
          </div>
        </div>
      </header>
    </>
  );
}
