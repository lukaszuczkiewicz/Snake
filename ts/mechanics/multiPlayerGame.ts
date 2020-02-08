import { Background } from '../objects/background.js';
import { Snake } from '../objects/snake.js';
import { Apple } from '../objects/apple.js';
import { Score } from '../objects/score.js';
import { DOM } from '../DOM.js';
import { IGame } from '../interfaces/IGame.js';
import { KeyCode } from '../enums/keyCode.js';
import { Direction } from '../enums/direction.js';
import { Color } from '../enums/color.js';

export class MultiPlayerGame implements IGame {
  private background: Background;
  private snakes: Snake[];
  private apple: Apple;
  private score: Score;

  private isPaused = false;
  private readonly timeInterval = 100;
  private timeCounter = 0;
  private lastTime = 0;   

  public initGame() {
    this.background = new Background();
    this.background.draw();
    this.snakes = [new Snake(), new Snake(Color.orange)];
    this.snakes.forEach(snake => snake.draw());
    this.apple = new Apple(10, 10);
    this.apple.createNewPosition(this.snakes[0]);
    this.apple.draw();
    this.score = new Score();
    this.score.draw(this.snakes[0].score);      

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
      this.snakes.forEach(snake => snake.move());
      this.snakes.forEach(snake => snake.checkCollision());
      
      this.snakes.forEach(snake => snake.checkEarningPoints(this.apple.x, this.apple.y) && this.apple.createNewPosition(snake));

      this.snakes.forEach(snake => snake.draw());
      this.score.draw(this.snakes[0].score);
    }
    requestAnimationFrame(this.mainLoop);
  };

  public onDestroy() {
    this.mainLoop = null;
  }
  enableControls() {
    //controls
    document.addEventListener('keydown', e => {
      if (e.keyCode === KeyCode.space) {
        //spacebar
        DOM.toggleMenu();
        this.isPaused = !this.isPaused;
      }
      if (this.isPaused) return;

      //PLAYER 1
      //left
      if (
        (e.keyCode === KeyCode.a) &&
        this.snakes[0].direction[0] === 0
      ) {
        this.snakes[0].direction = Direction.left;
        //right
      } else if (
        (e.keyCode === KeyCode.d) &&
        this.snakes[0].direction[0] === 0
      ) {
        this.snakes[0].direction = Direction.right;
        //up
      } else if (
        (e.keyCode === KeyCode.w) &&
        this.snakes[0].direction[1] === 0
      ) {
        this.snakes[0].direction = Direction.up;
        //down
      } else if (
        (e.keyCode === KeyCode.s) &&
        this.snakes[0].direction[1] === 0
      ) {
        this.snakes[0].direction = Direction.down;
      }

      //PLAYER 2
      if (
        (e.keyCode === KeyCode.left) &&
        this.snakes[1].direction[0] === 0
      ) {
        this.snakes[1].direction = Direction.left;
        //right
      } else if (
        (e.keyCode === KeyCode.right) &&
        this.snakes[1].direction[0] === 0
      ) {
        this.snakes[1].direction = Direction.right;
        //up
      } else if (
        (e.keyCode === KeyCode.up) &&
        this.snakes[1].direction[1] === 0
      ) {
        this.snakes[1].direction = Direction.up;
        //down
      } else if (
        (e.keyCode === KeyCode.down) &&
        this.snakes[1].direction[1] === 0
      ) {
        this.snakes[1].direction = Direction.down;
      }
    });
  }
}
