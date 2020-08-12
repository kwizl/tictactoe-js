const Display = () => {
  const openWindow = () => {
    const wrap = document.querySelector('#form-wrapper');
    const main = document.querySelector('.player-container');
    const board = document.querySelector('.board-container');
    const game = document.querySelector('.game-restart');
    const win = document.querySelector('.winner');
    wrap.style.visibility = 'visible';
    main.style.visibility = 'hidden';
    board.style.visibility = 'hidden';
    game.style.visibility = 'hidden';
    win.style.visibility = 'hidden';
  };

  const closeWindow = () => {
    const wrap = document.querySelector('#form-wrapper');
    const main = document.querySelector('.player-container');
    const board = document.querySelector('.board-container');
    const game = document.querySelector('.game-restart');
    const win = document.querySelector('.winner');
    wrap.style.visibility = 'hidden';
    main.style.visibility = 'visible';
    board.style.visibility = 'visible';
    game.style.visibility = 'visible';
    win.style.visibility = 'visible';
  };

  const submit = () => {
    const btnSubmit = document.querySelector('.btnSubmit');
    btnSubmit.onclick = (e) => {
      e.preventDefault();

      const playerOneValue = document.querySelector('#player-one').value;
      const playerTwoValue = document.querySelector('#player-two').value;
      const one = document.getElementById('one');
      const two = document.getElementById('two');
      one.textContent = playerOneValue;
      two.textContent = playerTwoValue;

      closeWindow();
    };
  };

  const addNamesLogic = (playerOneValue, playerTwoValue) => {
    if ((playerOneValue == null || playerOneValue === '') || (playerTwoValue == null || playerTwoValue === '')) {
      document.getElementById('error').innerHTML = 'Fill all the required fields';
    } else {
      closeWindow();
    }
  };

  const addPlayerNames = (playerOneValue, playerTwoValue) => {
    const addForms = document.forms['player-name'];
    addForms.addEventListener('submit', (event) => {
      event.preventDefault();
      playerOneValue = addForms.querySelector('#player-one').value;
      playerTwoValue = addForms.querySelector('#player-two').value;

      addNamesLogic(playerOneValue, playerTwoValue);
    });
  };

  const onloadWindow = () => {
    window.onload = openWindow;
  };

  return { onloadWindow, submit, addPlayerNames };
};

const display = Display();
display.onloadWindow();
display.submit();
display.addPlayerNames();
