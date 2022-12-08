class ControlCounting {
    startButton = document.getElementById('start');
    stopButton = document.getElementById('stop');
    resetButton = document.getElementById('reset');

    constructor(timerStartPosition, timerInterval) {
        this.timerStartPosition = timerStartPosition
        this.timerInterval = timerInterval
    }
}