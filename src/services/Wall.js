import { Row } from '@/services/Row';

export class Wall {

    constructor (target, links = {}) {
        this.target = target;
        this.links = links;
        this.rows = [];
        this.initialize();
    }

    initialize () {
        this.rows = [];

        this.width = Math.floor(this.target.clientWidth / 44) + 1;
        // TODO: adapt depending on device "profile"
        this.height = Math.floor(this.target.clientHeight / 37 + 1);
        this.startx = Math.floor(this.target.clientWidth - (this.width * 44));
        this.starty = 0;
        //

        for (let i = 0; i < this.height; i++) {
            this.rows.push(new Row(this.width + (i === 0 && this.isMobile() ? 2 : 0), i));
        }
    }

    isMobile () {
        return window.clientWidth <= 768;
    }

    resize() {
        this.initialize();
    }
}