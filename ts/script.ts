import { DOM } from "./DOM.js";
import { IGame } from "./interfaces/IGame.js";
import { SiglePlayerGame } from "./mechanics/singlePlayerGame.js";
import { MultiPlayerGame } from "./mechanics/multiPlayerGame.js";

let game: IGame;
let isItFirstGame = true;

function createSinglePlayerGame() {
  if (!isItFirstGame) game.destroy();
  isItFirstGame = false;
  DOM.hideMenu();
  game = new SiglePlayerGame();
  game.initGame();
}

function createMultiPlayerGame() {
  if (!isItFirstGame) game.destroy();
  isItFirstGame = false;
  DOM.hideMenu();
  game = new MultiPlayerGame();
  game.initGame();
}

DOM.newGame1P.addEventListener('click', createSinglePlayerGame);
DOM.newGame2P.addEventListener('click', createMultiPlayerGame);