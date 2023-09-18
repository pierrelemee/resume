export class Interval {

    constructor(from, to, block = null) {
        this.from = from;
        this.to = to;
        this.block = block;
    }

    size() {
        return this.to - this.from + 1;
    }

    isEmpty(){
        return this.block == null;
    }

    isFilled(){
        return !this.isEmpty();
    }
}