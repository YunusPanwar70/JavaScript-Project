const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
};
showNotes();

function updateStorage() {
    localStorage.setItem("notes".notesContainer.innerHTML);
};

function genrateBtn() {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "./img/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
};
createBtn.addEventListener("click", genrateBtn);

function removeNotes(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "p") {
        notes = document.querySelectorAll(".inout-box")
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage();
            };
        });
    };
};
notesContainer.addEventListener("click", removeNotes);

function handelKeyPress(e) {
    if (e.key === "Enter") {
        document.execCommand("insertLineBreak")
        e.preventDefault();
    };
};
document.addEventListener("keydown", handelKeyPress);