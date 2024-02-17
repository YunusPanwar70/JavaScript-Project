const inputBox = document.getElementById('inputBox');
const buttons = document.getElementById('btn');
let zeroFixed = '0';

function handleButtons(e) {
    e.preventDefault();
    if (e.target.tagName === 'BUTTON') {
        const buttonText = e.target.innerText;
        let currentVal = inputBox.value;
        switch (buttonText) {
            case 'AC':
                currentVal = zeroFixed;
                break;
            case 'C':
                currentVal = currentVal.length === 1 ? zeroFixed : currentVal.slice(0, -1);
                break;
            case '=':
                if (currentVal === eval(currentVal)) {
                    return;
                }
                try {
                    currentVal = eval(currentVal);
                } catch (error) {
                    currentVal = '';
                }
                break;
            default:
                const lastChar = currentVal[currentVal.length - 1];
                if (isArithmeticSymbol(lastChar) && isArithmeticSymbol(buttonText)) {
                    currentVal = currentVal.slice(0, -1) + buttonText;
                } else {
                    if (currentVal.length === 1 && lastChar == 0 && !isArithmeticSymbol(buttonText)) {
                        currentVal = buttonText;
                    } else {
                        currentVal += buttonText;
                    }
                }
                break;
        }
        inputBox.value = currentVal;
    }
}

buttons.addEventListener('click', handleButtons);

function isArithmeticSymbol(symbol) {
    return ['+', '-', '*', '/', '%', '.'].includes(symbol);
};