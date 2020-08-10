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

  return { checkWinner, boxValidation, playerTurn, playerMark}
}

let logic = Logic()
logic.playerMark()


/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// var scores, roudScore, activePlayer, gamePlaying;

// function init() {
//   scores = [0, 0];
//   activePlayer = 0;
//   roundScore = 0;
//   gamePlaying = true

//   document.querySelector('.dice').style.display = 'none';

//   document.getElementById('score-0').textContent = '0';
//   document.getElementById('score-1').textContent = '0';
//   document.getElementById('current-0').textContent = '0';
//   document.getElementById('current-1').textContent = '0';
//   document.getElementById('name-0').textContent = 'Player 1';
//   document.getElementById('name-1').textContent = 'Player 2';
//   document.querySelector('.player-0-panel').classList.remove('winner');
//   document.querySelector('.player-1-panel').classList.remove('winner');
//   document.querySelector('.player-0-panel').classList.remove('active');
//   document.querySelector('.player-1-panel').classList.remove('active');
//   document.querySelector('.player-0-panel').classList.add('active');
// }

// init();

// document.getElementById('score-0').textContent = '0';
// document.getElementById('score-1').textContent = '0';
// document.getElementById('current-0').textContent = '0';
// document.getElementById('current-1').textContent = '0';

// document.querySelector('.btn-roll').addEventListener('click', () => {
//   if (gamePlaying) {
//     let dice = Math.floor(Math.random() * 6) + 1;

//     let diceDOM = document.querySelector('.dice');
//     diceDOM.style.display = 'block';
//     diceDOM.src = 'img/dice-' + dice + '.png';

//     if (dice !== 1) {
//       roundScore += dice;
//       document.querySelector('#current-' + activePlayer).textContent = roundScore;
//     } else {
//       nextPlayer();
//     }
//   }
// });

// document.querySelector('.btn-hold').addEventListener('click', () => {
//   if (gamePlaying) {
//     scores[activePlayer] += roundScore;
//     document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

//     if (scores[activePlayer] >= 20) {
//       document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
//       document.querySelector('.dice').style.display = 'none';
//       document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
//       document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
//       gamePlaying = false;
//     }

//     nextPlayer();
//   }
// });

// function nextPlayer() {
//   activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
//     roundScore = 0;

//     document.getElementById('current-0').textContent = '0';
//     document.getElementById('current-1').textContent = '0';

//     document.querySelector('.player-0-panel').classList.toggle('active');
//     document.querySelector('.player-1-panel').classList.toggle('active');

//     document.querySelector('.dice').style.display = 'none';
// }

// document.querySelector('.btn-new').addEventListener('click', init);
