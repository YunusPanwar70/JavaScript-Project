const input = document.getElementById('input');
const formatBtns = document.querySelectorAll(".btn");
const output = document.getElementById('output');

function handleButtons(e) {
    e.preventDefault()
    let { id } = e.target;

    switch (id) {
        case 'upperCase':
            output.textContent = output.toUpperCase();
            break;
        case 'lowerCase':
            output.textContent = output.toLowerCase();
            break;
        case 'capital':
            output.textContent = output.innerText.trim()
                .split(" ")
                .map(
                    (elem) =>
                        elem.charAt(0).toUpperCase() + elem.slice(1).toLowerCase()
                )
                .join(" ");
            break;
        case 'bold':
            output.innerHTML = `<b>${output.innerText}</b>`;
            break;
        case 'italic':
            output.innerHTML = `<i>${output.innerText}</i>`;
            break;
        case 'underLine':
            output.innerHTML = `<u>${output.innerText}</u>`;
            break;
        default:
            output.textContent = output.innerText;
            break;
    }
}

formatBtns.forEach(btn => {
    btn.addEventListener('click', handleButtons);
});

function textShow() {
    let text = input.value.trim();
    output.innerText = text;
}
input.addEventListener('input', textShow);