export interface IGame {
  initGame(): void;
  mainLoop(): void;
  enableControls(): void;
  destroy(): void;
}