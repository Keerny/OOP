class Utils {

    static generateColor() {
        return "#" + Math.round(Math.random() * 16777215).toString(16);
    }
}


export default Utils;