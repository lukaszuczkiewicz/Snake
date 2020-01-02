import { ctx, cvs } from "./script.js";
export class Background {
    constructor() {
        this.color = 'black';
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(0, 0, cvs.width, cvs.height);
    }
}
