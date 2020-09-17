const functions = () => {
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

  return {
    checkWinner, stillPlayable, boxValidation,
  };
};
/* eslint-disable import/prefer-default-export */
export { functions };