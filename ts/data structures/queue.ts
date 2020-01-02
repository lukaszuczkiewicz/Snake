import { Node } from "./node.js";

export class Queue<T> {
  first: Node<T>;
  last: Node<T>;
  size: number;
  constructor(){
      this.first = null;
      this.last = null;
      this.size = 0;
  }
  enqueue(val: T): number{
      var newNode: Node<T> = new Node(val);
      if (!this.first){
          this.first = newNode;
          this.last = newNode;
      } else {
          this.last.next = newNode;
          this.last = newNode;
      }
      return ++this.size;
  }

  dequeue(): T {
      if(!this.first) return null;

      var temp = this.first;
      if(this.first === this.last) {
          this.last = null;
      }
      this.first = this.first.next;
      this.size--;
      return temp.value;
  }
}