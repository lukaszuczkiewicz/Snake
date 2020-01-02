import { ctx, cvs } from "../script.js";
import { IDrawable } from "../IDrawable.js";

export class Background implements IDrawable {
  color: string = 'black';
  draw(): void {
    ctx.fillStyle = this.color;
    ctx.fillRect(0, 0, cvs.width, cvs.height);
  }
}