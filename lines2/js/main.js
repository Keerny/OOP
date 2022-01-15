import Lines from './lines.js';

class application {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
        this.canvas.width = 1000;
        this.canvas.height = 1000;
        this.line = [];
    }
    generateLines() {
        for (let lineCounter = 0; lineCounter < 80; lineCounter++) {
            let lines = new Lines(lineCounter, this.ctx);
            this.line.push(lines);
        }
    }

    show() {
        for (let i = 0; i < 80; i++)
        this.line[i].drow();
    }

    run() {
        this.generateLines()
        this.show()
    }

}

new application().run();
console.log("hello")
