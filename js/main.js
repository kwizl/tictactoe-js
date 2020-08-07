import { Logic } from './logic.js'
import { Board } from './board.js'
// 1. Player One is initialized

// 2. Player Two is initialized

// 3. Player One clicks on box

// 4. Check if box text has X or O

// 5. Change the box to X

// 6. Player Two clicks on box

// 7. Check if box text has X or O

// 8. Change the box to O

let logic = Logic();
let board = Board();

let state = true;
let i = 0
while ((state) && (i <= 8)) {
  logic.playerTurn(i, 0, board.boardChoices(), 'X')
  i +=  1
  logic.playerTurn(i, 1, board.boardChoices(), 'O')
  i += 1
}
