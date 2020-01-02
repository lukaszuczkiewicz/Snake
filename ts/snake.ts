import { Queue } from "./queue.js";
import { Block } from "./block.js";

export class Snake extends Queue {
  constructor(x: number, y: number, direction: [number, number]) {
    super();
    this.enqueue(new Block(3, 3));
  }

  draw() {
    this.first.value.draw();
  }
}
