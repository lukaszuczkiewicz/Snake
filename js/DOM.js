export class DOM {
    static toggleMenu() {
        this.menu.classList.toggle('hide');
    }
}
DOM.menu = document.querySelector('#menu');
DOM.newGame1P = document.querySelector('#newGame1P');
DOM.newGame2P = document.querySelector('#newGame2P');
