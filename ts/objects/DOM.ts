export class DOM {
  private static menu = document.querySelector('#menu');
  private static congrats = document.querySelector('#congrats');
  static newGame1P = document.querySelector('#newGame1P');
  static newGame2P = document.querySelector('#newGame2P');

  static showMenu(): void {
    this.menu.classList.remove('hide');
  }
  static hideMenu(): void {
    this.menu.classList.add('hide');
    this.hideCongrats();
  }
  static showCongrats(): void {
    this.congrats.classList.remove('hide');
  }
  static hideCongrats(): void {
    this.congrats.classList.add('hide');
  }
}