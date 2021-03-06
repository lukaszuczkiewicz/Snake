import { Background } from '../objects/background.js';
import { Snake } from '../objects/snake.js';
import { Apple } from '../objects/apple.js';
import { DOM } from '../objects/DOM.js';
import { KeyCode } from '../enums/keyCode.js';
import { Direction } from '../enums/direction.js';
import { Color } from '../enums/color.js';
import { CollisionDetector } from './collisionDetector.js';
export class MultiPlayerGame {
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
                this.snakes.forEach(snake => snake.move());
                this.snakes.forEach(snake => snake.checkCollision());
                this.snakes.forEach(snake => snake.checkEarningPoints(this.apple.x, this.apple.y) && this.apple.createNewPosition(snake));
                let collidedSnakesIds = CollisionDetector.getCollidedSnakesIds(this.snakes);
                if (collidedSnakesIds.length > 0) {
                    collidedSnakesIds.forEach(id => this.snakes[id].reset());
                }
                this.checkIfWin();
                this.snakes.forEach(snake => snake.draw());
                this.snakes.forEach(snake => snake.score.draw());
            }
            if (this.isAnimated)
                requestAnimationFrame(this.mainLoop);
        };
    }
    initGame() {
        this.background = new Background();
        this.background.draw();
        this.snakes = [new Snake(), new Snake(Direction.up, 23, 5, Color.orange)];
        this.snakes[1].score.y = 100;
        this.snakes[1].score.player = 2;
        this.snakes.forEach(snake => snake.draw());
        this.apple = new Apple(10, 10);
        this.apple.createNewPosition(this.snakes[0]);
        this.apple.draw();
        this.snakes.forEach(snake => snake.score.draw());
        this.enableControls();
        this.isAnimated = true;
        this.mainLoop();
    }
    destroy() {
        this.isPaused = true;
        this.isAnimated = false;
    }
    checkIfWin() {
        if (this.snakes[0].checkIfWin() || this.snakes[1].checkIfWin()) {
            this.destroy();
            DOM.showCongrats();
            DOM.showMenu();
        }
    }
    enableControls() {
        document.addEventListener('keydown', this.reactToKeys.bind(this));
    }
    reactToKeys(e) {
        if (!this.isAnimated)
            return;
        if (e.keyCode === KeyCode.space) {
            this.isPaused = !this.isPaused;
            this.isPaused ? DOM.showMenu() : DOM.hideMenu();
        }
        if (this.isPaused)
            return;
        //PLAYER 1
        //left
        if ((e.keyCode === KeyCode.a) &&
            this.snakes[0].direction[0] === 0) {
            this.snakes[0].direction = Direction.left;
            //right
        }
        else if ((e.keyCode === KeyCode.d) &&
            this.snakes[0].direction[0] === 0) {
            this.snakes[0].direction = Direction.right;
            //up
        }
        else if ((e.keyCode === KeyCode.w) &&
            this.snakes[0].direction[1] === 0) {
            this.snakes[0].direction = Direction.up;
            //down
        }
        else if ((e.keyCode === KeyCode.s) &&
            this.snakes[0].direction[1] === 0) {
            this.snakes[0].direction = Direction.down;
        }
        //PLAYER 2
        if ((e.keyCode === KeyCode.left) &&
            this.snakes[1].direction[0] === 0) {
            this.snakes[1].direction = Direction.left;
            //right
        }
        else if ((e.keyCode === KeyCode.right) &&
            this.snakes[1].direction[0] === 0) {
            this.snakes[1].direction = Direction.right;
            //up
        }
        else if ((e.keyCode === KeyCode.up) &&
            this.snakes[1].direction[1] === 0) {
            this.snakes[1].direction = Direction.up;
            //down
        }
        else if ((e.keyCode === KeyCode.down) &&
            this.snakes[1].direction[1] === 0) {
            this.snakes[1].direction = Direction.down;
        }
    }
}
