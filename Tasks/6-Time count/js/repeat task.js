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
        }, this.timerInterval)
    };

    stop() {
        clearInterval();
    };

    restart(timerStartPosition, timerInterval) {
        this.timerStartPosition = timerStartPosition;
        this.timerInterval = timerInterval;
        this.start();
    };

    reset() {
        clearInterval(timerID);
        timer = 0;
        time.textContent = timer;
    };
};
const control = new ControlCounting(timer, 100);