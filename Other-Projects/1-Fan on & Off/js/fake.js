const fanImg = document.getElementById('fanImg');
const fanOnButton = document.getElementById('fanOn');
const fanOffButton = document.getElementById('fanOFF');
const speedOne = document.getElementById('one');
const speedTwo = document.getElementById('two');
const speedThree = document.getElementById('three');

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