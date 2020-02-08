import { ctx } from "../mechanics/canvas.js";
import { IDrawable } from "../interfaces/IDrawable.js";
import { Color } from "../enums/color.js";

export class Block implements IDrawable{
  readonly size = 40;
  x: number;
  y: number;
  color: Color;

  constructor(x: number, y: number, color: Color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  draw(): void {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
  }
}