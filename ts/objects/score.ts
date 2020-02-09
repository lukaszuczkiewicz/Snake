import { IDrawable } from "../interfaces/IDrawable.js";
import { ctx } from "../mechanics/canvas.js";
import { Color } from "../enums/color.js";

export class Score implements IDrawable {
  points: number = 0;
  player: number = 1;
  color: string = Color.yellow;
  x: number = 10;
  y: number = 40;

  draw(): void {
    ctx.font = `40px Calibri`;
    ctx.textAlign = "left";
    ctx.fillStyle = this.color;
    ctx.fillText(`Player ${this.player} - score: ${this.points}`, this.x, this.y);
  }

  increase() {
    this.points++;
  }

  reset() {
    this. points = 0;
  }
}