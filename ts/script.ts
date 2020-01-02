import { Snake } from './snake.js';
import { Apple } from './apple.js';

export const cvs: any = document.getElementById('canvas');
export const ctx = cvs.getContext('2d');

function drawBg(): void {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, cvs.width, cvs.height);
}

drawBg();

let snake: Snake, apple: Apple;
function initGame() {
  snake = new Snake();
  snake.draw();

  apple = new Apple(10, 10);
  apple.draw();
}

// setInterval(() => {
//   drawBg();
//   snake.move();
//   snake.draw();
//   console.log('time');
// }, 500);

initGame();

const timeInterval = 100;
let timeCounter = 0;
let lastTime = 0;

function mainLoop(time = 0) {
  const deltaTime = time - lastTime;
  lastTime = time;
  timeCounter += deltaTime;

  if (timeCounter > timeInterval) {
    timeCounter = 0;

    snake.move();
    // snake.checkCollision();
    // snake.eat();
    drawBg();
    apple.draw();
    snake.draw();
    // drawScore();
  }
  requestAnimationFrame(mainLoop);
}

mainLoop();
