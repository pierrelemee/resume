export class Block {

    constructor(color, size, x, y) {
        this.color = color;
        this.size = size;
        this.x = x;
        this.y = y;
    }

    key() {
        return `${this.x}-${this.y}`;
    }
}