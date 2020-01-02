import { ctx } from "../mechanics/canvas.js";
export class Block {
    constructor(x, y) {
        this.size = 40;
        this.color = 'white';
        this.x = x;
        this.y = y;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
    }
}
