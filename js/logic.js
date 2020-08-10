import { Board } from './board.js'

const Logic = () => {
  let array = Board();
  let board = array.boardChoices();

  let current_player = 'X';

  const checkWinner = (label, array) => {
    const win_a = (array[0] == label) && (array[1] == label) && (array[2] == label)
    const win_b = (array[3] == label) && (array[4] == label) && (array[5] == label)
    const win_c = (array[6] == label) && (array[7] == label) && (array[8] == label)
    const win_d = (array[0] == label) && (array[3] == label) && (array[6] == label)
    const win_e = (array[1] == label) && (array[4] == label) && (array[7] == label)
    const win_f = (array[2] == label) && (array[5] == label) && (array[8] == label)
    const win_g = (array[0] == label) && (array[4] == label) && (array[8] == label)
    const win_h = (array[2] == label) && (array[4] == label) && (array[6] == label)

    return win_a || win_b || win_c || win_d || win_e || win_f || win_g || win_h
  }

  const stillPlayable = (b) => {
    for (let i = 0; i < 9; i++) {
      if (b[i] != 'X' && b[i] != 'O') {
        return true;
      }
    }
    return false;
  }

  const boxValidation = (idx) => {
    let box = document.getElementById(idx);

    if (box.textContent === 'X' || box.textContent === 'O') {
      return false;
    }
    else {
      return true;
    }
  }

  const gameDrawn = () => {
    document.getElementById('one').style.fontSize = '45px';
    document.getElementById('two').style.fontSize = '45px';
  }

  const playerMark = () => {
    let td = document.querySelectorAll('.td-data')

    for (let i = 0; i < td.length; i++) {
      td[i].addEventListener('click', () => {
        if (boxValidation(i)) {
          let new_mark = playerTurn();
          td[i].textContent = new_mark;
          board[i] = new_mark;
          if (checkWinner(new_mark, board)) {
            if (new_mark === 'O') {
              document.getElementById('one').style.fontSize = '40px';
              document.getElementById('winner').textContent = 'WINNER!'
            } else {
              document.getElementById('two').style.fontSize = '40px';
              document.getElementById('winner').textContent = 'WINNER!'
            }
          }
          
          if(!stillPlayable(board)) {
            gameDrawn();
            document.getElementById('winner').textContent = 'DRAW'
          }
        }
      });
    }
  }

  // change mark for player turn
  let playerTurn = () => {
    current_player === 'X' ? current_player = 'O' : current_player = 'X';
    return current_player
  }

  // restart button
  document.querySelector('#restart').addEventListener('click', () => {
    for (let i = 0; i < 9; i++) {
      document.getElementById(i).textContent = '';
    }
    document.getElementById('one').style.fontSize = '20px';
    document.getElementById('two').style.fontSize = '20px';
    board = array.boardChoices();
    document.getElementById('winner').textContent = '';
    current_player = 'X';
    
  });

  return { checkWinner, boxValidation, playerTurn, playerMark }
}

let logic = Logic()
logic.playerMark()
