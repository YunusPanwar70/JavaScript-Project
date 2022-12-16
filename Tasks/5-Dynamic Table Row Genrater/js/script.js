const container = document.getElementById('container');
const headings = ['Name', 'DOB', 'Age', 'Salary'];

function createHeadings() {
    // Create ul tag and li tag for heading names
    let ul = document.createElement('ul');
    headings.forEach(headName => {
        let li = document.createElement('li');
        li.textContent = headName;
        ul.appendChild(li);
    });
    container.appendChild(ul);

    // Create contenteditable and li elements for data entry
    let ul2 = document.createElement('ul');
    for (let i = 0; i < headings.length; i++) {
        let li2 = document.createElement('li');
        li2.setAttribute('contenteditable', 'true');
        ul2.appendChild(li2);
    }
    container.appendChild(ul2);
}

createHeadings();

function createRow() {
    let ul = document.createElement('ul');
    for (let i = 0; i < headings.length; i++) {
        let li = document.createElement('li');
        li.setAttribute('contenteditable', 'true');
        ul.appendChild(li);
    }
    container.appendChild(ul);
}

function checkValue(e) {
    let value = e.target.innerText;
    if (value === '') {
        return;
    } else {
        createRow();
    }
}

container.addEventListener('input', checkValue);