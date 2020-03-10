const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
let currentTurn = "x";
let square0 = document.getElementById("square-0");
let square1 = document.getElementById("square-1");
let square2 = document.getElementById("square-2");
let square3 = document.getElementById("square-3");
let square4 = document.getElementById("square-4");
let square5 = document.getElementById("square-5");
let square6 = document.getElementById("square-6");
let square7 = document.getElementById("square-7");
let square8 = document.getElementById("square-8");
let Replay = document.getElementById("play-again");
let form = document.getElementById("container");
let squares = [
  square0,
  square1,
  square2,
  square3,
  square4,
  square5,
  square6,
  square7,
  square8
];

function markSqr() {
  this.innerText = currentTurn;
  this.removeEventListener("click", markSqr);
  nextTurn();
}

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", markSqr);
}

function nextTurn() {
  if (currentTurn == "x") {
    currentTurn = "o";
  }
  else {
      currentTurn = "x";
  }
}
