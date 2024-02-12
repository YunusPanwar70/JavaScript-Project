const inputBox = document.getElementById('inputBox');
const buttons = document.getElementById('btn');
let zeroFixed = '0';

function handleButtons(e) {
    if (e.target.tagName === 'BUTTON') {
        const buttonText = e.target.innerText;

        switch (buttonText) {
            case 'AC':
                inputBox.value = zeroFixed;
                break;
            case 'C':
                inputBox.value = inputBox.value.slice(0, -1);
                break;
            case '=':
                if (inputBox.value === eval(inputBox.value)) {
                    return;
                }
                try {
                    inputBox.value = eval(inputBox.value);
                } catch (error) {
                    inputBox.value = '';
                }
                break;
            default:
                const lastChar = inputBox.value[inputBox.value.length - 1];
                if (isArithmeticSymbol(lastChar) && isArithmeticSymbol(buttonText)) {
                    inputBox.value = inputBox.value.slice(0, -1) + buttonText;
                } else {
                    inputBox.value += buttonText;
                }
                break;
        }
    }
}
buttons.addEventListener('click', handleButtons);

function isArithmeticSymbol(symbol) {
    return ['+', '-', '*', '/', '%', '.'].includes(symbol);
}