export class Node<T> {
  value: T;
  next: Node<T>;
  
  constructor(value: any){
      this.value = value;
      this.next = null;
  }
}