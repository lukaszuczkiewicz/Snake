import { IDrawable } from "./IDrawable.js";
import { ctx } from "./mechanics/canvas.js";

export class Score implements IDrawable{
  color: string = 'yellow';
  
  draw(text: any): void {
    ctx.font = `40px Calibri`;
    ctx.textAlign = "left";
    ctx.fillStyle = this.color;
    ctx.fillText(`Score: ${text}`, 40, 40);
  }
}