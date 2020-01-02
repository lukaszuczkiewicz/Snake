import { Queue } from './queue.js';
import { SnakePart } from './snakePart.js';
import { gridWidth, gridHeight } from './script.js';

export class Snake extends Queue<SnakePart> {
  direction: [number, number];
  score: number = 0;
  
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
    //borders
    if (this.last.value.x < 0) {
      this.last.value.x = gridWidth - 1;
    } else if (this.last.value.x > gridWidth - 1) {
      this.last.value.x = 0;
    }
    if (this.last.value.y < 0) {
      this.last.value.y = gridHeight - 1;
    } else if (this.last.value.y > gridHeight - 1) {
      this.last.value.y = 0;
    }

    //snake's body


    //apple


  }

  move() {
    this.checkCollision();
    this.enqueue(
      new SnakePart(
        this.last.value.x + this.direction[0],
        this.last.value.y + this.direction[1]
      )
    );
    this.dequeue();
  }

  changeDirection(direction: [number, number]) {
    this.direction = direction;
  }
}
