/* eslint-disable import/extensions */
import { Board } from './board.js';
import { Player } from './player.js';
import { functions } from './functions.js';

const func = functions();

const mainController = (logic) => {
  const array = Board();
  let board = array.boardChoices();
  const playerOneValue = document.getElementById('one').textContent;
  const playerTwoValue = document.getElementById('two').textContent;
  const playerOne = Player(playerOneValue, 'X');
  const playerTwo = Player(playerTwoValue, 'O');
  let gameON = true;
  let currentPlayer = playerTwo.getSym();

  // change mark for player turn
  const playerTurn = () => {
    if (currentPlayer === playerOne.getSym()) {
      currentPlayer = playerTwo.getSym();
    } else {
      currentPlayer = playerOne.getSym();
    }
    return currentPlayer;
  };

  const boxValidation = (idx) => {
    const box = document.getElementById(idx);

    if (box.textContent === 'X' || box.textContent === 'O') {
      return false;
    }
    return true;
  };

  const gameDrawn = () => {
    document.getElementById('one').style.fontSize = '45px';
    document.getElementById('two').style.fontSize = '45px';
  };

  const lastWinMove = (mark) => {
    if (mark === playerOne.getSym()) {
      document.getElementById('one').style.fontSize = '40px';
      document.getElementById('winner').textContent = 'WINNER!';
    } else {
      document.getElementById('two').style.fontSize = '40px';
      document.getElementById('winner').textContent = 'WINNER!';
    }
  };

  const playerMark = () => {
    const td = document.querySelectorAll('.td-data');

    for (let i = 0; i < td.length; i += 1) {
      // eslint-disable-next-line no-loop-func
      td[i].addEventListener('click', () => {
        if (gameON) {
          if (boxValidation(i)) {
            const newMark = playerTurn();
            td[i].textContent = newMark;
            board[i] = newMark;
            if (logic.checkWinner(newMark, board)) {
              gameON = false;
              lastWinMove(newMark);
            }
            if (!logic.stillPlayable(board) && !logic.checkWinner(newMark, board)) {
              gameDrawn();
              document.getElementById('winner').textContent = 'DRAW';
              gameON = false;
            } else if (!logic.stillPlayable(board) && logic.checkWinner(newMark, board)) {
              lastWinMove(newMark);
            }
          }
        }
      });
    }
  };

  // restart button
  document.querySelector('#restart').addEventListener('click', () => {
    for (let i = 0; i < 9; i += 1) {
      document.getElementById(i).textContent = '';
    }
    document.getElementById('one').style.fontSize = '20px';
    document.getElementById('two').style.fontSize = '20px';
    board = array.boardChoices();
    document.getElementById('winner').textContent = '';
    currentPlayer = playerTwo.getSym();
    gameON = true;
  });

  return {
     lastWinMove, boxValidation, playerTurn, playerMark,
  };
};

{
  const logic = mainController(func);
  logic.playerMark();
}
