import { Snake } from "./snake.js";

export const cvs: any = document.getElementById("canvas");
export const ctx = cvs.getContext("2d");
export const sq = 40;



function drawBg(): void {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, cvs.width, cvs.height);
};

drawBg();


function initGame() {
  let snake = new Snake();
  snake.draw();
};

initGame();