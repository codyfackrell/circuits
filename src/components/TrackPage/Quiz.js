import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TrackPage.css";

const Quiz = ({ trackId, trackName }) => {
  const [quizData, setQuizData] = useState({});
  const [quizActive, setQuizActive] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);

  useEffect(() => {
    (async () => {
      const getQuizData = await axios.get(
        `http://localhost:4000/trackQuiz/${trackId}`
      );
      const data = getQuizData.data;
      setQuizData(data);
    })();
  }, []);

  const onNext = () => {
    if (questionNumber < 3) {
      setQuestionNumber(questionNumber + 1);
    } else {
      setQuestionNumber(1);
      setQuizActive(false);
    }
    setQuizData(quizData[questionNumber]);
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
              {/* DISPLAY ONE QUESTION */}
              <p className="quiz-question">{quizData.question}</p>
              <form className="quiz-answers">
                {quizData.answers.map((answerObj) => (
                  <button className="answer-btn">{answerObj.answer}</button>
                ))}
              </form>
              {/* DISPLAY ALL QUESTIONS AT ONCE */}
              {/* {quizData.map((questionObj) => (
                <>
                  <p className="quiz-question">{questionObj.question}</p>
                  <form className="quiz-answers">
                    {questionObj.answers.map((answerObj) => (
                      <button className="answer-btn">{answerObj.answer}</button>
                    ))}
                  </form>
                </>
              ))} */}


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
