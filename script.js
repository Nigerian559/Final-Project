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

const grid = () => Array.from(document.getElementsByClassName('game-square'));
const clickFn = (event) => console.log(event);

const enableListeners = () => { grid().forEach(_game-squareE1 = () => _game-squareE1.addEventListener('click', clickFn));
}
const disableListeners = () => grid().forEach(_game-squareE1 => _game-squareE1.removeEventListener('click', clickFn));

enableListeners();