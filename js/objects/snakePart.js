import { Block } from "./block.js";
import { Color } from "../enums/color.js";
export class SnakePart extends Block {
    constructor() {
        super(...arguments);
        this.color = Color.green;
    }
}
