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

  // create board and checkBoard
  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < cols; j++) {
      board[i].push(Cell());
    }
  }

  const getBoard = () => board;

  const hasContiguousToken = (arr) => {
    let streak = 1;

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] === arr[i - 1]) {
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
    if (hasContiguousToken(checkArr)) return true;
    checkArr = [];

    while (row > 0 && col > 0) {
      row--;
      col--;
    }
    while (row < rows && col < cols) {
      checkArr.push(board[row++][col++].getValue());
    }
    if (hasContiguousToken(checkArr)) return true;

    return false;
  };

  const setCell = (token, coord) => {
    const row = coord[0];
    const col = coord[1];

    board[row][col].setValue(token);
    if (checkCondition(row, col)) return token;
    return 0;
  };

  return { getBoard, setCell };
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

let isXTurn = false;
let token;
const uiCells = document.querySelectorAll(".cell");

const board = Gameboard();

uiCells.forEach((cell, idx) => {
  cell.addEventListener("click", () => {
    token = isXTurn ? TOKEN_MAP[1] : TOKEN_MAP[2];
    cell.textContent = token;

    const result = board.setCell(isXTurn ? 1 : 2, [
      Math.floor(idx / 3),
      idx % 3,
    ]);
    isXTurn = !isXTurn;
    if (result === 1 || result === 2) {
      setTimeout(() => {
        alert(BOARD_CONDITION[result]);
      }, 0);
    }
  });
});
