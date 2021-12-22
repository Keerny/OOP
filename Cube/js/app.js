import Cube from './cube.js';

class application {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
        this.canvas.width = 1000;
        this.canvas.height = 1000;
        this.cube = [];
    }

    generateTiles() {
        for (let cubeCounter = 0; cubeCounter < 100; cubeCounter++) {
            let cube = new Cube(cubeCounter, this.ctx);
            this.cube.push(cube);
        }
    }

    animate() {
        this.ctx.clearRect(0,0, this.ctx.canvas.width, this.ctx.canvas.height);

        for (let i = 0; i < 100; i++) {
            this.cube[i].update(i);
            this.cube[i].drow();
        }
        requestAnimationFrame(() => this.animate());
    }

    run() {
        this.generateTiles();
        this.animate();
    }
}

new application().run();
console.log("hello")
