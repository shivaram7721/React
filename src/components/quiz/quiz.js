import styles from "./quiz.module.css";
// import { Questions } from './questions/questions'
import { useState, useRef } from "react";

const questionsData = [
  {
    question: "What is React.js",
    options: [
      "Open-source JavaScript back-end library",
      "JavaScript front-end library to create a database",
      "Free and open-source JavaScript front-end library",
      "None of the mentioned",
    ],
    correctAnswer: "Free and open-source JavaScript front-end library",
  },
  {
    question: "React.js is written in which of the following language?",
    options: ["C", "C++", "JavaScript", "Java"],
    correctAnswer: "JavaScript",
  },
  {
    question: " How many elements can a valid react component return?",
    options: [
      " React doesn't return element",
      "1 Element",
      "More than 1 element",
      "None of the mentioned",
    ],
    correctAnswer: "1 Element",
  },
  {
    question:
      "Which of the following command is used to Install create-react-app",
    options: [
      "npm install create-react-app",
      "npm install -f create-react-app",
      "npm install -g create-react-app",
      "install -g create-react-app",
    ],
    correctAnswer: "npm install -g create-react-app",
  },
  {
    question: "Which of the following is method is not a part of ReactDOM?",
    options: [
      "ReactDOM.hydrate()",
      "ReactDOM.destroy()",
      "ReactDOM.createPortal()",
      "All of the mentioned",
    ],
    correctAnswer: "ReactDOM.destroy()",
  },
  {
    question: "Which of the following is correct about prop in react?",
    options: [
      "Can be changed inside another component",
      "Can be changed inside the component",
      "Cannot be changed in the component",
      "All of the mentioned",
    ],
    correctAnswer: "Cannot be changed in the component",
  },
  {
    question:
      " Which of the following is used to pass data to a component from outside in React?",
    options: ["props", "render with arguments", "setState", "PropTypes"],
    correctAnswer: "props",
  },
  {
    question: "Which of the following is correct about JavaScript?",
    options: [
      "JavaScript is an Object-Based language",
      "JavaScript is Assembly-language",
      "JavaScript is an Object-Oriented language",
      "JavaScript is a High-level language",
    ],
    correctAnswer: "JavaScript is an Object-Based language",
  },
  {
    question:
      "Arrays in JavaScript are defined by which of the following statements?",
    options: [
      "It is an ordered list of values",
      "It is an ordered list of objects",
      "It is an ordered list of string",
      "It is an ordered list of functions",
    ],
    correctAnswer: "It is an ordered list of values",
  },
  {
    question: "Which of the following is not javascript data types?",
    options: [
      "Null type",
      "Undefined type",
      "Number type",
      "All of the mentioned",
    ],
    correctAnswer: "All of the mentioned",
  },
];

export function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const ref = useRef()
  const [showResult, setShowResult] = useState(false)
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { question, options } = questionsData[currentQuestion];

  function handleNext() {
    setCurrentQuestion(currentQuestion + 1);
    setResult((currentQuestion) =>
      ref.current.value = selectedAnswer
        ? {
            ...currentQuestion,
            score: currentQuestion.score + 2,
            correctAnswers: currentQuestion.correctAnswers + 1,
          }
        : {
            ...currentQuestion,
            wrongAnswers: currentQuestion.wrongAnswers + 1,
          }
    );

    if (currentQuestion !== questionsData.length - 1) {
        setCurrentQuestion(currentQuestion+1)
      } else {
        setCurrentQuestion(0)
        setShowResult(true)
      }

      setSelectedAnswerIndex(null)
  }

  function handleAnswer(answer, index) {
    setSelectedAnswerIndex(index)
    
    // console.log(selectedAnswerIndex)
    if (answer === questionsData[currentQuestion].correctAnswer) {
      ref.current.value = setSelectedAnswer(true);
    } else {
      ref.current.value = setSelectedAnswer(false);
    }
    
  }
  
  console.log(selectedAnswer);

  function handleRestart() {
    setCurrentQuestion(0)
    setSelectedAnswer('')
    setSelectedAnswerIndex(null)
    setShowResult(false)
    setResult({
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    })
  }

  return (
    <div className={styles.container}>
        {!showResult ? (
      <div className={styles.quizContainer}>
        
        <h1>Question({currentQuestion + 1})</h1>
        <p>{question}</p>

        <ul className={styles.options}>
          {options.map((answer, index) => (
            <li ref={ref} onClick={() => handleAnswer(answer, index)} key={index}
            className={(selectedAnswerIndex === index) ? styles.selectOption : styles.list}>
              {answer}
            </li>
          ))}
        </ul>

        <button  className={styles.nextBtn} onClick={handleNext} disabled={selectedAnswerIndex === null}>{currentQuestion === questionsData.length - 1 ? "Finish" : "Next"}</button>
      </div> ) : (
        <div className={styles.result}>
        {result.correctAnswers >= 6 ? <h1>Passed</h1> : <button onClick={handleRestart}>Restart</button>}
        <h3>Result</h3>
        <p>
          Total Question: <span>{questionsData.length}</span>
        </p>
        <p>
          Total Score:<span> {result.score}</span>
        </p>
        <p>
          Correct Answers:<span> {result.correctAnswers}</span>
        </p>
        <p>
          Wrong Answers:<span> {result.wrongAnswers}</span>
        </p>
      </div>
      )}
    </div>
  )
}