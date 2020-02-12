export class DOM {
    static showMenu() {
        this.menu.classList.remove('hide');
    }
    static hideMenu() {
        this.menu.classList.add('hide');
        this.hideCongrats();
    }
    static showCongrats() {
        this.congrats.classList.remove('hide');
    }
    static hideCongrats() {
        this.congrats.classList.add('hide');
    }
}
DOM.menu = document.querySelector('#menu');
DOM.congrats = document.querySelector('#congrats');
DOM.newGame1P = document.querySelector('#newGame1P');
DOM.newGame2P = document.querySelector('#newGame2P');
