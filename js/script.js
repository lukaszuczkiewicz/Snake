import { Game } from "./mechanics/game.js";
const newGame1P = document.querySelector('#newGame1P');
const newGame2P = document.querySelector('#newGame2P');
const game = new Game();
newGame1P.addEventListener('click', () => {
    game.initGame();
    game.enableControls();
    game.mainLoop();
});
newGame2P.addEventListener('click', () => {
    // initGame();
    // enableControls();
    // mainLoop();
});
