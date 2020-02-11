export class DOM {
  private static menu = document.querySelector('#menu');
  static newGame1P = document.querySelector('#newGame1P');
  static newGame2P = document.querySelector('#newGame2P');
  private static record = document.querySelector('#record');

  static showMenu(): void {
    this.menu.classList.remove('hide');
  }
  static hideMenu(): void {
    this.menu.classList.add('hide');
  }
  static updateRecord(score: string): void {
    this.record.textContent = `${score} points`;
  }
}