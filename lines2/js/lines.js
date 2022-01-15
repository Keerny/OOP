class Lines {
    constructor(id = 0, ctx) {
        this.ctx = ctx;
        this.x_old= 0;
        this.y_old = 0;
    }

    drow() {
        this.ctx.lineWidth = Math.random() * 10;
        this.ctx.moveTo(this.x_old, this.y_old);
        let x = Math.random() * 1000;
        let y = Math.random() * 1000;
        this.ctx.lineTo(x, y);
        this.x_old = x;
        this.y_old = y;
        this.ctx.strokeStyle = "#0a0" + Math.round(8).toString(16);

        this.ctx.stroke();
        // this.ctx.strokeRect(this.x, this.y);
        console.log("str");

    }
}
export default Lines;