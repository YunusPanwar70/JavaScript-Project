const input = document.getElementById('input');
const totalChar = document.getElementById('totalChar');
const remainChar = document.getElementById('remainingChar');


function countInputValues() {
    const maxLength = 100;
    const currentLength = input.value.length;

    totalChar.textContent = currentLength;
    remainChar.textContent = maxLength - currentLength;
}
input.addEventListener('input', countInputValues);