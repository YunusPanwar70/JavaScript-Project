const container = document.getElementById('container');
const heading = ['Name', 'DOB', 'Age', 'Salary'];

function createHeading() {
    const ul = document.createElement('ul');

    heading.forEach(head => {
        let li = document.createElement('li');
        li.textContent = head;
        ul.appendChild(li);
    });
    container.appendChild(ul);
};
createHeading();

function createrContentediTable() {
    const ul2 = document.createElement('ul');

    for (let i = 0; i < heading.length; i++) {
        let li2 = document.createElement('li');
        ul2.appendChild(li2);
        li2.setAttribute('contenteditable', 'true');
        li2.addEventListener('keydown', function(enter) {
            const keyCode = enter.keyCode || enter.which;
            if (keyCode === 13) {
                tableValue(enter);
            };
        });
    };
    container.appendChild(ul2);
};
createrContentediTable();


function tableValue(e) {
    for (let j = 0; j < heading.length; j++) {
        let checkValues = e.target.parentElement.children[j].textContent;
        if (checkValues === "") {
            return;
        };
    };
    createrContentediTable();
};