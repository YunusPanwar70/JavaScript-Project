const inputBox = document.getElementById('inputBox');
const buttons = document.getElementById('btn');

buttons.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const buttonText = event.target.innerText;

        if (buttonText === 'C') {
            inputBox.value = '';
        } else if (buttonText === 'AC') {
            inputBox.value = ''
        } else if (buttonText === '=') {
            if (inputBox.value === '') {
                return;
            }
            try {
                inputBox.value = eval(inputBox.value);
            } catch (error) {
                inputBox.value = 'Error'
            }
        } else {
            inputBox.value += buttonText
        }
    }
});