function createForm() {
    let form = document.createElement('form');
    container.appendChild(form);

    let inp = 4;

    for (let i = 0; i < inp; i++) {
        let input = document.createElement('input');
        input.classList.add('inputBox')
        form.appendChild(input);
    }
}
createForm();

function fillInput() {
    let inputs = document.getElementsByClassName('inputBox');

    inputs.forEach((valueOfInput) => {
        if (valueOfInput.value === '') {
            return
        } else {
            createForm()
        }
    });

}

fillInput();