import { Queue } from '../data structures/queue.js';
import { SnakePart } from './snakePart.js';
import { gridWidth, gridHeight } from '../mechanics/canvas.js';
import { Direction } from '../enums/direction.js';
import { Color } from '../enums/color.js';
import { Score } from './score.js';

export class Snake extends Queue<SnakePart> {
  direction: Direction;
  isEating = false;
  color: Color;
  score: Score;

  constructor(
    direction: Direction = Direction.up,
    x: number = 8,
    y: number = 5,
    color = Color.green) {
    super();
    this.color = color;
    this.score = new Score();

    for (let i = 0; i < 3; i++) {
      this.enqueue(new SnakePart(x, y + i, color));
    }
    this.changeDirection(direction);
  }

  draw(): void {
    let current = this.first;

    while (current !== null) {
      current.value.draw();
      current = current.next;
    }
  }

  checkCollision(): void {
    //with borders
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

    //with snake's tail
    let current = this.first;
    while (current.next !== null) {
      if (current.value.x === this.last.value.x && current.value.y === this.last.value.y) {
        //gameOver
        this.reset();
        return;
      }
      current = current.next;
    }
  }

  checkEarningPoints(appleX: number, appleY: number): boolean {
    if (this.last.value.x === appleX && this.last.value.y === appleY) {
      // extend body
      this.isEating = true;
      this.score.increase();
      return true;
    }
    return false;
  }

  checkIfWin(): boolean {
    return (this.score.points >= 20);
  }

  move(): void {
    this.enqueue(
      new SnakePart(
        this.last.value.x + this.direction[0],
        this.last.value.y + this.direction[1],
        this.color
      )
    );
    if (!this.isEating) {
      this.dequeue(); 
    }
    this.isEating = false;
  }

  changeDirection(direction: Direction): void {
    this.direction = direction;
  }

  reset(): void {
    let current = this.first;
    while (current.next.next.next !== null) {
      this.dequeue();
      current = current.next;
    }
    this.score.reset();
  }
}
