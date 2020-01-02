import { Queue } from "./queue.js";
import { SnakePart } from "./snakePart.js";
export class Snake extends Queue {
    constructor() {
        super();
        this.enqueue(new SnakePart(3, 3));
        this.enqueue(new SnakePart(3, 4));
        this.enqueue(new SnakePart(3, 5));
        this.changeDirection([0, 1]);
    }
    draw() {
        let current = this.first;
        while (current !== null) {
            current.value.draw();
            current = current.next;
        }
    }
    checkCollision() {
        // to implement
    }
    move() {
        // to implement
    }
    changeDirection(direction) {
        this.direction = direction;
    }
}
