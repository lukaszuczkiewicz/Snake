import { Queue } from '../data structures/queue.js';
import { SnakePart } from './snakePart.js';
import { gridWidth, gridHeight } from '../mechanics/canvas.js';
import { Direction } from '../enums/direction.js';
import { Color } from '../enums/color.js';
export class Snake extends Queue {
    constructor(color = Color.green) {
        super();
        this.score = 0;
        this.isEating = false;
        this.color = color;
        this.enqueue(new SnakePart(8, 3, color));
        this.enqueue(new SnakePart(8, 4, color));
        this.enqueue(new SnakePart(8, 5, color));
        this.changeDirection(Direction.up);
    }
    draw() {
        let current = this.first;
        while (current !== null) {
            current.value.draw();
            current = current.next;
        }
    }
    checkCollision() {
        //with borders
        if (this.last.value.x < 0) {
            this.last.value.x = gridWidth - 1;
        }
        else if (this.last.value.x > gridWidth - 1) {
            this.last.value.x = 0;
        }
        if (this.last.value.y < 0) {
            this.last.value.y = gridHeight - 1;
        }
        else if (this.last.value.y > gridHeight - 1) {
            this.last.value.y = 0;
        }
        //with snake's tail
        let current = this.first;
        while (current.next !== null) {
            if (current.value.x === this.last.value.x && current.value.y === this.last.value.y) {
                //gameOver
                this.reset();
                this.score = 0;
                return;
            }
            current = current.next;
        }
    }
    checkEarningPoints(appleX, appleY) {
        if (this.last.value.x === appleX && this.last.value.y === appleY) {
            // extend body
            this.isEating = true;
            this.score++;
            return true;
        }
        return false;
    }
    move() {
        this.enqueue(new SnakePart(this.last.value.x + this.direction[0], this.last.value.y + this.direction[1], this.color));
        if (!this.isEating) {
            this.dequeue();
        }
        this.isEating = false;
    }
    changeDirection(direction) {
        this.direction = direction;
    }
    reset() {
        let current = this.first;
        while (current.next.next.next !== null) {
            this.dequeue();
            current = current.next;
        }
    }
}
