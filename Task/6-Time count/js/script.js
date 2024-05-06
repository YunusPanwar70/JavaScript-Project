const time = document.getElementById('time');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
let timer;
let secount = 0;

function startTimer() {
    secount = setInterval(() => {
        secount++;
    }, 1000);
};

function stopTimer() {

};

function resetTimer() {
    clearInterval(timer);
};


start.addEventListener(click, startTimer);
stop.addEventListener(click, stopTimer);
reset.addEventListener(click, resetTimer);