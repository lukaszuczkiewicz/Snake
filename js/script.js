import { Snake } from './snake.js';
import { Apple } from './apple.js';
export const cvs = document.getElementById('canvas');
export const ctx = cvs.getContext('2d');
function drawBg() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, cvs.width, cvs.height);
}
drawBg();
let snake, apple;
function initGame() {
    snake = new Snake();
    snake.draw();
    apple = new Apple(10, 10);
    apple.draw();
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
document.addEventListener('keydown', e => {
    //left
    if (e.keyCode === 37 && snake.direction[0] === 0) {
        snake.direction = [-1, 0];
        // snake.blockXChange = true;
        //right
    }
    else if (e.keyCode === 39 && snake.direction[0] === 0) {
        snake.direction = [1, 0];
        // snake.blockXChange = true;
        //up
    }
    else if (e.keyCode === 38 && snake.direction[1] === 0) {
        snake.direction = [0, -1];
        // snake.blockYChange = true;
        //down
    }
    else if (e.keyCode === 40 && snake.direction[1] === 0) {
        snake.direction = [0, 1];
        // player1.blockYChange = true;
    }
});
