import Color from './color.js';

class Cube {
    constructor(id = 0, ctx) {
        this.ctx = ctx;
        this.id = id;
        this.wight = 45;
        this.height = 45;
        this.ctx.x = 10;
        this.ctx.y = 10;
        // this.color = Color.generateColor();
        // this.color = "#145438";
        // this.color = "#" + Math.round(Math.random() * 16777215).toString(16);
    }
    drow() {
        this.ctx.fillStyle = Color.generateColor();
        this.ctx.fillRect(this.ctx.x,this.ctx.y, this.wight, this.height);
        this.ctx.fillStyle = "#001448";
        this.ctx.fillRect(this.ctx.x+(this.wight/20),this.ctx.y+(this.height/20), this.wight-(this.wight/10), this.height-(this.height/10));
    }
}

export default Cube;