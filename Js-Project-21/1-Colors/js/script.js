const clickChange = document.getElementById("clickChange");
const body = document.getElementById("body");
let index = 0;

function genrateColor() {
    let colors = ["red", "blue", "orange", "yellow", "gree", "purple"];
    body.style.background = colors[index++];
    if (index > colors.length - 1) {
        index = 0;
    };
};
clickChange.addEventListener("click", genrateColor);