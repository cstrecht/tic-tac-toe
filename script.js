// Representing the game board
let myGameBoard = {
  a1: "",
  a2: "",
  a3: "",
  b1: "",
  b2: "",
  b3: "",
  c1: "",
  c2: "",
  c3: "",
};

let playerTurn = "";
let warning = "";
let playing = false;

reset();

//Reset button logic:
document.querySelector(".reset").addEventListener("click", reset);

//Select all the sub-squares:
document.querySelectorAll(".item").forEach((item) => {
  item.addEventListener("click", itemClick);
});

// FUNCTIONS:
function itemClick(event) {
  let item = event.target.getAttribute("id");
  console.log(item);
  // if the game is playing and not empty:
  if (playing && myGameBoard[item] === "") {
    myGameBoard[item] = player;
    showMarker();
    changePlayer(); // between X and O
  }
}

function reset() {
  warning = "";
  let random = Math.floor(Math.random() * 2);
  player = random === 0 ? "x" : "o";

  for (let i in myGameBoard) {
    myGameBoard[i] = "";
  }
  playing = true;

  showMarker();
  showGameInfo();
}

function showMarker() {
  for (let i in myGameBoard) {
    let item = document.querySelector(`div[id=${i}]`);
    item.innerHTML = myGameBoard[i];
  }
  checkGame(); // game verification
}

function showGameInfo() {
  document.querySelector(".turn").innerHTML = player;
  document.querySelector(".result").innerHTML = warning;
}

function changePlayer() {
  player = player === "x" ? "o" : "x";
  showGameInfo();
}
// *** GAME LOGIC: ***
function checkGame() {
  // 4 possible verf. : X wins, O wins, draw, nothing happens
  // how to win: 3 columns, 3 rows, 2 diagonals (8 options)
  if (checkWinner("x")) {
    warning = "Player X wins!";
    playing = false;
  } else if (checkWinner("o")) {
    warning = "Player O wins!";
    playing = false;
  } else if (isDraw()) {
    warning = "It's a draw!";
    playing = false;
  }
}
function checkWinner(player) {
  // all the winning possibilities
  let poss = [
    // horizontal:
    "a1,a2,a3",
    "b1,b2,b3",
    "c1,c2,c3",
    //vertical
    "a1,b1,c1",
    "a2,b2,c2",
    "a3,b3,c3",
    //diagonal
    "a1,b2,c3",
    "a3,b2,c1",
  ];
  for (let w in poss) {
    let pArray = poss[w].split(","); // a1, a2, a3
    let hasWon = pArray.every((option) => {
      if (myGameBoard[option] === player) {
        return true;
      } else {
        return false;
      }
    });
    if (hasWon) {
      return true;
    }
  }
  return false;
}
function isDraw() {
  for (let i in myGameBoard) {
    if (myGameBoard[i] === "") {
      return false;
    }
  }
  return true; // all full
}
