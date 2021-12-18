import Utils from './utils.js';

class Cube {
    constructor(id = 0, ctx) {
        this.ctx = ctx;
        this.wight = 45;
        this.height = 45;
        this.ctx.x = 10;
        this.ctx.y = 10;
        this.agle = Math.sin() * Math.PI;
    }

    drow() {

        // this.ctx.fillStyle = Color.generateColor();
        // this.ctx.fillRect(0, 0, 1000, 1000);
        // console.log("bg");

        this.ctx.strokeStyle = Utils.generateColor();
        this.ctx.strokeRect(this.ctx.x, this.ctx.y, this.wight, this.height);
        console.log("str");

    }
}
export default Cube;