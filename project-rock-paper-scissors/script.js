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

  if (tie) return { resultMessage: "It's a tie!", result: "tie" };

  resultMessage =
    "You " +
    (win
      ? "win, " + playerSelection + " beats " + compSelection + "!"
      : "lose, " + compSelection + " beats " + playerSelection + "!");
  result = win ? "playerWin" : "compWin";

  return { resultMessage, result };
};

const playGame = () => {
  let playerScore = 0;
  let compScore = 0;
  let playerSelection = "";
  let compSelection = "";

  let bestOf = 5;
  let scoreThreshold = Math.ceil(bestOf/2)

  while (true) {
    playerSelection = prompt("Enter selection (rock, paper, scissors): ");
    playerSelection = playerSelection.toLowerCase();

    while (!rockPaperScissor.includes(playerSelection)) {
      playerSelection = prompt(
        "Wrong Input, only enter from the following choices (rock, paper, scissors): "
      );
      playerSelection = playerSelection.toLowerCase();
    }

    compSelection = getComputerChoice();
    ({ resultMessage, result } = playRound(playerSelection, compSelection));
    console.log(resultMessage);

    result === "playerWin"
      ? playerScore++
      : result === "compWin"
      ? compScore++
      : null;

    console.log("You: " + playerScore + "\nCpu: " + compScore);

    if (playerScore >= scoreThreshold || compScore >= scoreThreshold) break;
  }

  playerScore > compScore ? alert("You win!") : alert("You lose!");
};

playGame();