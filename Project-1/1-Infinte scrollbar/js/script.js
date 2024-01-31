const container = document.getElementById('container');

function createRow() {
    const ul = document.createElement('ul');
    ul.classList.add('flex');

    for (let i = 0; i < 4; i++) {
        const currentColumn = createColumn();
        ul.append(currentColumn);
    }
    container.append(ul);
}

function createColumn() {
    const li = document.createElement('li');

    let img = new Image();
    img.src = '#';
    img.alt = 'unknown img';
    li.appendChild(img);

    return li;
}

while (this.pageYOffset >= document.body.offsetHeight - window.innerHeight) {
    createRow();
}

window.addEventListener('scroll', function () {
    const totalHeight = document.body.offsetHeight - this.window.innerHeight;
    const currentPosition = this.pageYOffset;

    if (currentPosition > totalHeight) {
        createRow();
    }
})