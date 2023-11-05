import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TrackPage.css";

const Quiz = ({ trackId, trackName }) => {
  const [quizData, setQuizData] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [rightAnswer, setRightAnswer] = useState("");
  const [quizActive, setQuizActive] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);

  useEffect(() => {
    (async () => {
      const getQuizData = await axios.get(
        `http://db.eqduxbbhxqyrdgkaieul.supabase.co/trackQuiz/${trackId}`
        // `http://localhost:4000/trackQuiz/${trackId}`
      );
      const data = getQuizData.data;
      setQuizData(data);
      setCurrentQuestion(data[0]);
      setRightAnswer(null);
    })();
  }, []);

  const onNext = () => {
    setRightAnswer(null);
    if (questionNumber < 3) {
      setQuestionNumber(questionNumber + 1);
      setCurrentQuestion(quizData[questionNumber]);
    } else {
      setQuestionNumber(1);
      setCurrentQuestion(quizData[0]);
      setQuizActive(false);
    }
  };

  const handleAnswerClick = (answer) => {
    const find = currentQuestion.answers.find(
      (answerObj) => answerObj.isCorrect
    );
    const retrieveAnswer = find.answer;
    answer === retrieveAnswer ? setRightAnswer(true) : setRightAnswer(false);
  };

  return (
    <section className="quiz-container">
      {!quizActive ? (
        <>
          <h3 className="quiz-intro">
            Test your knowledge about{" "}
            <span className="track-title quiz-intro">{trackName}</span>
          </h3>
          <div className="button-container">
            <button
              className="quiz-btn quiz-start-btn"
              onClick={() => setQuizActive(true)}
            >
              Start
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="quiz">
            <div className="question-container">
              <p className="question-status">
                Question{" "}
                <span className="question-number question-status">
                  {questionNumber + " "}
                </span>
                of 3:
              </p>
              <p className="quiz-question">{currentQuestion.question}</p>
              <div className="quiz-answers">
                {currentQuestion.answers.map((answerObj, index) => (
                  <button
                    className={`answer-btn ${
                      rightAnswer !== null && answerObj.isCorrect
                        ? "correct"
                        : rightAnswer !== null && !answerObj.isCorrect
                        ? "wrong"
                        : ""
                    }`}
                    onClick={() => handleAnswerClick(answerObj.answer)}
                    key={index}
                  >
                    {answerObj.answer}
                  </button>
                ))}
              </div>
            </div>
            <div className="button-container">
              <button className="quiz-btn quiz-next-btn" onClick={onNext}>
                {questionNumber === 3 ? "Finish" : "Next"}
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Quiz;
