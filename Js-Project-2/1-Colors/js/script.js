// const clickChange = document.getElementById("clickChange");
// const body = document.getElementById("body");
let index = 0;

function genrateColor(colors) {
    body.style.background = colors[index++];
    if (index > colors.length - 1) {
        index = 0;
    };
};

function handleClick(event) {
    const color = ["red", "blue", "orange", "yellow", "gree", "purple"];
    genrateColor(color)
}
// clickChange.addEventListener("click", handleClick);

// function dynamicColors(getHexNum) {
//     const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//     const randomIndex1 = Math.floor(Math.random() * numArr.length);
//     const randomIndex2 = Math.floor(Math.random() * numArr.length);
//     const randomNum1 = numArr[randomIndex1];
//     const randomNum2 = numArr[randomIndex2];
//     console.log(randomNum1, randomNum2);
// }
// dynamicColors()

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
console.log(getRandomArbitrary(0, 7));


// 2 number ke bich me random number kese nikale

// class me convert 
// unable seat h to true to waps wo genrate nahi ho 