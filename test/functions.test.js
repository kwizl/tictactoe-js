import { functions } from "../js/functions.js";

describe("Test the winning logic of the game", () => {
  const main = functions();

  test("Winning Condition A", () => {
    const array = ["X", "X", "X", , , , , ,];
    const check = main.checkWinner("X", array);
    expect(check).toBeTruthy();
  });

  test("Winning Condition B", () => {
    const array = [, , , "X", "X", "X", , ,];
    const check = main.checkWinner("X", array);
    expect(check).toBeTruthy();
  });

  test("Winning Condition C", () => {
    const array = [, , , , , , "X", "X", "X"];
    const check = main.checkWinner("X", array);
    expect(check).toBeTruthy();
  });

  test("Winning Condition D", () => {
    const array = ["X", , , "X", , , "X", ,];
    const check = main.checkWinner("X", array);
    expect(check).toBeTruthy();
  });

  test("Winning Condition E", () => {
    const array = [, "X", , , "X", , , "X"];
    const check = main.checkWinner("X", array);
    expect(check).toBeTruthy();
  });

  test("Winning Condition F", () => {
    const array = [, , "X", , , "X", , , "X"];
    const check = main.checkWinner("X", array);
    expect(check).toBeTruthy();
  });

  test("Winning Condition G", () => {
    const array = ["X", , , , "X", , , , "X"];
    const check = main.checkWinner("X", array);
    expect(check).toBeTruthy();
  });

  test("Winning Condition H", () => {
    const array = [, , "X", , "X", , "X", ,];
    const check = main.checkWinner("X", array);
    expect(check).toBeTruthy();
  });

  test("No Winner", () => {
    const array = [, , , , , , , ,];
    const check = main.checkWinner("X", array);
    expect(check).toBeFalsy();
  });
});

describe("Test the validation of the player choices", () => {
  const main = functions();

  test("Returns true if the game still has playable options left", () => {
    const array = [1, 'X', 3, 4, 'X', 6, 'O', 8, 9];
    const check = main.stillPlayable(array);
    expect(check).toBeTruthy();
  });

  test("Returns false if the game has no playable options left", () => {
    const array = ['X', 'O', 'X', 'O', 'X', 'X', 'O', 'X', 'O'];
    const check = main.stillPlayable(array);
    expect(check).toBeFalsy();
  });
});
