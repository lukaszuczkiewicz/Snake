import { IDrawable } from "./IDrawable";

export class Score implements IDrawable{
  color: string = 'white';
  
  draw(): void {
    // ctx.font = `40px Calibri`;
    // ctx.textAlign = "left";
    // ctx.fillStyle = this.co;
    // ctx.fillText(`Score: ${snake.score}`, 40, 40);
  }
}