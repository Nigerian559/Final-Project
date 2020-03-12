/* const winningCombos = [ 
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]


]; use as reference */

let currentTurn = "x";
let scoreBoard = document.getElementById("scoreboard");
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
let restartGet = document.getElementById("button-play-again");
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
  console.log("hello");
  setTimeout(gameWon(), 250);
  nextTurn();
}

function stopPlay() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].removeEventListener("click", markSqr);
  }
}

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", markSqr);
}

function nextTurn() {
  if (currentTurn == "x") {
    currentTurn = "o";
  } else {
    currentTurn = "x";
  }
}

function gameWon() {
  if (
    square0.innerText == "x" &&
    square1.innerText == "x" &&
    square2.innerText == "x"
  ) {
    alert("x Won");
    stopPlay();
  } else if (
    square0.innerText == "o" &&
    square1.innerText == "o" &&
    square2.innerText == "o"
  ) {
    alert("o Won");
    stopPlay();
  } else if (
    square3.innerText == "x" &&
    square4.innerText == "x" &&
    square5.innerText == "x"
  ) {
    alert("x Won");
    stopPlay();
  } else if (
    square3.innerText == "o" &&
    square4.innerText == "o" &&
    square5.innerText == "o"
  ) {
    alert("o Won");
    stopPlay();
  } else if (
    square6.innerText == "x" &&
    square7.innerText == "x" &&
    square8.innerText == "x"
  ) {
    alert("x Won");
    stopPlay();
  } else if (
    square6.innerText == "o" &&
    square7.innerText == "o" &&
    square8.innerText == "o"
  ) {
    alert("o Won");
    stopPlay();
  } else if (
    square0.innerText == "x" &&
    square3.innerText == "x" &&
    square6.innerText == "x"
  ) {
    alert("x Won");
    stopPlay();
  } else if (
    square0.innerText == "o" &&
    square3.innerText == "o" &&
    square6.innerText == "o"
  ) {
    alert("o Won");
    stopPlay();
  } else if (
    square1.innerText == "x" &&
    square4.innerText == "x" &&
    square7.innerText == "x"
  ) {
    alert("x Won");
    stopPlay();
  } else if (
    square1.innerText == "o" &&
    square4.innerText == "o" &&
    square7.innerText == "o"
  ) {
    alert("o Won");
    stopPlay();
  } else if (
    square2.innerText == "x" &&
    square5.innerText == "x" &&
    square8.innerText == "x"
  ) {
    alert("x Won");
    stopPlay();
  } else if (
    square2.innerText == "o" &&
    square5.innerText == "o" &&
    square8.innerText == "o"
  ) {
    alert("o Won");
    stopPlay();
  } else if (
    square0.innerText == "x" &&
    square4.innerText == "x" &&
    square8.innerText == "x"
  ) {
    alert("x Won");
    stopPlay();
  } else if (
    square0.innerText == "o" &&
    square4.innerText == "o" &&
    square8.innerText == "o"
  ) {
    alert("o Won");
    stopPlay();
  } else if (
    square2.innerText == "x" &&
    square4.innerText == "x" &&
    square6.innerText == "x"
  ) {
    alert("x Won");
    stopPlay();
  } else if (
    square2.innerText == "o" &&
    square4.innerText == "o" &&
    square6.innerText == "o"
  ) {
    alert("o Won");
    stopPlay();
  }
}

function defaultState() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].innerText = "";
  }
  currentTurn = "x";
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", markSqr);
  }
}

restartGet.addEventListener("click", defaultState);

function scratch() {
  if (squares.innerText == "") 
  alert("Draw, Try Again");
  stopPlay;
}
