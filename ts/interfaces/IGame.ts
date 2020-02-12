export interface IGame {
  initGame(): void;
  mainLoop(): void;
  enableControls(): void;
  reactToKeys(e: KeyboardEvent): void;
  destroy(): void;
}