document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('container');

    function createDivInput() {
        const div = document.createElement('div');
        container.appendChild(div);

        const input = document.createElement('input');
        input.classList.add('inputBox');
        div.appendChild(input);
    }

    createDivInput();

    function genrateButtons() {
        const btnDiv = document.createElement('div');
        btnDiv.classList.add('btn');
        container.appendChild(btnDiv);

        const buttonLabels = [
            ['AC', 'DEL', '%', '/'],
            ['7', '8', '9', '*'],
            ['4', '5', '6', '-'],
            ['1', '2', '3', '+'],
            ['00', '.', '0', '=']
        ];

        buttonLabels.forEach((operator) => {
            operator.forEach(singleOp => {
                let buttons = document.createElement('button')
                buttons.innerText = singleOp;
                btnDiv.appendChild(buttons)
            });
        });

    }
    genrateButtons();
})


document.addEventListener('click', handelButtons);

function handelButtons(e) {
    e.preventDefault();
    const inputBox = document.querySelector('.inputBox');

    if (e.target.tagName === 'BUTTON') {
        const buttonsText = e.target.innerText;

        if (buttonsText === 'AC') {
            inputBox.value = '';
        } else if (buttonsText === 'C') {
            inputBox.value = inputBox.value.slice(0, -1);
        } else if (buttonsText === '=') {
            if (inputBox.value === '') {
                return;
            }
            try {
                inputBox.value = eval(inputBox.value);
            } catch (error) {
                inputBox.value = '';
            }
        } else {
            const lastChar = inputBox.value[inputBox.value.length - 1];
            if (isArithmeticSymbol(lastChar) && isArithmeticSymbol(buttonsText)) {
                inputBox.value = inputBox.value.slice(0, -1) + buttonsText;
            } else {
                inputBox.value += buttonsText;
            }
        }
    }
}

function isArithmeticSymbol(symbol) {
    return ['+', '-', '*', '/', '.', '%'].includes(symbol)
};