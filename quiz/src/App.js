import "./App.css";
import QuizCont from "./QuizCont";

import { quizQuestions } from "./Data";

let mixedQuestions = [];
function App() {

  let questionCount = 10;

  while (true) {
    if(mixedQuestions.length===10)
    {break;}
    const random = Math.floor(Math.random() * questionCount) + 1;
    mixedQuestions.push(quizQuestions[random - 1]);
    quizQuestions.splice(random - 1, 1);
    questionCount--;
    if (questionCount === 0) {
      break;
    }
    console.log(questionCount)
  }

  console.log(mixedQuestions);

  return (
    <div className="app">
      <h1>Quiz</h1>
      <QuizCont quizQuestions={mixedQuestions}></QuizCont>
    </div>
  );
}

export default App;
