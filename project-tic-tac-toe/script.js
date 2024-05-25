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

const Gameboard = (dimension, winningStreak) => {
  const rows = dimension;
  const cols = dimension;
  const board = [];

  const uiBoard = document.querySelector("#board");
  uiBoard.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
  uiBoard.style.gridTemplateRows = `repeat(${dimension}, 1fr)`;

  // create board and checkBoard
  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < cols; j++) {
      //ui
      const uiCell = document.createElement("button");
      uiCell.classList.add("cell");
      uiCell.dataset.row = i;
      uiCell.dataset.col = j;
      uiBoard.appendChild(uiCell);

      //logic
      board[i].push(Cell());
    }
  }

  const hasContiguousToken = (arr) => {
    let streak = 1;

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] === arr[i - 1] && arr[i] != 0) {
        streak++;
        if (streak === winningStreak) return true;
      } else {
        streak = 1;
      }
    }

    return false;
  };

  const checkCondition = (row, col) => {
    checkArr = [];

    // vertical check
    for (let i = 0; i < rows; i++) {
      checkArr.push(board[i][col].getValue());
    }
    if (hasContiguousToken(checkArr)) return true;
    checkArr = [];

    //horizontal check
    for (let i = 0; i < cols; i++) {
      checkArr.push(board[row][i].getValue());
    }
    console.log(checkArr);
    if (hasContiguousToken(checkArr)) return true;
    checkArr = [];

    rowCopy = row;
    colCopy = col;

    while (row > 0 && col > 0) {
      row--;
      col--;
    }
    while (row < rows && col < cols) {
      checkArr.push(board[row++][col++].getValue());
    }
    if (hasContiguousToken(checkArr)) return true;
    checkArr = [];

    row = rowCopy;
    col = colCopy;

    while (row < rows - 1 && col > 0) {
      row++;
      col--;
    }
    while (row >= 0 && col < cols) {
      checkArr.push(board[row--][col++].getValue());
    }
    if (hasContiguousToken(checkArr)) return true;

    return false;
  };

  const getCell = (row, col) => board[row][col].getValue();

  const setCell = (token, row, col) => {
    board[row][col].setValue(token);
    return checkCondition(row, col);
  };

  const clearBoard = () => {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        board[i][j].setValue(0);
        const uiBtn = document.querySelector(
          `button[data-row='${i}'][data-col='${j}']`
        );
        uiBtn.textContent = "";
      }
    }
  };

  return { getCell, setCell, clearBoard };
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

/* initialise game */
const dimension = 10;
const winningStreak = 5;
const board = Gameboard(dimension, winningStreak);

let isXTurn = false;
let token;
const uiCells = document.querySelectorAll(".cell");

uiCells.forEach((cell, idx) => {
  cell.addEventListener("click", () => {
    token = isXTurn ? 1 : 2;
    row = cell.dataset.row;
    col = cell.dataset.col;

    if (board.getCell(row, col) !== 0) return;

    cell.textContent = TOKEN_MAP[token];
    const result = board.setCell(token, row, col);
    isXTurn = !isXTurn;
    if (result) {
      setTimeout(() => {
        alert(BOARD_CONDITION[token]);
        board.clearBoard();
      }, 100);
    }
  });
});
