import { Block } from "./block.js";
export class SnakePart extends Block {
    constructor() {
        super(...arguments);
        this.color = 'green';
    }
}
