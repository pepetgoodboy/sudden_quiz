import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="pt-8">
        <div className="mt-6 px-4 sm:px-16 py-16 bg-[#fafafa] font-roboto">
          <div className="flex flex-col gap-8 lg:gap-32 lg:grid lg:grid-cols-[4fr,1fr] lg:justify-between">
            <div className="flex flex-col gap-4">
              <h4 className="text-xl text-primary font-semibold font-jakarta">
                Sudden Quiz
              </h4>
              <p className="text-gray-700 text-justify">
                Sudden Quiz is a dynamic, trivia-based quiz platform where you
                can challenge yourself with randomly generated questions across
                multiple categories. Built using React.js and powered by the
                Open Trivia Database (OpenTDB), Sudden Quiz delivers an engaging
                and interactive experience. Whether you're a trivia buff or just
                looking for a fun way to pass the time, Sudden Quiz offers a
                fresh and unpredictable test of knowledge every time you play.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-xl font-medium font-jakarta">Direct Link</h4>
              <div className="flex flex-col gap-1">
                <Link to="/" className="text-gray-700 hover:text-primary">
                  Home
                </Link>
                <Link to="/about" className="text-gray-700 hover:text-primary">
                  About
                </Link>
                <Link to="/quiz" className="text-gray-700 hover:text-primary">
                  Quiz
                </Link>
                <Link to="/login" className="text-gray-700 hover:text-primary">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto bg-[#fafafa]">
          <div className="flex justify-center py-6 border border-t-gray-200">
            <p className="text-center text-gray-700 text-sm">
              Copyright &copy; SUDDEN QUIZ 2024
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
