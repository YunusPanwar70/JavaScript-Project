const container = document.getElementById('container');
const heading = ['Name', 'DOB', 'Age', 'Salary'];

function createHeadings() {
    let ul = document.createElement('ul');
    container.appendChild(ul);
    heading.forEach(head => {
        let li = document.createElement('li');
        li.textContent = head;
        ul.appendChild(li);
    });
};
createHeadings();

function createContenetEditAble() {
    let ul = document.createElement('ul');
    container.appendChild(ul);

    for (let i = 0; i < 4; i++) {
        let li = document.createElement('li')
        li.setAttribute('contenteditable', 'true');
        ul.appendChild(li);
        li.addEventListener('input', checkValues);
    }
}
createContenetEditAble();

function checkValues(e) {
    let checkBoxes = e.target.parentElement.children;

    for (const value of checkBoxes) {
        if (value.textContent === '') {
            return;
        }
    };
    createContenetEditAble();
    for (let j = 0; j < checkBoxes.length; j++) {
        checkBoxes[j].removeEventListener('input', checkValues);
        checkBoxes[j].addEventListener('input', removeLast);
    }
};

function removeLast(e) {
    let lastValue = container.lastElementChild.children;
    let checkBox = e.target.parentElement.children;
    let allEmpty = false
    for (const value of lastValue) {
        if (value.textContent === '') {
            allEmpty = true
        }
    };
    for (const data of checkBox) {
        if(data.textContent === "" && allEmpty === true){
            container.removeChild(container.lastElementChild)
            for (let j = 0; j < checkBox.length; j++) {
                checkBox[j].removeEventListener('input', removeLast);
                checkBox[j].addEventListener('input', checkValues);
            }
        }
    }
}