import * as Player from './player.js'

const Logic = () => {
  const player_one = document.getElementById('player-one').value;
  const player_two = document.getElementById('player-two').value;
  const playerOne = Player(player_one, 'X');
  const playerTwo = Player(player_two, 'O');
  let playerArray = [playerOne, playerTwo];

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

  const playerTurn = (current_player, array, mark) => {
    let box = document.getElementById(String(i))
    box.addEventListener('click', () => {
      if ((playerArray[current_player]) && (boxValidation(String(i)))) {
        array[i] = mark;
        box.textContent = mark;
        return true;
      } else if (!boxValidation(String(i))) {
        document.getElementById('board-error').textContent = 'Choice Taken!';
        return false;
      }
    });
  }

  return { checkWinner, boxValidation, playerTurn }
}

export { Logic }