import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Clock3,
  ChevronLeft,
  ChevronRight,
  LoaderCircle,
} from "lucide-react";
import axios from "axios";
const fallbackQuestions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlink Text Management Language",
      "Home Tool Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "Which language is mainly used to style web pages?",
    options: ["HTML", "CSS", "JavaScript", "SQL"],
    answer: "CSS",
  },
  {
    question: "Which hook is used to manage state in React?",
    options: ["useEffect", "useState", "useRef", "useMemo"],
    answer: "useState",
  },
  {
    question: "Which HTTP method is commonly used to retrieve data?",
    options: ["POST", "GET", "PUT", "DELETE"],
    answer: "GET",
  },
  {
    question: "Which database is commonly used with the MERN stack?",
    options: ["MongoDB", "MySQL", "Oracle", "SQLite"],
    answer: "MongoDB",
  },
  {
    question: "What does API stand for?",
    options: [
      "Application Programming Interface",
      "Application Process Integration",
      "Advanced Programming Internet",
      "Automated Program Interaction",
    ],
    answer: "Application Programming Interface",
  },
  {
    question: "Which symbol represents strict equality in JavaScript?",
    options: ["=", "==", "===", "!="],
    answer: "===",
  },
  {
    question: "Which method creates a new array by transforming every element?",
    options: ["filter()", "map()", "find()", "forEach()"],
    answer: "map()",
  },
  {
    question: "Which method filters elements from an array?",
    options: ["map()", "filter()", "reduce()", "findIndex()"],
    answer: "filter()",
  },
  {
    question: "Which command starts a Vite development server?",
    options: [
      "npm start",
      "npm run dev",
      "npm run server",
      "node start",
    ],
    answer: "npm run dev",
  },
  {
    question: "Which status code normally represents a successful HTTP request?",
    options: ["200", "301", "404", "500"],
    answer: "200",
  },
  {
    question: "Which HTTP status code means 'Not Found'?",
    options: ["200", "201", "404", "500"],
    answer: "404",
  },
  {
    question: "Which package manager is commonly used with Node.js?",
    options: ["npm", "pip", "composer", "gem"],
    answer: "npm",
  },
  {
    question: "What is Node.js primarily used for?",
    options: [
      "Running JavaScript outside the browser",
      "Styling web pages",
      "Creating database tables",
      "Editing images",
    ],
    answer: "Running JavaScript outside the browser",
  },
  {
    question: "Which keyword declares a block-scoped variable that can be reassigned?",
    options: ["const", "let", "var", "static"],
    answer: "let",
  },
  {
    question: "Which keyword declares a variable that cannot be reassigned?",
    options: ["let", "var", "const", "static"],
    answer: "const",
  },
  {
    question: "Which React feature allows navigation between different pages?",
    options: [
      "React Router",
      "React Compiler",
      "React DOM",
      "React Query",
    ],
    answer: "React Router",
  },
  {
    question: "Which file commonly contains the main React application component in a Vite project?",
    options: ["App.jsx", "index.css", "package.json", "vite.config.js"],
    answer: "App.jsx",
  },
  {
    question: "Which command installs a package using npm?",
    options: [
      "npm install package-name",
      "npm add package-name",
      "node install package-name",
      "npm package package-name",
    ],
    answer: "npm install package-name",
  },
  {
    question: "Which React hook is commonly used for side effects?",
    options: ["useState", "useEffect", "useRef", "useId"],
    answer: "useEffect",
  },
];
function Quiz() {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20 * 60);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fetch questions
  useEffect(() => {
  const fetchQuestions = async () => {
    try {
      const response = await axios.get(
        "https://opentdb.com/api.php?amount=20&type=multiple"
      );

      if (response.data.response_code === 0) {
        const formattedQuestions = response.data.results.map((item) => ({
          question: decodeHTML(item.question),

          options: shuffleArray([
            ...item.incorrect_answers.map(decodeHTML),
            decodeHTML(item.correct_answer),
          ]),

          answer: decodeHTML(item.correct_answer),
        }));

        setQuestions(formattedQuestions);
      } else {
        setQuestions(fallbackQuestions);
      }
    } catch (error) {
      console.log("API unavailable. Using local questions.");

      setQuestions(fallbackQuestions);
    } finally {
      setLoading(false);
    }
  };

  fetchQuestions();
}, []);

  // Decode API HTML entities
  const decodeHTML = (text) => {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = text;
    return textArea.value;
  };

  // Shuffle answers
  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  // Timer
  useEffect(() => {
    if (loading || questions.length === 0) return;

    if (timeLeft <= 0) {
      finishQuiz(score);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((previous) => previous - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, loading, questions.length]);

  // Format timer
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  // Finish quiz
  const finishQuiz = (finalScore) => {
    navigate("/result", {
      state: {
        score: finalScore,
        total: questions.length,
      },
    });
  };

  // Next question
  const handleNext = () => {
    if (!selectedAnswer) return;

    const isCorrect =
      selectedAnswer === questions[currentQuestion].answer;

    const newScore = isCorrect ? score + 1 : score;

    setScore(newScore);

    if (currentQuestion === questions.length - 1) {
      finishQuiz(newScore);
      return;
    }

    setCurrentQuestion((previous) => previous + 1);
    setSelectedAnswer(null);
  };

  // Previous question
  const handlePrevious = () => {
    if (currentQuestion === 0) return;

    setCurrentQuestion((previous) => previous - 1);
    setSelectedAnswer(null);
  };

  // Loading
  if (loading) {
    return (
      <div className="quiz-loading">
        <LoaderCircle className="loading-icon" size={32} />

        <h2>Preparing your quiz</h2>

        <p>Fetching questions...</p>
      </div>
    );
  }

  // Error
  if (error || questions.length === 0) {
    return (
      <div className="quiz-loading">
        <h2>Unable to load the quiz</h2>

        <p>Please refresh the page and try again.</p>

        <button onClick={() => window.location.reload()}>
          Try Again
        </button>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="quiz-page">

      {/* HEADER */}

      <header className="quiz-header">

        <div className="brand">
          <div className="brand-mark">Q</div>
          <span>QUIZ MASTER</span>
        </div>

        <div
          className={`quiz-timer ${
            timeLeft < 60 ? "danger" : ""
          }`}
        >
          <Clock3 size={18} strokeWidth={1.8} />

          <span>{formatTime(timeLeft)}</span>
        </div>

      </header>

      {/* MAIN */}

      <main className="quiz-container">

        <div className="quiz-top">

          <span>
            QUESTION{" "}
            {String(currentQuestion + 1).padStart(2, "0")}
          </span>

          <span>
            {questions.length} QUESTIONS
          </span>

        </div>

        {/* PROGRESS */}

        <div className="progress">

          <div
            className="progress-fill"
            style={{
              width: `${
                ((currentQuestion + 1) /
                  questions.length) *
                100
              }%`,
            }}
          />

        </div>

        {/* QUESTION CARD */}

        <section className="question-card">

          <p className="question-number">
            {String(currentQuestion + 1).padStart(2, "0")} /{" "}
            {String(questions.length).padStart(2, "0")}
          </p>

          <h1>{question.question}</h1>

          <div className="answers">

            {question.options.map((option, index) => (

              <button
                className={`answer ${
                  selectedAnswer === option
                    ? "selected"
                    : ""
                }`}
                key={option}
                onClick={() =>
                  setSelectedAnswer(option)
                }
              >

                <span className="answer-letter">
                  {String.fromCharCode(65 + index)}
                </span>

                <span>{option}</span>

              </button>

            ))}

          </div>

        </section>

        {/* NAVIGATION */}

        <div className="quiz-navigation">

          <button
            className="previous-btn"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            <ChevronLeft size={18} />
            Previous
          </button>

          <button
            className="next-btn"
            onClick={handleNext}
            disabled={!selectedAnswer}
          >
            {currentQuestion === questions.length - 1
              ? "Finish Quiz"
              : "Next Question"}

            <ChevronRight size={18} />
          </button>

        </div>

      </main>

    </div>
  );
}

export default Quiz;