let container = document.getElementById('keyboard');

const keys = [
    '1', '2', '3', 'Delete',
    '4', '5', '6', 'Tab',
    '7', '8', '9', 'Enter',
    '0', 'Space', '.'
];

function createKey(key) {
    let button = document.createElement('button');
    button.classList.add('key');

    if (key === 'Delete') {
        button.classList.add('delete-key');
    } else if (key === 'Tab' || key === 'Enter') {
        button.classList.add('enter-key');
    } else if (key === 'Space') {
        button.classList.add('space-key');
    } else if (key.length > 1) {
        button.classList.add('function-key');
    }

    button.textContent = key;
    container.appendChild(button);
}

function createKeyboard() {
    for (let key of keys) {
        createKey(key);
    }
}

createKeyboard();