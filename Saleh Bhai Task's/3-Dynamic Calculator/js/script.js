document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('container');

    function createDivInput() {
        // Create Div & append in container 
        const div = document.createElement('div');
        container.appendChild(div);
        // Create Div & append in div
        const input = document.createElement('input');
        input.classList = 'inputBox';
        div.appendChild(input);
    }

    createDivInput();

    function createButton() {
        const btnDiv = document.createElement('div');
        btnDiv.classList = 'btn';
        container.appendChild(btnDiv);

        const buttonLabels = ['AC', 'C', '%', '/'];

        for (let i = 0; i < 4; i++) {
            let oneButton = document.createElement('button');
            oneButton.classList.add('orangeColor');
            oneButton.textContent = buttonLabels[i];
            btnDiv.appendChild(oneButton);
        }

        const buttonLabelsTwo = ['7', '8', '9', '*'];

        for (let j = 0; j < 4; j++) {
            let twoButton = document.createElement('button');
            twoButton.textContent = buttonLabelsTwo[j];
            btnDiv.appendChild(twoButton);
        }

        const buttonLabelsThree = ['4', '5', '6', '-'];

        for (let k = 0; k < 4; k++) {
            let threeButton = document.createElement('button');
            threeButton.textContent = buttonLabelsThree[k];
            btnDiv.appendChild(threeButton);
        }

        const buttonLabelsFour = ['1', '2', '3', '+'];

        for (let l = 0; l < 4; l++) {
            let fourButton = document.createElement('button');
            fourButton.textContent = buttonLabelsFour[l];
            btnDiv.appendChild(fourButton);
        }

        const buttonLabelsFive = ['00', '.', '0', '='];

        for (let m = 0; m < 4; m++) {
            let fiveButton = document.createElement('button');
            fiveButton.textContent = buttonLabelsFive[m];
            btnDiv.appendChild(fiveButton);
        }
    }

    createButton();
});

document.addEventListener('click', handelButtons);

function handelButtons(e) {
    e.preventDefault();
    const inputBox = document.querySelector('.inputBox');
    const buttons = document.querySelectorAll('.btn button');

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
                inputBox.value = 'Error';
            }
        } else {
            const lastChar = inputBox.value[inputBox.value.length - 1]
            if (isArithmeticSymbol(lastChar) && isArithmeticSymbol(buttonsText)) {
                inputBox.value = inputBox.value.slice(0, -1) + buttonsText;
            } else {
                inputBox.value += buttonsText;
            }
        }
    }
}

function isArithmeticSymbol(symbol) {
    return ['+', '-', '*', '/'].includes(symbol)
}