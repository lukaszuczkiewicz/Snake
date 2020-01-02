import { Snake } from "./snake.js";
export const cvs = document.getElementById("canvas");
export const ctx = cvs.getContext("2d");
export const sq = 40;
function drawBg() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cvs.width, cvs.height);
}
;
drawBg();
function initGame() {
    let snake = new Snake(3, 3, [0, 1]);
    snake.draw();
}
;
initGame();
