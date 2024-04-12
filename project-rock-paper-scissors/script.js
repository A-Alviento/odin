const SELECTION = ["rock", "paper", "scissors"];
const WINNING_SCORE = 5;

const getComputerChoice = () => {
  const compSelection = Math.floor(Math.random() * 3);

  return SELECTION[compSelection];
};

const playRound = (playerSelection, compSelection) => {
  let win;
  let tie;
  let resultMessage = "";
  let result = "";

  switch (playerSelection) {
    case "rock":
      compSelection === "scissors"
        ? (win = true)
        : compSelection === "paper"
        ? (win = false)
        : (tie = true);
      break;
    case "paper":
      compSelection === "rock"
        ? (win = true)
        : compSelection === "scissors"
        ? (win = false)
        : (tie = true);
      break;
    case "scissors":
      compSelection === "paper"
        ? (win = true)
        : compSelection === "rock"
        ? (win = false)
        : (tie = true);
      break;
  }

  if (tie) return "tie";

  resultMessage =
    "You " +
    (win
      ? "win, " + playerSelection + " beats " + compSelection + "!"
      : "lose, " + compSelection + " beats " + playerSelection + "!");
  result = win ? "playerWin" : "compWin";

  return result;
};

const btnContainer = document.querySelector("#btnContainer");
const scoreContainer = document.querySelector("#scoreContainer");

let playerSelection = "";
let playerScore = 0;
let compScore = 0;

const playerScoreText = document.createElement("span");
playerScoreText.textContent = "Player: " + playerScore;
const compScoreText = document.createElement("span");
compScoreText.textContent = "Computer: " + compScore;

scoreContainer.appendChild(playerScoreText);
scoreContainer.appendChild(compScoreText);

btnContainer.addEventListener("click", (event) => {
  let target = event.target;

  switch (target.id) {
    case "scissorBtn":
      playerSelection = "scissors";
      break;
    case "paperBtn":
      playerSelection = "paper";
      break;
    case "rockBtn":
      playerSelection = "rock";
      break;
    default:
      return;
  }

  result = playRound(playerSelection, getComputerChoice());
  result === "playerWin" ? playerScore++ : compScore++;
  playerScoreText.textContent = "Player: " + playerScore;
  compScoreText.textContent = "Computer: " + compScore;

  if (playerScore === 5 || compScore === 5) {
    playerScore === 5 ? alert("You win!!!") : alert("You lose!");
    playerScore = 0;
    compScore = 0;
    playerScoreText.textContent = "Player: " + playerScore;
    compScoreText.textContent = "Computer: " + compScore;
  }
});
