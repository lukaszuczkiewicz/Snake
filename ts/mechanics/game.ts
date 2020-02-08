import { Background } from '../objects/background.js';
import { Snake } from '../objects/snake.js';
import { Apple } from '../objects/apple.js';
import { Score } from '../score.js';

export class Game {


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
}

public mainLoop = (time = 0) => {
  const deltaTime = time - this.lastTime;
  this.lastTime = time;
  this.timeCounter += deltaTime;

  if (this.timeCounter > this.timeInterval && !this.isPaused) {
    this.timeCounter = 0;

    this.background.draw();
    this.apple.draw();
    this.snake.move();
    this.snake.checkCollision();
    
    this.snake.checkEarningPoints(this.apple.x, this.apple.y) && this.apple.createNewPosition(this.snake);
    this.snake.draw();
    this.score.draw(this.snake.score);
  }
  requestAnimationFrame(this.mainLoop);
}

enableControls() {
  //controls
  document.addEventListener('keydown', e => {
    if (e.keyCode === 32) {
      //spacebar
      this.isPaused = !this.isPaused;
    }
    if (this.isPaused) return;

    //left
    if ((e.keyCode === 37 || e.keyCode === 65) && this.snake.direction[0] === 0) {
      this.snake.direction = [-1, 0];
      //right
    } else if (
      (e.keyCode === 39 || e.keyCode === 68) &&
      this.snake.direction[0] === 0
    ) {
      this.snake.direction = [1, 0];
      //up
    } else if (
      (e.keyCode === 38 || e.keyCode === 87) &&
      this.snake.direction[1] === 0
    ) {
      this.snake.direction = [0, -1];
      //down
    } else if (
      (e.keyCode === 40 || e.keyCode === 83) &&
      this.snake.direction[1] === 0
    ) {
      this.snake.direction = [0, 1];
    }
  });
}
}