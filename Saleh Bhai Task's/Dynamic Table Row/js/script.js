let container = document.getElementById('container');

function formAndInputs() {
    let form = document.createElement('form');
    let valInp = 4;
    for (let i = 0; i < valInp; i++) {
        let inputBox = document.createElement('input');
        inputBox.classList.add('inputs');
        form.appendChild(inputBox);
    }
    container.appendChild(form);
}

formAndInputs();

function fillInput() {
    let inputs = document.getElementsByClassName('inputs');
    let allFilled = true;

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() === '') {
            allFilled = false;
            break;
        }
    }

    if (allFilled) {
        formAndInputs();
    }
}

document.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        fillInput();
    }
});