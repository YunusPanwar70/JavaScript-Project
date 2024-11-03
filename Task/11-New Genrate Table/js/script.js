const container = document.getElementById('container');
function checkValues(e) {
    let checkBoxes = e.target.parentElement.children;
    for (const value of checkBoxes) {
        if (value.textContent === '') {
            return;
        };
    };
    
};
