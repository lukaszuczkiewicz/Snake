export interface IGame {
  initGame(): void;
  mainLoop();
  enableControls(): void;
}