const time = document.getElementById('time');
const container = document.getElementById('container');
let timer = 0;
let timerID = null;

class ControlCounting {
    startButton = document.getElementById('start');
    stopButton = document.getElementById('stop');
    resetButton = document.getElementById('reset');
    constructor(timerStartPosition, timerInterval) {
        this.timerStartPosition = timerStartPosition;
        this.timerInterval = timerInterval;
    };

    start() {
        timerID = setInterval(() => {
            this.timerStartPosition++;
            time.innerText = this.timerStartPosition;
        }, this.timerInterval);
    };

    stop() {
        clearInterval(timerID);
    };

    restart(timerStartPosition, timerInterval) {
        this.timerStartPosition = timerStartPosition;
        this.timerInterval = timerInterval;
        this.start()
    };

    reset() {
        clearInterval(timerID);
        this.timerStartPosition = 0;
        time.textContent = this.timerStartPosition;
    };
};
const control = new ControlCounting(timer, 100);

function handleButtons(e) {
    e.preventDefault();
    const buttons = e.target.innerText;
    if (buttons === 'Start') {
        control.start();
    } else if (buttons === 'Stop') {
        control.stop();
    } else if (buttons === 'Reset') {
        control.reset();
    };
};
container.addEventListener('click', handleButtons);