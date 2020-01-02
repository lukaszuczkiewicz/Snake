export class Node<T> {
  value: T;
  next: Node<T>;
  
  constructor(value: T){
      this.value = value;
      this.next = null;
  }
}