import { Background } from '../objects/background.js';
import { Snake } from '../objects/snake.js';
import { Apple } from '../objects/apple.js';
import { DOM } from '../DOM.js';
import { KeyCode } from '../enums/keyCode.js';
import { Direction } from '../enums/direction.js';
export class SiglePlayerGame {
    constructor() {
        this.isPaused = false;
        this.timeInterval = 100;
        this.timeCounter = 0;
        this.lastTime = 0;
        this.isAnimated = false;
        this.mainLoop = (time = 0) => {
            const deltaTime = time - this.lastTime;
            this.lastTime = time;
            this.timeCounter += deltaTime;
            if (this.timeCounter > this.timeInterval && !this.isPaused) {
                this.timeCounter = 0;
                this.background.draw();
                this.apple.draw();
                this.snake.move();
                this.snake.checkCollision();
                this.snake.checkEarningPoints(this.apple.x, this.apple.y) &&
                    this.apple.createNewPosition(this.snake);
                this.snake.draw();
                this.snake.score.draw();
            }
            if (this.isAnimated)
                requestAnimationFrame(this.mainLoop);
        };
    }
    initGame() {
        this.background = new Background();
        this.background.draw();
        this.snake = new Snake();
        this.snake.draw();
        this.apple = new Apple(10, 10);
        this.apple.createNewPosition(this.snake);
        this.apple.draw();
        this.snake.score.draw();
        this.enableControls();
        this.isAnimated = true;
        this.mainLoop();
    }
    destroy() {
        this.isAnimated = null;
    }
    enableControls() {
        document.addEventListener('keydown', e => {
            if (e.keyCode === KeyCode.space) {
                this.isPaused = !this.isPaused;
                this.isPaused ? DOM.showMenu() : DOM.hideMenu();
            }
            if (this.isPaused)
                return;
            if ((e.keyCode === KeyCode.a || e.keyCode === KeyCode.left) &&
                this.snake.direction[0] === 0) {
                this.snake.direction = Direction.left;
            }
            else if ((e.keyCode === KeyCode.d || e.keyCode === KeyCode.right) &&
                this.snake.direction[0] === 0) {
                this.snake.direction = Direction.right;
            }
            else if ((e.keyCode === KeyCode.w || e.keyCode === KeyCode.up) &&
                this.snake.direction[1] === 0) {
                this.snake.direction = Direction.up;
            }
            else if ((e.keyCode === KeyCode.s || e.keyCode === KeyCode.down) &&
                this.snake.direction[1] === 0) {
                this.snake.direction = Direction.down;
            }
        });
    }
}
