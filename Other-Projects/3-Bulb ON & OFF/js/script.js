const bulb = document.getElementById('bulb');
const on = document.getElementById('on');
const off = document.getElementById('off');

function toggleBulb() {
    const isOn = bulb.src.includes('on'); // Check if the bulb is currently on
    bulb.src = isOn ? '../img/bulb-off.png' : '../img/bulb-on.png';
}

on.addEventListener('click', toggleBulb);
off.addEventListener('click', toggleBulb);
