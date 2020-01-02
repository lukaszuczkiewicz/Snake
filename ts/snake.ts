import { Queue } from "./queue.js";
import { SnakePart } from "./snakePart.js";

export class Snake extends Queue {
  private direction: [number, number];
  constructor() {
    super();
    this.enqueue(new SnakePart(3, 3));
    this.enqueue(new SnakePart(3, 4));
    this.enqueue(new SnakePart(3, 5));
    this.changeDirection([0, 1]);
  }

  draw() {
    this.first.value.draw();
    this.first.next.value.draw();
    this.first.next.next.value.draw();
  }

  checkCollision() {
    // to implement
  }

  move() {
    // to implement
  }

  changeDirection(direction: [number, number]) {
    this.direction = direction;
  }
}
