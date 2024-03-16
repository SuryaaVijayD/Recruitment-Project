import React, { useState, useEffect } from "react";
import questionsData from "./questions.json";
import Header from "./Header";
import "./Component.css";
import Backbutton from "./Backbutton";
import { Link } from "react-router-dom";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function shuffleOptions(questions) {
  return questions.map((question) => {
    const options = shuffleArray([...question.options]);
    return { ...question, options };
  });
}

function Mcqsection() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [someDummyState, setSomeDummyState] = useState(false);

  useEffect(() => {
    const shuffledQuestions = shuffleOptions(
      shuffleArray(questionsData).slice(0, 10)
    );
    setQuestions(shuffledQuestions);
  }, []);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctOption) {
      setScore((prevScore) => prevScore + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      setShowScore(true);
    }
    setSomeDummyState((prevDummyState) => !prevDummyState);
    console.log(someDummyState);
  };

  const handleRestartQuiz = () => {
    const shuffledQuestions = shuffleOptions(
      shuffleArray(questionsData).slice(0, 10)
    );
    setQuestions(shuffledQuestions);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };
  const type = "MCQ Practice";

  return (
    <div>
      <div className="header-mcq">
        <Header />
      </div>
      <Backbutton score={score} type={type} />
      <div className="mcq-page">
        {showScore ? (
          <div className="result-container">
            <div>
              {score > 1 ? (
                <>
                  <h2>
                    Your Score: {score}/{questions.length}
                  </h2>
                  <h3>Congratulations! You passed the test.</h3>
                  <Link to="/ide-section" className="coding-btn">
                    Coding Test...
                  </Link>
                </>
              ) : (
                <>
                  <h2>
                    Your Score: {score}/{questions.length}
                  </h2>
                  <h3>Need To Take Test Once Again!!!</h3>
                  <button
                    className="mx-4 my-9  px-4 py-4 max-w-lg opt flex flex-wrap"
                    onClick={handleRestartQuiz}
                  >
                    Restart
                  </button>
                </>
              )}
            </div>
          </div>
        ) : (
          <div className="question-container">
            {questions[currentQuestion] ? (
              <div className=" quiz flex flex-col  justify-center items-center ">
                <h2>Question {currentQuestion + 1}</h2>
                <div className="bg-white w-3/5 flex flex-col   flex-wrap justify-center items-center my-2 py-6">
                  <p>
                    {currentQuestion + 1 + "."}
                    {questions[currentQuestion].question}
                  </p>

                  <div>
                    {questions[currentQuestion].options.map((option, index) => (
                      <div>
                        <button
                          className="btn"
                          key={index}
                          onClick={() => handleAnswerClick(option)}
                        >
                          {option}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Mcqsection;
