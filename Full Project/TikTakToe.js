let playerX = "X";
let playerO = "O";
let currentPlayer = playerO;

let gameState = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
};

let grid = document.querySelector("#grid"); /// selects the id grid
console.dir(grid);
const gridSize = 3; /// providing the num for grid size 3x3

for (let i = 0; i < gridSize; i++) {
  /// will start at 0,0
  for (let j = 0; j < gridSize; j++) {
    /// will get 0,1 //  0,2  //  0,3 then will go back to the other loop and start 1,1 1,2 1,3 ext
    let cell = document.createElement("div"); //// creates divs and saves it to cell
    cell.classList.add("cell"); /// adds the class cell to it
    cell.id = `${i},${j}`; // will be givin the cords of the selected element on th grid
    grid.appendChild(cell); /// will put the cell into the grid ID
  }
}

grid.addEventListener("click", function (event) {
  console.log(event.target.id);
  const rowIdx = event.target.id[0];
  const colIdx = event.target.id[2];
  console.log({ rowIdx, colIdx });

  if (rowIdx && colIdx) {
    let p = document.createElement("p");

    if (gameState.board[rowIdx][colIdx] != null) {
      return;
    }

    if (currentPlayer === playerX) {
      event.target.classList.add("X");
      p.innerText = "X";
      currentPlayer = playerO;
      gameState.board[rowIdx][colIdx] = "X";
    } else {
      event.target.classList.add("O");
      p.innerText = "O";
      currentPlayer = playerX;
      gameState.board[rowIdx][colIdx] = "O";
    }
    console.log(gameState.board);
    CheckWinner();

    event.target.appendChild(p);
  }
});

function CheckWinner() {
  CheckRow();
  CheckCol();
  CheckDiag();
}

function CheckRow() {
  ////// rows
  let w = false;
  for (let i = 0; i < 3; i++) {
    if (
      gameState.board[i][0] == gameState.board[i][1] &&
      gameState.board[i][1] == gameState.board[i][2] &&
      gameState.board[i][0] != null
    ) {
      w = true;
      document.getElementById("h1").style.color = "#ff0000";
      return console.log(true);
    }
  }
}

function CheckCol() {
  ///// colms
  for (let i = 0; i < 3; i++) {
    if (
      gameState.board[0][i] == gameState.board[1][i] &&
      gameState.board[1][i] == gameState.board[2][i] &&
      gameState.board[0][i] != null
    ) {
      w = true;
      document.getElementById("h1").style.color = "#ff0000";
      return true;
    }
  }
}

function CheckDiag() {
  if (
    gameState.board[0][0] == gameState.board[1][1] &&
    gameState.board[1][1] == gameState.board[2][2] &&
    gameState.board[0][0] != null
  ) {
    w = true;
    document.getElementById("h1").style.color = "#ff0000";
    return console.log(true);
  }
  if (
    gameState.board[0][2] == gameState.board[1][1] &&
    gameState.board[1][1] == gameState.board[2][0] &&
    gameState.board[0][2] != null
  ) {
    w = true;
    document.getElementById("h1").style.color = "#ff0000";
    return console.log(true);
  }
}

////// USE H1 AND APPLY A CLASS TO IT TO MAKE IT APPEAR ////////
