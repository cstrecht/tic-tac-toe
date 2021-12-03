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
//
function showMarker() {
  for (let i in myGameBoard) {
    console.log("Item: ", i);
    let item = document.querySelector(`div[id=${i}]`);
    if (myGameBoard[i] !== "") {
      item.innerHTML = myGameBoard[i];
    } else {
      item.innerHTML = "";
    }
  }
}
function showGameInfo() {
  document.querySelector(".turn").innerHTML = player;
  document.querySelector(".result").innerHTML = warning;
}
