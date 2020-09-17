import { functions } from '../js/functions';

describe('Test the winning logic of the game', () => {
  const main = functions();

  test('Winning Condition A', () => {
    const array = ['X', 'X', 'X', 4, 5, 6, 7, 8, 9];
    const check = main.checkWinner('X', array);
    expect(check).toBeTruthy();
  });

  test('Winning Condition B', () => {
    const array = [1, 2, 3, 'X', 'X', 'X', 7, 8, 9];
    const check = main.checkWinner('X', array);
    expect(check).toBeTruthy();
  });

  test('Winning Condition C', () => {
    const array = [1, 2, 3, 4, 5, 6, 'X', 'X', 'X'];
    const check = main.checkWinner('X', array);
    expect(check).toBeTruthy();
  });

  test('Winning Condition D', () => {
    const array = ['X', 2, 3, 'X', 5, 6, 'X', 8, 9];
    const check = main.checkWinner('X', array);
    expect(check).toBeTruthy();
  });

  test('Winning Condition E', () => {
    const array = [1, 2, 'X', 4, 5, 'X', 7, 8, 'X'];
    const check = main.checkWinner('X', array);
    expect(check).toBeTruthy();
  });

  test('Winning Condition F', () => {
    const array = [1, 2, 'X', 4, 'X', 6, 'X', 8, 9];
    const check = main.checkWinner('X', array);
    expect(check).toBeTruthy();
  });

  test('Winning Condition G', () => {
    const array = ['X', 2, 3, 4, 'X', 6, 7, 8, 'X'];
    const check = main.checkWinner('X', array);
    expect(check).toBeTruthy();
  });

  test('Winning Condition H', () => {
    const array = [1, 2, 'X', 4, 'X', 6, 'X', 8, 9];
    const check = main.checkWinner('X', array);
    expect(check).toBeTruthy();
  });

  test('No Winner', () => {
    const array = ['X', 'O', 'X', 'O', 'X', 'X', 'O', 'X', 'O'];
    const check = main.checkWinner('X', array);
    expect(check).toBeFalsy();
  });
});

describe('Test if the game has any options left to choose', () => {
  const main = functions();

  test('Returns true if the game still has playable options left', () => {
    const array = [1, 'X', 3, 4, 'X', 6, 'O', 8, 9];
    const check = main.stillPlayable(array);
    expect(check).toBeTruthy();
  });

  test('Returns false if the game has no playable options left', () => {
    const array = ['X', 'O', 'X', 'O', 'X', 'X', 'O', 'X', 'O'];
    const check = main.stillPlayable(array);
    expect(check).toBeFalsy();
  });
});

// describe('Test whether the player choice is valid', () => {
//   const main = functions();

//   test.only('Returns true if the game still has playable options left', () => {
//     document.getElementById('0').textContent = 'X';
//     const check = main.boxValidation('0');
//     expect(check).toBeFalsy();
//   });

//   //   test("Returns false if the game has no playable options left", () => {
//   //     const array = ["X", "O", "X", "O", "X", "X", "O", "X", "O"];
//   //     const check = main.stillPlayable(array);
//   //     expect(check).toBeFalsy();
//   //   });
// });