const time = document.getElementById('time');
const container = document.getElementById('container');
let timer = 0;
let timerID = null;

class ControlCounting {
    constructor(startTimer, stopTimer, resetTimer) {
        this.startTimer = startTimer;
        this.stopTimer = stopTimer;
        this.resetTimer = resetTimer;
    }

    start() {
        timerID = setInterval(() => {
            console.log(time);
            timer++;
            time.innerText = timer;
        }, 1000);
    }

    stop() {
        clearInterval(timerID);
    }

    reset() {
        clearInterval(timerID);
        timer = 0;
        time.textContent = timer;
    }
}

const control = new ControlCounting(
    document.getElementById('start'),
    document.getElementById('stop'),
    document.getElementById('reset')
);

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