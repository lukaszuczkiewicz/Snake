import { initGame, enableControls, mainLoop } from "./mechanics/game.js";
const newGame1P = document.querySelector('#newGame1P');
const newGame2P = document.querySelector('#newGame2P');
newGame1P.addEventListener('click', () => {
    initGame();
    enableControls();
    mainLoop();
});
newGame2P.addEventListener('click', () => {
    // initGame();
    // enableControls();
    // mainLoop();
});
