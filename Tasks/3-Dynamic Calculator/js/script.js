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

    function generateButtons() {
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
    generateButtons();
});


let zeroFixed = '0';
function handleButtons(e) {
    if (e.target.tagName === 'BUTTON') {
        const buttonText = e.target.innerText;
        let currentVal = document.querySelector('.inputBox').value;
        switch (buttonText) {
            case 'AC':
                currentVal = zeroFixed;
                break;

            case 'DEL':
                currentVal = currentVal.length === 1 ? zeroFixed : currentVal.slice(0, -1);
                break;

            case '=':
                if (currentVal === eval(currentVal)) {
                    return;
                } try {
                    currentVal = eval(currentVal);
                } catch (error) {
                    currentVal = '';
                }
                break;
            default:
                const lastChar = currentVal[currentVal.length - 1];
                if (isArithmeticSymbol(lastChar) && isArithmeticSymbol(buttonText)) {
                    currentVal = currentVal.slice(0, -1) + buttonText
                } else {
                    if (currentVal.length === 1 && lastChar == 0 && !isArithmeticSymbol(buttonText)) {
                        currentVal = buttonText;
                    } else {
                        currentVal += buttonText;
                    }
                }
                break
        }
        document.querySelector('.inputBox').value = currentVal;
    }
}
document.addEventListener('click', handleButtons);

function isArithmeticSymbol(symbol) {
    return ['+', '-', '*', '/', '%', '.'].includes(symbol);
}