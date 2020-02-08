import { DOM } from "./DOM.js";
import { SiglePlayerGame } from "./mechanics/singlePlayerGame.js";
import { MultiPlayerGame } from "./mechanics/multiPlayerGame.js";
let game;
DOM.newGame1P.addEventListener('click', () => {
    DOM.toggleMenu();
    game = new SiglePlayerGame();
    game.initGame();
});
DOM.newGame2P.addEventListener('click', () => {
    DOM.toggleMenu();
    game = new MultiPlayerGame();
    game.initGame();
});
