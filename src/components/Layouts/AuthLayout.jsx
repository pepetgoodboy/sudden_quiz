import Logo from "../../assets/logo/quiz.png";
import ButtonAuth from "../UI/Atoms/Button/ButtonAuth";
import InputAuth from "../UI/Atoms/Input/InputAuth";
import LabelAuth from "../UI/Atoms/Label/LabelAuth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export default function AuthLayout({ title }) {
  const router = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post("https://fakestoreapi.com/auth/login", {
        username,
        password,
      });
      if (response.status === 200) {
        setToken(localStorage.setItem("token", response.data.token));
        router("/");
      } else {
        toast.error("Username or password is incorrect");
        setIsLoading(false);
      }
    } catch (error) {
      toast.error("Username or password is incorrect");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      router("/");
    }
  }, [token]);

  return (
    <>
      <div className="w-11/12 min-h-screen flex justify-center items-center mx-auto">
        <div className="flex justify-center items-center flex-col gap-6 font-poppins">
          <img src={Logo} width={60} height={60} alt="Logo" />
          <div className="flex text-center">
            <h4 className="text-3xl font-bold font-jakarta">{title}</h4>
          </div>
          <form
            onSubmit={handleLogin}
            name="login"
            id="login"
            className="py-8 px-12 border border-gray-200 border-t-4 border-t-[#fee600] rounded-xl flex flex-col gap-6 text-gray-700"
          >
            <div className="flex flex-col gap-1 text-sm">
              <LabelAuth htmlFor="username" text="Username" />
              <InputAuth
                type="username"
                id="username"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1 text-sm">
              <LabelAuth htmlFor="password" text="Password" />
              <InputAuth
                type="password"
                id="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <InputAuth type="checkbox" id="remember" name="remember" />
              <p className="text-xs md:text-sm">
                I agree to the <span className="text-primary">terms</span> dan{" "}
                <span className="text-primary">conditions</span>
              </p>
            </div>
            <ButtonAuth isLoading={isLoading} name="Login" />
          </form>
        </div>
      </div>
    </>
  );
}
