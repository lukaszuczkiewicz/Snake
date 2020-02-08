import { Background } from '../objects/background.js';
import { Snake } from '../objects/snake.js';
import { Apple } from '../objects/apple.js';
import { Score } from '../score.js';

let background: Background;
let snake: Snake;
let apple: Apple;
let score: Score;

let isPaused = false;
const timeInterval = 100;
let timeCounter = 0;
let lastTime = 0;

export function initGame() {
  background = new Background();
  background.draw();
  snake = new Snake();
  snake.draw();
  apple = new Apple(10, 10);
  apple.createNewPosition(snake);
  apple.draw();
  score = new Score();
  score.draw(snake.score);
}

export function mainLoop(time = 0) {
  const deltaTime = time - lastTime;
  lastTime = time;
  timeCounter += deltaTime;

  if (timeCounter > timeInterval && !isPaused) {
    timeCounter = 0;

    background.draw();
    apple.draw();
    snake.move();
    snake.checkCollision();
    
    snake.checkEarningPoints(apple.x, apple.y) && apple.createNewPosition(snake);
    snake.draw();
    score.draw(snake.score);
  }
  requestAnimationFrame(mainLoop);
}

export function enableControls() {
  //controls
  document.addEventListener('keydown', e => {
    if (e.keyCode === 32) {
      //spacebar
      isPaused = !isPaused;
    }
    if (isPaused) return;

    //left
    if ((e.keyCode === 37 || e.keyCode === 65) && snake.direction[0] === 0) {
      snake.direction = [-1, 0];
      //right
    } else if (
      (e.keyCode === 39 || e.keyCode === 68) &&
      snake.direction[0] === 0
    ) {
      snake.direction = [1, 0];
      //up
    } else if (
      (e.keyCode === 38 || e.keyCode === 87) &&
      snake.direction[1] === 0
    ) {
      snake.direction = [0, -1];
      //down
    } else if (
      (e.keyCode === 40 || e.keyCode === 83) &&
      snake.direction[1] === 0
    ) {
      snake.direction = [0, 1];
    }
  });
}
