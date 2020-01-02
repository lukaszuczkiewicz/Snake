import { Apple } from './apple.js';
import { Background } from './background.js';
import { Snake } from './snake.js';

export const cvs: any = document.getElementById('canvas');
export const ctx = cvs.getContext('2d');
export const gridWidth = 32;
export const gridHeight = 18;


function drawScore() {
  ctx.font = `40px Calibri`;
  ctx.textAlign = "left";
  ctx.fillStyle = "white";
  ctx.fillText(`Score: ${snake.score}`, 40, 40);
};

let background: Background, snake: Snake, apple: Apple;
function initGame() {
  background = new Background();
  background.draw();
  snake = new Snake();
  snake.draw();
  apple = new Apple(10, 10);
  apple.draw();
  drawScore();
}

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
    background.draw();
    apple.draw();
    snake.draw();
    drawScore();
  }
  requestAnimationFrame(mainLoop);
}

mainLoop();

document.addEventListener('keydown', e => {
    //left
    if ((e.keyCode === 37 || e.keyCode === 65) && snake.direction[0] === 0) {
      snake.direction = [-1, 0];
      //right
    } else if ((e.keyCode === 39 || e.keyCode === 68) && snake.direction[0] === 0) {
      snake.direction = [1, 0];
      //up
    } else if ((e.keyCode === 38 || e.keyCode === 87) && snake.direction[1] === 0) {
      snake.direction = [0, -1];
      //down
    } else if ((e.keyCode === 40 || e.keyCode === 83) && snake.direction[1] === 0) {
      snake.direction = [0, 1];
    }
});
