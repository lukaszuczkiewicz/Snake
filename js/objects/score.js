import { ctx } from "../mechanics/canvas.js";
import { Color } from "../enums/color.js";
export class Score {
    constructor() {
        this.points = 0;
        this.player = 1;
        this.color = Color.yellow;
        this.x = 10;
        this.y = 40;
    }
    draw() {
        ctx.font = `40px Calibri`;
        ctx.textAlign = "left";
        ctx.fillStyle = this.color;
        ctx.fillText(`Player ${this.player} - score: ${this.points}`, this.x, this.y);
    }
    increase() {
        this.points++;
    }
    reset() {
        this.points = 0;
    }
}
