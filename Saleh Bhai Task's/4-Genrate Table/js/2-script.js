const container = document.getElementById('container');
const heading = ['Name', 'DOB', 'Age', 'Salary'];

function createHeadingAndContentediTable() {
    const ul = document.createElement('ul');

    heading.forEach(headName => {
        let li = document.createElement('li');
        li.textContent = headName;
        ul.appendChild(li);
    });
    container.appendChild(ul);

    const ul2 = document.createElement('ul');
    for (let i = 0; i < heading.length; i++) {
        let li2 = document.createElement('li');
        ul2.appendChild(li2);
        li2.setAttribute('contenteditable', 'true');
        li2.addEventListener('keydown', clickEnter);
    }
    container.appendChild(ul2);
};
createHeadingAndContentediTable();

function tableValue(e) {
    for (let j = 0; j < heading.length; j++) {
        let checkValues = e.target.parentElement.children[j].textContent;
        console.log(checkValues);
        if (checkValues == "") {
            return;
        } else {
            createHeadingAndContentediTable();
        }
    };
};

function clickEnter(enter) {
    const keyCode = enter.keyCode || enter.which;
    if (keyCode === 13) {
        tableValue(enter)
    }
};