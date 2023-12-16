let index = 0;

document.getElementById("clickChange").addEventListener("click", () => {

    let colors = ["red", "blue", "orange", "yellow", "gree", "purple"];

    document.getElementById("body").style.background = colors[index++];

    if (index > colors.length - 1) {
        index = 0;
    };

});