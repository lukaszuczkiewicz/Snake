import { ctx } from "../mechanics/canvas.js";
import { IDrawable } from "../interfaces/IDrawable.js";

export class Block implements IDrawable{
  x: number;
  y: number;
  size = 40;
  color = 'white';

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  draw(): void {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
  }
}