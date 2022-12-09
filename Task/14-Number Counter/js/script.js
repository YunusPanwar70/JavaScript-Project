let [decrement, reset, increment, value] = [document.getElementById('decrement'),
document.getElementById('reset'),
document.getElementById('increment'),
document.getElementById('value')];

let count = 0;

function decrementValues() {
    --count;
    value.innerText = count;
    // console.log(count);
}

function resetValues() {
    count = 0;
    value.innerText = count;
}
function incrementValue() {
    count++
    value.innerText = count;
}
// decrementValues();
// console.log(decrementValues());

// function allValues() {
//     decrementValues();
// }
decrement.addEventListener('click', decrementValues);
reset.addEventListener('click', resetValues);
increment.addEventListener('click', incrementValue);