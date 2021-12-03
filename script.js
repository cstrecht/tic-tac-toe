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
  if (myGameBoard[item] === "") {
    myGameBoard[item] = player;
    showMarker();
  }
}

function reset() {
  warning = "";
  let random = Math.floor(Math.random() * 2);
  player = random === 0 ? "X" : "o";

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
