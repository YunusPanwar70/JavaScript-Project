// document.getElementById("one").onclick(abc);

// function abc() {
//     document.getElementById("one").style.backgroundColor = "red";
// }

document.getElementById("one").addEventListener("click", function () {
    document.getElementById("circule").style.background = "yellow";
});

document.getElementById("two").addEventListener("click", function () {
    document.getElementById("circule").style.background = "blue";
});
