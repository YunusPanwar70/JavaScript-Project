const container = document.getElementById('container');

function createRowAndColums() {
    const ul = document.createElement('ul');
    ul.classList.add('flex');

    for (let i = 0; i < 4; i++) {
        const li = document.createElement('li');
        let img = new Image();
        img.src = '#';
        img.alt = 'unknown img';
        ul.appendChild(li);
        li.appendChild(img);
    }
    container.appendChild(ul);
}

function handelScroll() {
    const totalHeight = document.body.offsetHeight - window.innerHeight;
    const currentPosition = window.scrollY;

    if (currentPosition > totalHeight) {
        createRowAndColums();
    }
}
while (screenY >= document.body.offsetHeight - window.innerHeight) {
    createRowAndColums();
}

window.addEventListener('scroll', handelScroll);