const addBtn = document.querySelector("#addBtn");

addBtn.addEventListener('click', function () {
    addNote();
});

const addNote = () => {
    const note = document.createElement('div');
    note.classList.add('note');
};