// intersection obervation

const container = document.getElementById('container');

function createHeadings(heading) {
    let ul = document.createElement('ul');
    // ul.classList.add('header');
    container.appendChild(ul);
    heading.forEach(head => {
        let li = document.createElement('li');
        li.textContent = head;
        ul.appendChild(li);
    });
}
createHeadings(['Name', 'DOB', 'Age', 'Salary']);

function createContenetEditAble() {
    let ul = document.createElement('ul');
    ul.setAttribute('class', 'ulcontainer');
    ul.draggable = true;
    container.appendChild(ul);

    for (let i = 0; i < 4; i++) {
        let li = document.createElement('li');
        li.setAttribute('contenteditable', 'true');
        ul.appendChild(li);
        li.addEventListener('input', checkValues);
    }f

    // Add drag and drop event listeners
    ul.addEventListener('dragstart', dragStart);
    ul.addEventListener('dragover', dragOver);
    ul.addEventListener('drop', drop);
    ul.addEventListener('dragend', dragEnd);
}
createContenetEditAble();

function checkValues(e) {
    let checkBoxes = e.target.parentElement.children;

    for (const value of checkBoxes) {
        if (value.textContent === '') {
            return;
        }
    }
    createContenetEditAble();
    for (let j = 0; j < checkBoxes.length; j++) {
        checkBoxes[j].removeEventListener('input', checkValues);
        checkBoxes[j].addEventListener('input', removeLast);
    }
}

function removeLast(e) {
    let lastValue = container.lastElementChild.children;
    let checkBox = e.target.parentElement.children;
    let allEmpty = false;
    for (const value of lastValue) {
        if (value.textContent === '') {
            allEmpty = true;
        }
    }
    for (const data of checkBox) {
        if (data.textContent === "" && allEmpty === true) {
            container.removeChild(container.lastElementChild);
            for (let j = 0; j < checkBox.length; j++) {
                checkBox[j].removeEventListener('input', removeLast);
                checkBox[j].addEventListener('input', checkValues);
            }
        }
    }
}

// Drag and drop functions
let draggedElement = null;

function dragStart(e) {
    draggedElement = e.target;
    e.dataTransfer.effectAllowed = 'move';
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    let targetUL = e.target.closest('ul');
    if (targetUL && targetUL !== draggedElement) {
        container.insertBefore(draggedElement, targetUL.nextSibling);
    }
}

function dragEnd() {
    draggedElement = null;
}