import Typewriter from "typewriter-effect";

export default function HeroSection() {
  return (
    <>
      <div className="w-11/12 2xl:w-5/6 mx-auto">
        <div
          className="flex rounded-3xl border border-gray-200 bg-primary bg-center bg-cover bg-no-repeat bg-blend-screen justify-center items-center h-[80svh] lg:h-[110svh]"
          style={{
            backgroundImage: `url(./bg-home.webp)`,
          }}
        >
          <div className="flex flex-col space-y-8 text-primary">
            <div className="flex justify-center w-11/12 sm:w-5/6 xl:w-full mx-auto leading-tight text-center font-extrabold font-jakarta text-4xl md:text-5xl lg:text-7xl -mt-0 md:-mt-20">
              <Typewriter
                options={{
                  strings: ["SUDDEN QUIZ"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <div className="flex w-11/12 md:w-full mx-auto justify-center">
              <p className="text-center font-medium">
                "Test your knowledge with random trivia questions from a variety
                of categories"
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
