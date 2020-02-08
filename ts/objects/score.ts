import { IDrawable } from "../interfaces/IDrawable.js";
import { ctx } from "../mechanics/canvas.js";
import { Color } from "../enums/color.js";

export class Score implements IDrawable {
  color: string = Color.yellow;
  draw(score: number): void {
    ctx.font = `40px Calibri`;
    ctx.textAlign = "left";
    ctx.fillStyle = this.color;
    ctx.fillText(`Score: ${score}`, 40, 40);
  }
}