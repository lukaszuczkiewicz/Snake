import { ctx } from "./script.js";
export class Block {
    constructor(x, y) {
        this.size = 40;
        this.x = x;
        this.y = y;
    }
    draw() {
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
    }
}
