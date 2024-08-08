const input = document.getElementById('input');
const formatBtns = document.querySelectorAll(".btn");
const output = document.getElementById('output');

function handleButtons(e) {
    e.preventDefault();
    let action = e.target.id;
    let text = input.value;

    switch (action) {
        case 'upperCase':
            output.textContent = text.toUpperCase();
            break;
        case 'lowerCase':
            output.textContent = text.toLowerCase();
            break;
        case 'capital':
            output.textContent = text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
            break;
        case 'bold':
            output.innerHTML = `<b>${text}</b>`;
            break;
        case 'italic':
            output.innerHTML = `<i>${text}</i>`;
            break;
        case 'underLine':
            output.innerHTML = `<u>${text}</u>`;
            break;
        default:
            output.textContent = text;
            break;
    }
}

formatBtns.forEach(btn => {
    btn.addEventListener('click', handleButtons);
});

function textShow(e) {
    e.preventDefault();
    let text = input.value;
    output.textContent = text;
}
input.addEventListener('input', textShow);