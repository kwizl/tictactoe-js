/*
const boardGame = [];

function restartGame() {
  for(let i = 0; i < 9; i++) {
    boardGame[i] = '';
  }

}

const Player = (symbol) => {
  
  const setMovement = index => {
    boardGame[index] = symbol; // doing checkings for positioning
  }


  return {setMovement}
};


function changeColor(box) {
  console.log('ha');
  box.style.backgroundColor = 'blue';
}

function tester() {
  const box = document.getElementById('0');
  console.log('tester');
  if (box.addEventListener('click', changeColor(box)) ) {
    console.log('got in');
  }
}

const test = document.getElementById('0');
test.onclick = () => changeColor(test);

tester();
window.onload = restartGame();

const restart = document.getElementById('restart');
restart.onclick = () => restartGame();

// clicked --> send target to happen event
// order --> which 'player' has checked
// checkings if movement is possible
// set movement done on array of positions (boardGame)
// render movement done to players


import player from './player';

const player_one = document.getElementById('player-one').value;
const player_two = document.getElementById('player-two').value;
const playerOne = player(player_one, 'X');
const playerTwo = player(player_two, 'O');
*/

// 1. Player One is initialized

// 2. Player Two is initialized

// 3. Player One clicks on box

// 4. Check if box text has X or O

// 5. Change the box to X

// 6. Player Two clicks on box

// 7. Check if box text has X or O

// 8. Change the box to O
