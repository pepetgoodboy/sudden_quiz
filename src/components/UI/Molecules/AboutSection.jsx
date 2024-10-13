export default function AboutSection() {
  return (
    <>
      <div className="flex flex-col gap-8 text-center h-[60svh] pt-10 font-roboto">
        <h2 className="font-jakarta text-primary font-semibold text-3xl pb-4">
          What is Sudden Quiz?
        </h2>
        <div className="w-11/12 md:w-4/6 mx-auto space-y-6 text-lg md:text-xl">
          <p className="text-gray-700 text-justify md:indent-8">
            Sudden Quiz is a dynamic, trivia-based quiz platform where you can
            challenge yourself with randomly generated questions across multiple
            categories. Built using React.js and powered by the Open Trivia
            Database (OpenTDB), Sudden Quiz delivers an engaging and interactive
            experience. Whether you're a trivia buff or just looking for a fun
            way to pass the time, Sudden Quiz offers a fresh and unpredictable
            test of knowledge every time you play.
          </p>
          <p className="text-gray-700 text-justify md:indent-8">
            With an easy-to-use interface and real-time feedback, Sudden Quiz
            makes learning enjoyable and competitive. The random question
            generator ensures that no two quizzes are ever the same, keeping
            things exciting and challenging. Try your hand at various topics,
            track your progress, and invite friends to see who scores the
            highest. Dive into the world of trivia and sharpen your mind with
            Sudden Quiz today!
          </p>
        </div>
      </div>
    </>
  );
}
