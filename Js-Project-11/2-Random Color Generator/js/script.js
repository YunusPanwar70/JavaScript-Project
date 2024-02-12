const getColor = () => {
    // Hex Code
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    const colorCode = document.getElementById("color-code").innerText = randomCode;

    navigator.clipboard.writeText(colorCode);
}
const btn = document.getElementById("btn");
btn.addEventListener("click", getColor)

// Init Call
getColor();