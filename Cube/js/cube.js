import Utils from './utils.js';

class Cube {
    constructor(id = 0, ctx) {
        this.ctx = ctx;
        this.wight = 30;
        this.height = 30;
        this.ctx.x = 0;
        this.ctx.y = 50;
        // this.agle = 10;
        this.location_y = this.ctx.y;
        this.location_x = this.ctx.x;
    }


    update(cnt) {
        if (cnt === 0) {
            this.ctx.y = 0;
            this.ctx.x = 0;
        }
        this.ctx.x += 10;
    }
    drow() {

        // if (this.ctx.x < 500)
        //     this.agle -= (Math.random() * 0.05);
        // if (this.ctx.x > 500)
        //     this.agle += (Math.random() * 0.05);
        this.ctx.save();
        this.ctx.strokeStyle = Utils.generateColor();
        // this.ctx.strokeStyle = "#ffffffff";
        // this.ctx.translate(this.ctx.x + this.wight / 2,this.location_y + this.height / 2);
        // this.ctx.rotate(this.agle);
        // this.ctx.translate(-(this.ctx.x + this.height / 2),-(this.location_y + this.height / 2))
        this.wight += 1;
        this.height += 1;
        if (this.location_y <= 501)
            this.location_y -= Math.random()*10;
        if (this.location_y >= 499)
            this.location_y += Math.random()*10;
        if (this.location_x < 500)
            this.location_x -= Math.random()*10;
        if (this.location_x > 500)
            this.location_x += Math.random()*10;
        this.ctx.strokeRect(this.location_x, this.location_y, this.wight, this.height);
        if (this.location_y >= 1000) {
            this.location_y = Math.random() * 1000
            this.wight = 30;
            this.height = 30;
        }
        if (this.location_y <= 0) {
            this.location_y = Math.random() * 1000
            this.wight = 30;
            this.height = 30;
        }
        if (this.location_x >= 1000) {
            this.location_x = Math.random() * 1000
            this.wight = 30;
            this.height = 30;
        }
        if (this.location_x <= 0) {
            this.location_x = Math.random() * 1000
            this.wight = 30;
            this.height = 30;
        }
        this.ctx.restore();
    }
}
export default Cube;