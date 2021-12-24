import Utils from './utils.js';

class Cube {
    constructor(id = 0, ctx) {
        this.ctx = ctx;
        this.wight = 45;
        this.height = 45;
        this.ctx.x = 50;
        this.ctx.y = 50;
        this.agle = 10;
        this.m = this.ctx.y;
    }
    // update(cnt) {
    //     this.ctx.x = 50;
    //     this.ctx.y = 50;
    //     if (cnt % 8 != 0) {
    //         this.ctx.x += 10;
    //     } else {
    //         this.ctx.y += 150;
    //         this.ctx.x += 560;
    //     }
    // }

    update(cnt) {
        if (cnt === 0) {
            this.ctx.y = 0;
            this.ctx.x = 0;
        } if (cnt % 5 === 0) {
            this.ctx.y += 100;
            // this.ctx.x = 530;
        } else {
            this.ctx.x += 80;
        }
    }

    drow() {
        this.agle += (Math.random() * 0.05);
        this.ctx.save();
        this.ctx.strokeStyle = Utils.generateColor();
        // this.ctx.strokeStyle = "#ffffffff";
        this.ctx.translate(this.ctx.x + this.wight / 2,this.m + this.height / 2);
        this.ctx.rotate(this.agle);
        this.ctx.translate(-(this.ctx.x + this.height / 2),-(this.m + this.height / 2))
        this.wight += Math.random() - 0.5;
        this.height += Math.random() - 0.5;
        this.m += Math.random()*10;
        this.ctx.strokeRect(this.ctx.x, this.m, this.wight, this.height);
        if (this.m >= 1000) {
            this.m = 0
        }

        this.ctx.restore();

    }
}
export default Cube;