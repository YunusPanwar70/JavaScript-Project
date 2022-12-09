// Get input & buttons
const inputBox = document.getElementById('inputBox');
const buttons = document.getElementById('btn');
let zeroFixed = 0;
function handleButtons(e) {
    if (e.target.tagName === 'BUTTON') {
        const buttonText = e.target.innerText;

        if (buttonText === 'AC') { // Click AC to remove all value's
            inputBox.value = zeroFixed;
        } else if (buttonText === 'C') { // Click C to remove One by One value's
            inputBox.value = inputBox.value.slice(0, -1);
        } else if (buttonText === '=') { // Click = to sovle all arithmetic perfomance value's
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
            if (isArithmeticSymbol(lastChar) && isArithmeticSymbol(buttonText)) {
                inputBox.value = inputBox.value.slice(0, -1) + buttonText;
            } else {
                inputBox.value += buttonText;
            }
        }
    }
}

buttons.addEventListener('click', handleButtons);

function isArithmeticSymbol(symbol) {
    return ['+', '-', '*', '/', '%', '.'].includes(symbol);
}