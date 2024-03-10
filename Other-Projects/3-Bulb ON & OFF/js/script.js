const bulb = document.getElementById('bulb');
const buttonsContainer = document.querySelector('.content');

function toggleBulb(event) {
    if (event.target.id === 'on') {
        bulb.src = './img/bulb-on.png';
    } else if (event.target.id === 'off') {
        bulb.src = './img/bulb-off.png';
    }
}

buttonsContainer.addEventListener('click', toggleBulb);