let container = document.getElementById('keyboard');
let numBtn = 10;

function numBtns() {
    for (let i = 0; i < numBtn; i++) {
        let buttons = document.createElement('button');
        buttons.classList.add('numKey');
        buttons.textContent = i + 1;
        container.appendChild(buttons)
    }
};
numBtns();