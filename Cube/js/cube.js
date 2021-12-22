import Utils from './utils.js';

class Cube {
    constructor(id = 0, ctx) {
        this.ctx = ctx;
        this.wight = 45;
        this.height = 45;
        this.ctx.x = 50;
        this.ctx.y = 50;
        this.agle = 10;
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
        } if (cnt % 5 === 0) {
            this.ctx.y += 10;
            this.ctx.x = 530;
        } else {
            this.ctx.x += 80;
        }
    }

    drow() {
        this.agle += 0.1
        this.ctx.save();
        this.ctx.strokeStyle = Utils.generateColor();
        // this.ctx.strokeStyle = "#ffffffff";
        this.ctx.translate(this.ctx.x + this.wight / 2,this.ctx.y + this.height / 2);
        this.ctx.rotate(this.agle);
        this.ctx.translate(-(this.ctx.x + this.height / 2),-(this.ctx.y + this.height / 2))
        this.ctx.strokeRect(this.ctx.x, this.ctx.y, this.wight, this.height);



        this.ctx.restore();
    }
}
export default Cube;