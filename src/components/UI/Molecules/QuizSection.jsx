import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "react-spinner-material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const QUIZ_TIME = 600;

export default function QuizSection() {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(QUIZ_TIME);
  const [userAnswers, setUserAnswers] = useState([]);

  const navigate = useNavigate();

  const checkAuth = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please login first");
      navigate("/login");
    }
    return token;
  };

  const decodeHtmlEntities = (text) => {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = text;
    return textArea.value;
  };

  const fetchQuestions = async () => {
    const token = checkAuth();
    if (!token) return;

    try {
      const response = await axios.get(
        "https://opentdb.com/api.php?amount=5&type=boolean"
      );
      if (response.data.response_code === 0) {
        const formattedQuizData = response.data.results.map(
          (question, index) => ({
            id: index + 1,
            type: question.type,
            difficulty: question.difficulty,
            category: question.category,
            question: decodeHtmlEntities(question.question),
            correct_answer: question.correct_answer,
            incorrect_answers: question.incorrect_answers,
            answers: ["True", "False"],
          })
        );
        setQuizData(formattedQuizData);
        saveToLocalStorage({
          quizData: formattedQuizData,
          timeLeft: QUIZ_TIME,
        });
      } else {
        console.log("Error fetching quiz data", response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const token = checkAuth();
    if (token) {
      const savedQuizState = loadFromLocalStorage();
      if (savedQuizState) {
        setQuizData(savedQuizState.quizData || []);
        setCurrentQuestion(savedQuizState.currentQuestion || 0);
        setScore(savedQuizState.score || 0);
        setTimeLeft(savedQuizState.timeLeft || QUIZ_TIME);
        setUserAnswers(savedQuizState.userAnswers || []);
      } else {
        fetchQuestions();
      }
    }
  }, []);

  useEffect(() => {
    if (!quizFinished && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          const newTime = prevTime - 1;
          saveToLocalStorage({ timeLeft: newTime });
          return newTime;
        });
      }, 1000);

      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      finishQuiz();
    }
  }, [quizFinished, timeLeft]);

  const handleAnswer = (answer) => {
    const isCorrect = answer === quizData[currentQuestion].correct_answer;
    const newScore = isCorrect ? score + 1 : score;
    const newUserAnswers = [
      ...userAnswers,
      { question: currentQuestion, answer, isCorrect },
    ];

    setScore(newScore);
    setUserAnswers(newUserAnswers);

    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      finishQuiz();
    }

    saveToLocalStorage({
      currentQuestion: currentQuestion + 1,
      score: newScore,
      userAnswers: newUserAnswers,
    });
  };

  const finishQuiz = () => {
    setQuizFinished(true);
    localStorage.removeItem("quizState");
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizFinished(false);
    setTimeLeft(QUIZ_TIME);
    setUserAnswers([]);
    fetchQuestions();
  };

  const saveToLocalStorage = (newState) => {
    try {
      const currentState = loadFromLocalStorage() || {};
      const updatedState = { ...currentState, ...newState };
      const serializableState = JSON.parse(JSON.stringify(updatedState));
      localStorage.setItem("quizState", JSON.stringify(serializableState));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  };

  const loadFromLocalStorage = () => {
    try {
      const savedState = localStorage.getItem("quizState");
      return savedState ? JSON.parse(savedState) : null;
    } catch (error) {
      console.error("Error loading from localStorage:", error);
      return null;
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const getResults = () => {
    const correct = userAnswers.filter((answer) => answer.isCorrect).length;
    const incorrect = userAnswers.filter((answer) => !answer.isCorrect).length;
    const unanswered = quizData.length - userAnswers.length;
    return { correct, incorrect, unanswered };
  };

  return (
    <>
      <div className="py-4 w-11/12 md:w-5/6 mx-auto font-poppins">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-jakarta text-primary font-medium">
              Sudden Quiz
            </h2>
            {!quizFinished && (
              <p className="text-xl">Time left: {formatTime(timeLeft)}</p>
            )}
          </div>
          <div className="md:w-1/2 mx-auto">
            {quizData.length > 0 && !quizFinished ? (
              <div>
                <h2 className="text-xl mb-4">
                  Question {currentQuestion + 1} of {quizData.length}
                </h2>
                <p className="mb-4">{quizData[currentQuestion].question}</p>
                <div className="flex flex-col gap-2">
                  {quizData[currentQuestion].answers.map((answer, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(answer)}
                      className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                    >
                      {answer}
                    </button>
                  ))}
                </div>
              </div>
            ) : quizFinished ? (
              <div className="text-center">
                <h2 className="text-2xl mb-4">Quiz Finished!</h2>
                <p className="text-xl mb-4">
                  Your score: {score} out of {quizData.length}
                </p>
                {(() => {
                  const { correct, incorrect, unanswered } = getResults();
                  return (
                    <div className="mb-4">
                      <p>Correct answers: {correct}</p>
                      <p>Incorrect answers: {incorrect}</p>
                      <p>Unanswered questions: {unanswered}</p>
                    </div>
                  );
                })()}
                <div className="flex gap-4 justify-center">
                  <button
                    onClick={restartQuiz}
                    className="bg-secondaryhover text-white font-semibold py-2 px-4 rounded hover:bg-[#ffae00]"
                  >
                    Restart Quiz
                  </button>
                  <Link to="/">
                    <button
                      onClick={finishQuiz}
                      className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600"
                    >
                      Finish
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-6 justify-center items-center h-[70svh]">
                <p className="text-center">Loading questions...</p>
                <Spinner visible={true} color="#5046e4" size={100} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
