import { Background } from '../objects/background.js';
import { Snake } from '../objects/snake.js';
import { Apple } from '../objects/apple.js';
import { Score } from '../objects/score.js';
import { DOM } from '../DOM.js';
import { IGame } from '../interfaces/IGame.js';
import { KeyCode } from '../enums/keyCode.js';

export class SiglePlayerGame implements IGame {
  private background: Background;
  private snake: Snake;
  private apple: Apple;
  private score: Score;

  private isPaused = false;
  private readonly timeInterval = 100;
  private timeCounter = 0;
  private lastTime = 0;   

  public initGame() {
    this.background = new Background();
    this.background.draw();
    this.snake = new Snake();
    this.snake.draw();
    this.apple = new Apple(10, 10);
    this.apple.createNewPosition(this.snake);
    this.apple.draw();
    this.score = new Score();
    this.score.draw(this.snake.score);

    this.enableControls();
    this.mainLoop();
  }

  mainLoop = (time = 0) => {
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
      this.score.draw(this.snake.score);
    }
    requestAnimationFrame(this.mainLoop);
  };

  public onDestroy() {
    this.mainLoop = null;
  }
  enableControls() {
    //controls
    document.addEventListener('keydown', e => {
      if (e.keyCode === 32) {
        //spacebar
        DOM.toggleMenu();
        this.isPaused = !this.isPaused;
      }
      if (this.isPaused) return;

      //left
      if (
        (e.keyCode === KeyCode.a || e.keyCode === KeyCode.left) &&
        this.snake.direction[0] === 0
      ) {
        this.snake.direction = [-1, 0];
        //right
      } else if (
        (e.keyCode === KeyCode.d || e.keyCode === KeyCode.right) &&
        this.snake.direction[0] === 0
      ) {
        this.snake.direction = [1, 0];
        //up
      } else if (
        (e.keyCode === KeyCode.w || e.keyCode === KeyCode.up) &&
        this.snake.direction[1] === 0
      ) {
        this.snake.direction = [0, -1];
        //down
      } else if (
        (e.keyCode === KeyCode.s || e.keyCode === KeyCode.down) &&
        this.snake.direction[1] === 0
      ) {
        this.snake.direction = [0, 1];
      }
    });
  }
}
