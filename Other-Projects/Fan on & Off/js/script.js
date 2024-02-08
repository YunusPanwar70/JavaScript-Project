let img = document.getElementById('fanImg');
let fanOn = document.getElementById('fanOn');
let fanOFF = document.getElementById('fanOFF');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');

fanOn.addEventListener('click', function () {
    img.style.animationDuration = '3s'; // Set animation duration to 3 seconds
})

fanOFF.addEventListener('click', function () {
    img.style.animationDuration = '0s'; // Set animation duration to 0 seconds (pauses animation)
})

one.addEventListener('click', function () {
    img.style.animationDuration = '1s'; // Set animation duration to 1 second
})

two.addEventListener('click', function () {
    img.style.animationDuration = '0.5s'; // Set animation duration to 0.5 seconds
})

three.addEventListener('click', function () {
    img.style.animationDuration = '0.1s'; // Set animation duration to 0.1 seconds
});