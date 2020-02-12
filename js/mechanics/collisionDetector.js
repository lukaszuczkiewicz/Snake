export class CollisionDetector {
    static getCollidedSnakesIds(snakes) {
        const snake1 = snakes[0];
        const snake2 = snakes[1];
        const head1 = snake1.last;
        const head2 = snake2.last;
        let ids = [];
        function checkCollision(current, head, id) {
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
