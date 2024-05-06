const time = document.getElementById('time');
const container = document.getElementById('container');
let timer = 0;
let timerID = null;

function startTimer() {
    timerID = setInterval(() => {
        console.log(time);
        timer++;
        time.innerText = timer;
    }, 1000);
};

function stopTimer() {
    clearInterval(timerID);
};

function resetTimer() {
    clearInterval(timerID);
    timer = 0;
    time.textContent = timer;
};

function handleButtons(e) {
    e.preventDefault();
    const buttons = e.target.innerText;

    if (buttons === 'Start') {
        startTimer();
    } else if (buttons === 'Stop') {
        stopTimer();
    } else if (buttons === 'Reset') {
        resetTimer();
    }
};
container.addEventListener('click', handleButtons);