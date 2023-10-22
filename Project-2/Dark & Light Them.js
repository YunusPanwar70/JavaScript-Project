let index = 0;

document.getElementById("clicktoChange").addEventListener("click", () => {
    let color = ["black", "white"];
    document.getElementById("change").style.backgroundColor = color[index++];

    if (index > color.length - 1) {
        index = 0;
    }
})