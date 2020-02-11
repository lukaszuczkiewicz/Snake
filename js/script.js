import { DOM } from "./DOM.js";
import { SiglePlayerGame } from "./mechanics/singlePlayerGame.js";
import { MultiPlayerGame } from "./mechanics/multiPlayerGame.js";
let game;
let isItFirstGame = true;
DOM.newGame1P.addEventListener('click', () => {
    if (!isItFirstGame)
        game.destroy();
    isItFirstGame = false;
    DOM.hideMenu();
    game = new SiglePlayerGame();
    game.initGame();
});
DOM.newGame2P.addEventListener('click', () => {
    if (!isItFirstGame)
        game.destroy();
    isItFirstGame = false;
    DOM.hideMenu();
    game = new MultiPlayerGame();
    game.initGame();
});
