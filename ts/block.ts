import { ctx } from "./script.js";

export class Block {
  x: number;
  y: number;
  size = 40;
  color = 'white';

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
  }
}