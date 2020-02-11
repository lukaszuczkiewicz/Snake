export class DOM {
    static showMenu() {
        this.menu.classList.remove('hide');
    }
    static hideMenu() {
        this.menu.classList.add('hide');
    }
    static updateRecord(score) {
        this.record.textContent = `${score} points`;
    }
}
DOM.menu = document.querySelector('#menu');
DOM.newGame1P = document.querySelector('#newGame1P');
DOM.newGame2P = document.querySelector('#newGame2P');
DOM.record = document.querySelector('#record');
