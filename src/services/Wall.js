import { Row } from '@/services/Row'

export class Wall {
  constructor(target, isLeft) {
    this.target = target
    this.rows = []
    this.isleft = isLeft
    this.initialize()
  }

  initialize() {
    this.rows = []

    this.width = Math.ceil(this.target.clientWidth / 37) + 1
    // TODO: adapt depending on device "profile"
    this.height = Math.floor(this.target.clientHeight / 44) - 2
    this.startx = this.isleft ? this.target.clientWidth - 37 * this.width : 0
    this.starty = 0
    //

    for (let i = 0; i < this.height; i++) {
      this.rows.push(new Row(this.width, i))
    }
  }

  resize() {
    this.initialize()
  }
}
