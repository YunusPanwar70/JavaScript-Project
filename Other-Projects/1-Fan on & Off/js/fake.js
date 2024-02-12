let fanImg = document.getElementById('fanImg');
let fanOnButton = document.getElementById('fanOn');
let fanOffButton = document.getElementById('fanOFF');
let speedOne = document.getElementById('one');
let speedTwo = document.getElementById('two');
let speedThree = document.getElementById('three');

function fanIsOn(e) {
    if (e.target === fanOnButton) {
        fanImg.style.animationDuration = '3s';
    } else if (e.target === fanOffButton) {
        fanImg.style.animationDuration = '0s';
    } else if (e.target === speedOne) {
        fanImg.style.animationDuration = '1s';
    } else if (e.target === speedTwo) {
        fanImg.style.animationDuration = '0.5s';
    } else if (e.target === speedThree) {
        fanImg.style.animationDuration = '0.1s';
    }
}

fanOnButton.addEventListener('click', fanIsOn);
fanOffButton.addEventListener('click', fanIsOn);
speedOne.addEventListener('click', fanIsOn);
speedTwo.addEventListener('click', fanIsOn);
speedThree.addEventListener('click', fanIsOn);