import React from "react";
import "./Question.css";
import "@fortawesome/fontawesome-free/css/all.css";

export default function Question({question,handleOptionClick} ) {
  
  let randoms = [];

  while(true) {
    let random = Math.floor(Math.random() * 3)+1;

    if (randoms.includes(random)) {
      continue;
    } else 
    {
      randoms.push(random);
    }
    if(randoms.length===3){
      break;
    }
  }

  console.log(question);

  let optionA=question.options[randoms[0]-1];
  let optionB=question.options[randoms[1]-1];
  let optionC=question.options[randoms[2]-1];
  return (
    <div className="quiz">
      <div className="q-frame">
        <h3>{question.question}</h3>
      </div>
      <div className="option-frame">
        <h4 onClick={(e)=>handleOptionClick(optionA,question.answer,e)} className="option">A: {optionA}</h4>
        <h4 onClick={(e)=>handleOptionClick(optionB,question.answer,e)} className="option">B: {optionB}</h4>
        <h4 onClick={(e)=>handleOptionClick(optionC,question.answer,e)} className="option">C: {optionC}</h4>
      </div>
      {/* <div className="btn-frame">
       <i onClick={handleNextBtn}  className="fa-solid fa-arrow-right-long arrow-style"></i>
      </div> */}
    </div>
  );
}
