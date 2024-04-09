const rockPaperScissor = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
  const compSelection = Math.floor(Math.random() * 3);

  return rockPaperScissor[compSelection];
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
let playerSelection = "";
let playerScore = 0;
let compScore = 0;

btnContainer.addEventListener("click", (event) => {
  let target = event.target;

  switch (target.id) {
    case "scissorBtn":
      playerSelection = "scissors";
      break;
    case "paperButton":
      playerSelection = "paper";
      break;
    case "rockButton":
      playerSelection = "rock";
      break;
  }

  result = playRound(playerSelection, getComputerChoice());
  result === "playerWin" ? playerScore++ : compScore++;
});
