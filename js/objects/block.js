import { ctx } from "../mechanics/canvas.js";
export class Block {
    constructor(x, y, color) {
        this.size = 40;
        this.x = x;
        this.y = y;
        this.color = color;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
    }
}
