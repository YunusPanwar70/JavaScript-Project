const selectField = document.getElementById('selectField');
const selectText = document.getElementById('selectText');
const options = document.getElementsByClassName('options');
const list = document.getElementById('list');
const arrowIcon = document.getElementById('arrowIcon');


function toggleField() {
    list.classList.toggle('hide');
    arrowIcon.classList.toggle('rotate');
};

function updateText() {
    selectText.innerHTML = this.textContent;
    list.classList.toggle('hide');
}

selectField.addEventListener('click', toggleField);
for (option of options) {
    option.addEventListener('click', updateText);
};