import { functions } from '../js/functions.js';

describe("Test the logic of the game", () => {
    const main = functions();

    test("Winning Condition A", () => {
        const array = ['X', 'X', 'X', , , , , , ];
        const check = main.checkWinner('X', array);
        expect(check).toBeTruthy();
    });

    test("Winning Condition B", () => {
        const array = [ , , , 'X', 'X', 'X', , , ];
        const check = main.checkWinner('X', array);
        expect(check).toBeTruthy();
    });

    test("Winning Condition C", () => {
        const array = [, , , , , , 'X', 'X', 'X'];
        const check = main.checkWinner('X', array);
        expect(check).toBeTruthy();
    });

    test("Winning Condition D", () => {
        const array = ['X', , , 'X', , , 'X', , ];
        const check = main.checkWinner('X', array);
        expect(check).toBeTruthy();
    });

    test("Winning Condition E", () => {
        const array = [ , 'X', , , 'X', , , 'X', ];
        const check = main.checkWinner('X', array);
        expect(check).toBeTruthy();
    });

    test("Winning Condition F", () => {
        const array = [ , , 'X', , , 'X', , , 'X'];
        const check = main.checkWinner('X', array);
        expect(check).toBeTruthy();
    });

    test("Winning Condition G", () => {
        const array = ['X', , , , 'X', , , , 'X'];
        const check = main.checkWinner('X', array);
        expect(check).toBeTruthy();
    });

    test("Winning Condition H", () => {
        const array = [ , , 'X', , 'X', , 'X', , ];
        const check = main.checkWinner('X', array);
        expect(check).toBeTruthy();
    });

    test('No Winner', () => {
        const array = [ , , , , , , , , ];
        const check = main.checkWinner('X', array);
        expect(check).toBeFalsy();
    });
});