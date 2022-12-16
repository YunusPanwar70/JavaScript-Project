const container = document.getElementById('container');

function createHeadings(heading) {
    let ul = document.createElement('ul');
    container.appendChild(ul);
    heading.forEach(head => {
        let li = document.createElement('li');
        li.textContent = head;
        ul.appendChild(li);
    });
}
createHeadings(['Name', 'DOB', 'Age', 'Salary']);

function createContentEditable() {
    let ul = document.createElement('ul');
    ul.setAttribute('id', 'ulcontainer');
    ul.draggable = true;
    container.appendChild(ul);

    for (let i = 0; i < 4; i++) {
        let li = document.createElement('li');
        li.setAttribute('contenteditable', 'true');
        ul.appendChild(li);
    }
}

createContentEditable();

// Event delegation using the container
container.addEventListener('input', function (e) {
    if (e.target.tagName === 'LI' && e.target.isContentEditable) {
        checkValues(e);
    }
});

function checkValues(e) {
    let checkBoxes = e.target.parentElement.children;

    for (const value of checkBoxes) {
        if (value.textContent === '') {
            return;
        }
    }

    createContentEditable();

    // Switch the event handler for filled rows
    Array.from(checkBoxes).forEach(li => {
        li.removeEventListener('input', checkValues);
        li.addEventListener('input', removeLast);
    });
}

function removeLast(e) {
    let lastValue = container.lastElementChild.children;
    let checkBox = e.target.parentElement.children;
    let allEmpty = Array.from(lastValue).every(value => value.textContent === '');

    if (allEmpty) {
        container.removeChild(container.lastElementChild);
        Array.from(checkBox).forEach(li => {
            li.removeEventListener('input', removeLast);
            li.addEventListener('input', checkValues);
        });
    }
}

function draggableUL() {
    // Drag-and-drop functionality can be implemented here
}