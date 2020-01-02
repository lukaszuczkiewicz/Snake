import { Snake } from "./snake.js";
import { Apple } from "./apple.js";
export const cvs = document.getElementById("canvas");
export const ctx = cvs.getContext("2d");
// export const sq = 40;
function drawBg() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cvs.width, cvs.height);
}
;
drawBg();
let snake, apple;
function initGame() {
    snake = new Snake();
    snake.draw();
    apple = new Apple(10, 10);
    apple.draw();
}
;
setInterval(() => {
    drawBg();
    snake.move();
    snake.draw();
    console.log('time');
}, 500);
initGame();
