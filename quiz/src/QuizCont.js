import React, { useState } from "react";
import "./QuizCont.css";
import Question from "./Question";
let count = 0;

export default function QuizCont({ quizQuestions }) {
  const [question, setQuestion] = useState(quizQuestions[0]);

  function handleOptionClick(clickedOption, answer,event) {
    console.log(clickedOption);
    let correctElement = null;
    let options = document.getElementsByClassName("option");
    if (clickedOption === answer) {
      for (let i = 0; i < options.length; i++) {
        let element = options[i];
          
        if (element.innerHTML.split(":")[1].trim() === answer) {
          console.log("yeah");
          correctElement = element;
          element.classList.add("correct-answer");
        }
      }

      setTimeout(() => {
        if (count < 9) {
          count++;
          setQuestion(quizQuestions[count]);
          correctElement.classList.remove("correct-answer");
          for (let i = 0; i < options.length; i++) {
            const element = options[i];
            element.classList.remove("wrong-answer");
          }
        }
      }, 1500);
    }
    else{
      console.log("wrong");
      event.target.classList.add("wrong-answer");
    }
  }
  return (
    <div className="quiz-cont">
       <div className="result">Question {count+1}</div>
      <Question
        question={question}
        handleOptionClick={handleOptionClick}
      ></Question>
    </div>
  );
}
