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
// Who's playing, show a message and start the game in false (no gaming yet)
let playerTurn = "";
let warning = "";
let playing = false;

// Reset button:
document.querySelector(".reset").addEventListener("click", reset);
function reset() {
  // CLEAN the messages:
  warning = "";
  // CHOOSE a player (aleatorio entre 1 e 0)
  let random = Math.floor(Math.random() * 2);
  if (random === 0) {
    // player X plays
    player = "x";
  } else {
    // player O plays
    player = "o";
  }
  // TAKE the 'value' of the board -> turn to empty
  for (let i in myGameBoard) {
    myGameBoard[i] = "";
  }

  playing = true;
}
