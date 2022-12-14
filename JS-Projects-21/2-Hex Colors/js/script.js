const clickToChange = document.getElementById("clickChange");
const hexCodes = document.getElementById("hex-code");
function genrateColor() {
    let hexNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    let hexcode = "";

    for (let i = 0; i < 6; i++) {
        let random_index = Math.floor(Math.random() * hexNumber.length);
        hexcode += hexNumber[random_index];
    };

    hexCodes.innerHTML = hexcode;
    document.body.style.background = `# ${hexcode}`;
};
clickToChange.addEventListener("click", genrateColor);