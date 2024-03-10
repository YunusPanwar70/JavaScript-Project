const counter = document.getElementById('counting');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
let count = 0;
let timer;

function timerWork(e) {
    let someWork = e.target.innerHTML;
    let plus = count++;
    if (someWork === plus) {
        counter.innerHTML = count;
    }
}