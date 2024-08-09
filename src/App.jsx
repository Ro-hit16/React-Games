// App.jsx
import  { useState } from "react";
import "./App.css";
import Choice from "./Component/Choice";
import stoneImg from "./images/stone.jpg";
import paperImg from "./images/paper.jpg";
import scissorImg from "./images/scissor.jpg";

const choices = ["stone", "paper", "scissor"];

const App = () => {
  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [message, setMessage] = useState("Select your choice");

  const choiceImages = {
    stone: stoneImg,
    paper: paperImg,
    scissor: scissorImg,
  };

  const handleClick = (userChoice) => {
    playGame(userChoice);
  };

  const genCompchoice = () => {
    const randIdx = Math.floor(Math.random() * 3);
    return choices[randIdx];
  };

  const drawGame = () => {
    setMessage("Game is Draw");
  };

  const showWinner = (userWin, compChoice, userChoice) => {
    if (userWin) {
      setUserScore(userScore + 1);
      setMessage(`You Win! ${userChoice} beats ${compChoice}`);
      document.getElementById("msg").style.backgroundColor = "green";
    } else {
      setCompScore(compScore + 1);
      setMessage(`You Lost! ${compChoice} beats ${userChoice}`);
      document.getElementById("msg").style.backgroundColor = "red";
    }
  };

  const playGame = (userChoice) => {
    const compChoice = genCompchoice();

    if (compChoice === userChoice) {
      drawGame();
    } else if (userChoice === "paper") {
      const userWin = compChoice === "scissor" ? false : true;
      showWinner(userWin, compChoice, userChoice);
    } else if (userChoice === "stone") {
      const userWin = compChoice === "scissor" ? true : false;
      showWinner(userWin, compChoice, userChoice);
    } else if (userChoice === "scissor") {
      const userWin = compChoice === "stone" ? false : true;
      showWinner(userWin, compChoice, userChoice);
    }
  };

  return (
    <div className="App">
      <h1>Stone Paper Scissor</h1>
      <div className="choices">
        {choices.map((choice) => (
          <Choice
            key={choice}
            id={choice}
            imgSrc={choiceImages[choice]}
            handleClick={handleClick}
          />
        ))}
      </div>

      <h3>Score</h3>
      <div className="score-card">
        <div className="user">
          <p id="userScore">{userScore}</p>
          <p>
            <b>You</b>
          </p>
        </div>
        <div className="computer">
          <p id="compScore">{compScore}</p>
          <p>
            <b>Computer</b>
          </p>
        </div>
      </div>
      <div className="msg-container">
        <p id="msg">{message}</p>
      </div>
    </div>
  );
};

export default App;
