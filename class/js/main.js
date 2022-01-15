
const C = document.getElementById("application")

function getStyleString(color, margin_top, margin_left) {
    return `background-color: #${color}; width: 100px; height: 100px; position: absolute; margin-top: ${margin_top}px; margin-left: ${margin_left}px;`;
}

for (let i = 0; i < 10; i++) {
    let box = document.createElement('div');
    box.setAttribute('id', i);

    let color = {
        r: Math.round(Math.random() * 255),
        g: Math.round(Math.random() * 255),
        b: Math.round(Math.random() * 255)
    }
    color = color.r.toString(16) + color.g.toString(16) + color.b.toString(16);

    console.log(color)
}