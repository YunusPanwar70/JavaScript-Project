const container = document.getElementById('container');

function createHeading(heading) {
    const ul = document.createElement('ul');
    heading.forEach(headingName => {
        let li = document.createElement('li');
        li.textContent = headingName;
        ul.appendChild(li);
    });
    container.appendChild(ul);
};
createHeading(['Name', 'DOB', 'Age', 'Salary']);

function createContentEditableTable() {
    const ul2 = document.createElement('ul');

    for (let i = 0; i < heading.length; i++) {
        const li2 = document.createElement('li');
        li2.setAttribute('contenteditable', 'true');
        ul2.appendChild(li2);
    };
    container.appendChild(ul2);
};
createContentEditableTable();

function tableValue(e) {
    let checkValues = e.target.parentElement.children;
    for (const val of checkValues) {
        if (val.textContent === '') {
            return
        };
    };
    if (checked = false) {
        createContentEditableTable();
        checked = true;
    };
};
container.addEventListener('input', tableValue);