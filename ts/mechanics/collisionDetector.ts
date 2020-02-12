import { Snake } from "../objects/snake";

export class CollisionDetector {
  static isTwoSnakesCollision(snakes: Snake[]): number[] {
    const snake1 = snakes[0];
    const snake2 = snakes[1];
    const head1 = snake1.last;
    const head2 = snake2.last;
    let ids: number[] = [];

    function checkCollision(current, head, id): void {
      while (current.next !== null) {
        if (current.value.x === head.value.x && current.value.y === head.value.y) {
          ids.push(id);
        }
        current = current.next;
      }
    }

    checkCollision(snake2.first, head1, 0);
    checkCollision(snake1.first, head2, 1);

    return ids;
  }
}