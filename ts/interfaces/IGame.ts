export interface IGame {
  initGame(): void;
  mainLoop(): void;
  enableControls(): void;
  onDestroy(): void;
}