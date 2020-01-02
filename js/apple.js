import { Block } from "./block.js";
export class Apple extends Block {
    constructor() {
        super(...arguments);
        this.color = 'red';
    }
}
