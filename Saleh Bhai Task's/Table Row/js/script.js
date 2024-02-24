let input = document.getElementById('input');

function inputValues() {
    let fill = true;
    input.forEach((valueOfInput) => {
        if (valueOfInput.value.trim() === '') {
            fill
            return;
        }
    });
};