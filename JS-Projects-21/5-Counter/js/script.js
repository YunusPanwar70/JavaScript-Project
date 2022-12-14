const countNumber = document.getElementById("countNumber");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
let count = 0;

function changeCount(num) {
    count += num;
    countNumber.innerHTML = count;
};

function increaseValue() {
    changeCount(1);
};

function decreaseValue() {
    changeCount(-1);
}
increaseBtn.addEventListener("click", increaseValue);
decreaseBtn.addEventListener("click", decreaseValue);