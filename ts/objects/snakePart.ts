import { Block } from "./block.js";
import { Color } from "../enums/color.js";

export class SnakePart extends Block {
  constructor(x: number, y: number, color: Color) {
    super(x, y, color);
  }
}