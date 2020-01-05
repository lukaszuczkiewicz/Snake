import { ctx } from "./mechanics/canvas.js";
export class Score {
    constructor() {
        this.color = 'yellow';
    }
    draw(text) {
        ctx.font = `40px Calibri`;
        ctx.textAlign = "left";
        ctx.fillStyle = this.color;
        ctx.fillText(`Score: ${text}`, 40, 40);
    }
}