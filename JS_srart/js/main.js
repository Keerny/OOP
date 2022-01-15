_root_ = document.getElementById("application")
console.log(_root_);

for (let doge_number = 0; doge_number < 1; doge_number++) {
    let doge_img = document.createElement("img")
    doge_img.setAttribute("src", "picture/11.jpg");
    doge_img.setAttribute("alt", "Doge picture");
    doge_img.setAttribute("id", "doge_" + doge_number);
    console.log(doge_img);

    _root_.append(doge_img)
}
_root_ = document.getElementById("application")
console.log(_root_);