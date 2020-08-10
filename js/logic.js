import { Player } from './player.js'
import { Board } from './board.js'

const Logic = () => {
  let current_player = 'X';
  const playerOne = Player('X');
  const playerTwo = Player('O');
  const player = [playerOne, playerTwo]

  const checkWinner = (label, array) => {
    win_a = (array[0][0] == label) && (array[0][1] == label) && (array[0][2] == label)
    win_b = (array[1][0] == label) && (array[1][1] == label) && (array[1][2] == label)
    win_c = (array[2][0] == label) && (array[2][1] == label) && (array[2][2] == label)
    win_d = (array[0][0] == label) && (array[1][1] == label) && (array[2][2] == label)
    win_e = (array[2][0] == label) && (array[1][1] == label) && (array[0][2] == label)
    win_f = (array[0][0] == label) && (array[1][0] == label) && (array[2][0] == label)
    win_g = (array[0][1] == label) && (array[1][1] == label) && (array[2][1] == label)
    win_h = (array[0][2] == label) && (array[1][2] == label) && (array[2][2] == label)

    win_a || win_b || win_c || win_d || win_e || win_f || win_g || win_h
  }

  const boxValidation = (idx) => {
    let box = document.getElementById(idx);
    box.addEventListener('click', () => {
      if (typeof box.textContent == String) {
        return false;
      } else {
        return true;
      }
    }) 
  }

  const playerMark = () => {
    let td = document.querySelectorAll('.td-data')

    for (let i = 0; i < td.length; i++) {
      td[i].addEventListener('click', () => {
        td[i].textContent = playerTurn();
      });
    }
  }

  let playerTurn = () => {
    current_player === 'X' ? current_player = 'O' : current_player = 'X';
    
    return current_player
  }

  document.querySelector('#restart').addEventListener('click', function(){
    for (let i = 0; i < 9; i++) {
      document.getElementById(i).textContent = "";
    }
    current_player = 'X'
  });

  return { checkWinner, boxValidation, playerTurn, playerMark }
}

let logic = Logic()
logic.playerMark()