document.addEventListener('DOMContentLoaded', function() {
    let container = document.getElementById('container');

    function createDivInput() {
        let div = document.createElement('div');
        container.appendChild(div);

        let input = document.createElement('input');
        input.classList = 'inputBox';
        div.appendChild(input);
    }

    createDivInput();

    function createButton() {
        let btnDiv = document.createElement('div');
        btnDiv.classList = 'btn';
        container.appendChild(btnDiv);

        const buttonLabels = ['AC', 'C', '%', '/'];

        for (let i = 0; i < 4; i++) {
            let oneButton = document.createElement('button');
            oneButton.classList.add('orangeColor');
            oneButton.textContent = buttonLabels[i];
            btnDiv.appendChild(oneButton)
        }

        const buttonLabelsTwo = ['7', '8', '9', '*'];

        for (let j = 0; j < 4; j++) {
            let towButton = document.createElement('button');
            towButton.textContent = buttonLabelsTwo[j];
            btnDiv.appendChild(towButton);
        }

        const buttonLabelsThree = ['4', '5', '6', '-'];

        for (let k = 0; k < 4; k++) {
            let threeButton = document.createElement('button');
            threeButton.textContent = buttonLabelsThree[k];
            btnDiv.appendChild(threeButton);
        }

        const buttonLabelsFour = ['1', '2', '3', '+'];

        for (let l = 0; l < 4; l++) {
            let fourButton = document.createElement('button');
            fourButton.textContent = buttonLabelsFour[l];
            btnDiv.appendChild(fourButton);
        }

        const buttonLabelsFive = ['00', '.', '0', '='];

        for (let l = 0; l < 4; l++) {
            let fiveButton = document.createElement('button');
            fiveButton.textContent = buttonLabelsFive[l];
            btnDiv.appendChild(fiveButton);
        }
    }

    createButton();
});