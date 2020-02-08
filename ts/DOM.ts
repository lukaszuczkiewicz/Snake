export class DOM {
  private static menu = document.querySelector('#menu');
  static newGame1P = document.querySelector('#newGame1P');
  static newGame2P = document.querySelector('#newGame2P');

  static toggleMenu(): void {
    this.menu.classList.toggle('hide');
  } 
}