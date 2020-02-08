import { ctx } from "../mechanics/canvas.js";
import { Color } from "../enums/color.js";
export class Score {
    constructor() {
        this.color = Color.yellow;
    }
    draw(score) {
        ctx.font = `40px Calibri`;
        ctx.textAlign = "left";
        ctx.fillStyle = this.color;
        ctx.fillText(`Score: ${score}`, 40, 40);
    }
}
