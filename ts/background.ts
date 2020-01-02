import { ctx, cvs } from "./script.js";

export class Background {
  draw(): void {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, cvs.width, cvs.height);
  }
}