import logo from "./logo.svg";
import "./App.css";
import Equation from "./Equation.js"
import {useState} from 'react'

const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;

const App = () => {

  const [scores, setScores] = useState({numCorrect: 0, numQuestions: 0})

  const answer = (res) => {
    const newScores = {...scores, 
      numCorrect: res == value1 + value2 + value3 ? scores.numCorrect + 1 : scores.numCorrect,
      numQuestions: scores.numQuestions + 1
    }
    setScores(newScores);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="game">
        <h2>Mental Math</h2>

        <Equation a={value1} b={value2} c={value3} x={proposedAnswer}/>

        <button>True</button>
        <button>False</button>
        <p className="text">
          Your Score: {scores.numCorrect}/{scores.numQuestions}
        </p>
      </div>
    </div>
  );
};

export default App;
