// eslint-disable-next-line import/extensions
import { Board } from './board.js';

const Logic = () => {
  const array = Board();
  let board = array.boardChoices();
  let gameON = true;
  let currentPlayer = 'X';

  const checkWinner = (label, array) => {
    const wina = (array[0] === label) && (array[1] === label) && (array[2] === label);
    const winb = (array[3] === label) && (array[4] === label) && (array[5] === label);
    const winc = (array[6] === label) && (array[7] === label) && (array[8] === label);
    const wind = (array[0] === label) && (array[3] === label) && (array[6] === label);
    const wine = (array[1] === label) && (array[4] === label) && (array[7] === label);
    const winf = (array[2] === label) && (array[5] === label) && (array[8] === label);
    const wing = (array[0] === label) && (array[4] === label) && (array[8] === label);
    const winh = (array[2] === label) && (array[4] === label) && (array[6] === label);

    return wina || winb || winc || wind || wine || winf || wing || winh;
  };

  // change mark for player turn
  const playerTurn = () => {
    if (currentPlayer === 'X') {
      currentPlayer = 'O';
    } else {
      currentPlayer = 'X';
    }
    return currentPlayer;
  };

  const stillPlayable = (b) => {
    for (let i = 0; i < 9; i += 1) {
      if (b[i] !== 'X' && b[i] !== 'O') {
        return true;
      }
    }
    return false;
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
    if (mark === 'O') {
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
            if (checkWinner(newMark, board)) {
              gameON = false;
              lastWinMove('O');
            }
            if (!stillPlayable(board) && !checkWinner(newMark, board)) {
              gameDrawn();
              document.getElementById('winner').textContent = 'DRAW';
              gameON = false;
            } else if (!stillPlayable(board) && checkWinner(newMark, board)) {
              lastWinMove('O');
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
    currentPlayer = 'X';
    gameON = true;
  });

  return {
    checkWinner, lastWinMove, boxValidation, playerTurn, playerMark,
  };
};

const logic = Logic();
logic.playerMark();
