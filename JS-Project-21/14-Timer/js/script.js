let timeBegan = null //did the clock start?
let timerStopped = null; //at what time was the timer stopped?
let stoppedDuraction = 0; //how long was the timer stopped?
let startInterval = null; //this is needed to stop the startInterval() method
let flag = false;

const timerContainer = document.getElementsByClassName("timer-container");
timerContainer.addEventListener("click", function () {
    if (!flag) {
        startTimer();
        flag = true;
    } else {
        stopTimer();
        flag = false;
    };
});

timerContainer.addEventListener("dblclick", function () {
    resetTimer();
});

function startTimer() {
    if (timeBegan === null) {
        timeBegan = new Date();

        if (timerStopped !== null) {
            stoppedDuraction += (new Date() - timerStopped)
            startInterval = setInterval(clockRunning, 10);
        }
    };
};

function stopTimer() {
    timerStopped = new Date();
    clearInterval(startInterval);
};

function clockRunning() {
    let currentTime = new Date();
    let timeElapsed = new Date(currentTime - timeBegan - stoppedDuraction);

    let minutes = timeElapsed.getUTCMinutes();
    let secound = timeElapsed.getUTCSeconds();
    let milliseconds = timeElapsed.getUTCMilliseconds();

    milliseconds = Math.floor(milliseconds / 10);
    document.getElementById("timer-display").innerHTML =
        (minutes = minutes < 10 ? '0' + minutes : minutes) + ":" +
        (secound = secound < 10 ? '0' + secound : secound) + ":" +
        (milliseconds = milliseconds < 10 ? '0' + milliseconds : milliseconds);

};

function resetTimer() {
    clearInterval(startInterval)
    timeBegan = null;
    timerStopped = null;
    stoppedDuraction = 0;
    document.getElementById("timer-display").innerHTML = "00:00:00";
    flag = false;
};