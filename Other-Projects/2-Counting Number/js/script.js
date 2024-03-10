const counter = document.getElementById('counting');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
let count = 0;
let timer;

function incrementCount() {
    count++;
    counter.innerHTML = count;
};
counter.addEventListener('click', incrementCount);

function startCounting() {
    timer = setInterval(incrementCount, 500);
};
start.addEventListener('click', startCounting);

function stopCounting() {
    clearInterval(timer);
};
stop.addEventListener('click', stopCounting);

function resetCounting() {
    clearInterval(timer);
    counter.innerHTML = '0';
    count = 0;
};
reset.addEventListener('click', resetCounting);