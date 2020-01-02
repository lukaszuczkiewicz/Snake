import { Queue } from "./queue.js";
import { SnakePart } from "./snakePart.js";

export class Snake extends Queue<SnakePart> {
  direction: [number, number]
  constructor() {
    super();
    this.enqueue(new SnakePart(8, 3));
    this.enqueue(new SnakePart(8, 4));
    this.enqueue(new SnakePart(8, 5));
    this.changeDirection([0, 1]);
  }

  draw(): void {
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
    this.enqueue(new SnakePart(this.last.value.x + this.direction[0], this.last.value.y + this.direction[1],));
    this.dequeue();
  }

  changeDirection(direction: [number, number]) {
    this.direction = direction;
  }
}
