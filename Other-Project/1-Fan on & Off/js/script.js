let fanImg = document.getElementById('fanImg');
let fanOn = document.getElementById('fanOn');
let fanOFF = document.getElementById('fanOFF');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');


function fanIsOn() {
    fanImg.style.animationDuration = '3s';
}

function fanIsOFF() {
    fanImg.style.animationDuration = '0s';
}

function speedOne() {
    fanImg.style.animationDuration = '1s';
}

function speedTwo() {
    fanImg.style.animationDuration = '0.5s';
}

function speedThree() {
    fanImg.style.animationDuration = '0.1s';
}

fanOn.addEventListener('click', fanIsOn);
fanOFF.addEventListener('click', fanIsOFF);
one.addEventListener('click', speedOne);
two.addEventListener('click', speedTwo);
three.addEventListener('click', speedThree);