class Square {
    constructor(ctx, id) {
        this.ctx = canvas.getContext('2d');
        this.id = id;
        this.width = Math.random() * 12.5 + 50;
        this.height = Math.random() * 12.5 + 50;
        this.ctx.x = 10;
        this.ctx.y = 10;
        this.color = "#" + Math.round(Math.random() * 16777215).toString(16);
    }
    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.ctx.x,this.ctx.y, this.width, this.height);
    }
}
export default Square;