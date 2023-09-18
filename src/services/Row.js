import { Interval } from "@/services/Interval";
import { Block } from "@/services/Block";


const COLORS = ["white", "yellow", "red", "blue", "black"];
const SIZES = [1, 2, 3, 4, 6];
export class Row {

    /**
     * @type {Array<Interval>} intervals
     */
    intervals;

    constructor (size, y) {
        this.size = size;
        this.y = y;
        this.intervals = [new Interval(0, this.size - 1)];
        this.fill();
    }

    fill() {
        /** @var {Interval} interval */
        let interval;
        /** @var {number} size */
        let size;
        /** @var {number} shift */
        let shift;
        while (!this.isFull()) {
            // Pick a free interval
            interval = Row._pick(this.intervals.filter((interval) => interval.isEmpty()));
            // Pick an available size
            size = Row._pick(SIZES.filter((s) => s <= interval.size()));
            // Pick an available shift
            shift = Math.floor(Math.random() * (interval.size() - size));
            // Then replace the target interval by new ones
            this.intervals.splice(this.intervals.indexOf(interval), 1, ...[
                ...(shift > 0 ? [new Interval(interval.from, interval.from + shift - 1)] : []),
                new Interval(interval.from + shift, interval.from + shift + size - 1, new Block(Row._pick(COLORS), size, interval.from + shift, this.y)),
                ...((shift + size) < interval.size() ? [new Interval(interval.from + shift + size, interval.to)] : []),
            ]);
        }
    }

    blocks() {
        return this.intervals.filter((interval) => interval.block).map((interval) => interval.block);
    }

    isFull () {
        return this.intervals.every((i) => i.isFilled())
    }

    static _pick(elements) {
        return elements[Math.floor(Math.random() * elements.length)];
    }
}