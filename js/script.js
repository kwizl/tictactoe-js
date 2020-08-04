const boardGame = [];

function restartGame() {
  for(let i = 0; i < 9; i++) {
    boardGame[i] = '';
    let regular = document.getElementById(i);
    regular.style.backgroundColor = 'red';
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
