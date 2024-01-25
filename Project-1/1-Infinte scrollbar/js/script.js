window.addEventListener('DOMContentLoaded', function() {
    let flexContainer = document.getElementsByClassName('flexContainer')[0];
    let numberOfImg = 4;

    function createList() {
        let li = document.createElement('li');
        li.className = 'flex-item'
        let img = new Image();
        img.src = '#';
        img.alt = 'Unknow Source'

        li.append(img);
        return li
    }

    function addList(totalList) {
        let fragment = new DocumentFragment();
        for (let i = 0; i < totalList; i++) {
            fragment.append(createList());
        }
        flexContainer.append(fragment);
    }

    addList(numberOfImg);

    while (this.pageYOffset >= document.body.offsetHeight - window.innerHeight) {
        addList(numberOfImg);
    }

    window.addEventListener('scroll', function() {
        let totalheight = document.body.offsetHeight - window.innerHeight;
        let currentPosition = this.pageYOffset;

        if (currentPosition > totalheight) {
            addList(numberOfImg)
        };
    });
});