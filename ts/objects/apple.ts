import { Block } from "./block.js";
import { Snake } from "./snake.js";
import { gridWidth, gridHeight } from "../mechanics/canvas.js";

export class Apple extends Block {
  color = 'red';

  createNewPosition(snake: Snake) {
    this.x = Math.floor(Math.random() * gridWidth);
    this.y = Math.floor(Math.random() * gridHeight);

    let current = snake.first;
    while (current.next !== null) {
      if (current.value.x === this.x && current.value.y === this.y) {
        this.createNewPosition(snake); //create a new position to not allow new fruit appear under snake body
      }
      current = current.next;
    }
  }
}