import Cube from './cube.js';


// class Background {
//      constructor(ctx) {
//         this.ctx = ctx;
//         this.wight = 1000;
//         this.height = 1000;
//         this.ctx.x = 0;
//         this.ctx.y = 0;
//     }
//     drow() {
//         this.ctx.fillStyle = "#a71b1b";
//         this.ctx.fillRect(this.ctx.x, this.ctx.y, this.wight, this.height);
//     }
// }
//
// new Background().drow();

class Application {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
        this.canvas.width = 1000;
        this.canvas.height = 1000;
        this.cube = [];
    }

    generateTiles() {
        for (let cubeCounter = 0; cubeCounter < 49; cubeCounter++) {
            let cube = new Cube(cubeCounter, this.ctx);
            this.cube.push(cube);
        }
    }
    run() {
        this.generateTiles();
        for (let i = 1; i < 49; i++) {
            let Cube = this.cube[i];
            console.log(i)
            Cube.drow();
            if (i % 8 != 0) {
                this.ctx.x += 80;
            } else {
                this.ctx.y += 150;
                this.ctx.x -= 560;
            }
        }
    }
}

class Animation {
    
}

new Application().run();

console.log("hello")