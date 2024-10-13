import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home.jsx";
import Quiz from "./components/Pages/Quiz.jsx";
import About from "./components/Pages/About.jsx";
import Login from "./components/Pages/Login.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./components/Pages/NotFound.jsx";

export default function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
