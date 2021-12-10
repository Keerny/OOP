class Color {
    // generateColor () {
    //     this.color = "#" + Math.round(Math.random() * 16777215).toString(16);
    //     return this.color
    // }

    static generateColor() {
        this.color = "#" + Math.round(Math.random() * 16777215).toString(16);
        return this.color
    }
}
// let color = "#" + Math.round(Math.random() * 16777215).toString(16);


// new generateColor();

export default Color;