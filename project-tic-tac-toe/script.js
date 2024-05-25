const TOKEN_MAP = {
  0: "_",
  1: "x",
  2: "o",
};

const BOARD_CONDITION = {
  0: "No winner",
  1: "X wins",
  2: "O wins",
};

const Gameboard = () => {
  const rows = 3;
  const cols = 3;
  const winningStreak = 3;
  const board = [];

  // create the board
  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < cols; j++) {
      board[i].push(Cell());
    }
  }

  const getBoard = () => board;

  const setCell = (token, coord) => board[coord[0]][coord[1]].setValue(token);

  const printBoard = () => {
    let outputString = "";

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        let token = board[i][j].getValue();
        outputString += " " + TOKEN_MAP[token] + " |";
      }
      outputString += "\n";
    }

    console.log(outputString);
  };

  const flattenBoard = () => {
    const flattenedBoard = [];

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        flattenedBoard.push(board[i][j].getValue());
      }
    }

    return flattenedBoard;
  };

  const hasContiguouseElements = (array, n) => {
    let count = 1;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] === array[i + 1]) count++;
      if (array[i] !== array[i + 1]) count = 1;
      if (count === n) return true;
    }

    return false;
  };

  const checkCondition = () => {
    flattenedBoard = flattenBoard();
    const xIdxArr = [];
    const oIdxArr = [];

    flattenedBoard.forEach((item, idx) => {
      if (item === 1) {
        xIdxArr.push(idx);
      } else if (item === 2) {
        oIdxArr.push(idx);
      }
    });

    const xSepCount = [];
    const oSepCount = [];

    /* get the array representing how many cells each consecutive 
    tokens are separated by */
    for (let i = 0; i < xIdxArr.length - 1; i++)
      xSepCount.push(xIdxArr[i + 1] - xIdxArr[i] - 1);
    for (let i = 0; i < oIdxArr.length - 1; i++)
      oSepCount.push(oIdxArr[i + 1] - oIdxArr[i]);

    if (hasContiguouseElements(xSepCount, winningStreak - 1)) return 1;
    if (hasContiguouseElements(oSepCount, winningStreak - 1)) return 2;
    return 0;
  };

  return { getBoard, setCell, printBoard, checkCondition };
};

const Cell = () => {
  let value = 0;

  const setValue = (token) => {
    value = token;
  };

  const getValue = () => value;

  return {
    setValue,
    getValue,
  };
};

const PlayGame = () => {
  let isXTurn = false;
  const board = Gameboard();

  while (true) {
    const row = Number(prompt("Coordinate_Row: "));
    const col = Number(prompt("Coordinate_Col"));

    board.setCell(isXTurn ? 1 : 2, [row, col]);
    isXTurn = !isXTurn;
    board.printBoard();
    const result = board.checkCondition();

    if (result === 1 || result === 2) {
      console.log(BOARD_CONDITION[result]);
      break;
    }
  }
};

//PlayGame();

let isXTurn = false;
let token;
const uiCells = document.querySelectorAll(".cell");

const board = Gameboard();

uiCells.forEach((cell, idx) => {
  cell.addEventListener("click", () => {
    token = isXTurn ? TOKEN_MAP[1] : TOKEN_MAP[2];
    cell.textContent = token;
    board.setCell(isXTurn ? 1 : 2, [Math.floor((idx + 1) / 3), (idx + 1) % 3]);
    isXTurn = !isXTurn;
    const result = board.checkCondition();
    if (result === 1 || result === 2) {
      console.log(BOARD_CONDITION[result]);
      setTimeout(() => {
        alert(BOARD_CONDITION[result]);
      }, 0);
    }
  });
});
