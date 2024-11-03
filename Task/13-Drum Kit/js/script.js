let container = document.getElementById('container');
let drumItems = ['crash', 'kick', 'snare', 'tom'];
// drumAudio.forEach((elem) => {
//     let checkSoundBtn = document.createElement('button');
//     checkSoundBtn.classList.add('soundCheck');
//     checkSoundBtn.innerText = elem;
//     checkSoundBtn.style.backgroundImage = `url(./img/${elem}.png)`;
//     checkSoundBtn.style.backgroundSize = 'cover';
//     container.appendChild(checkSoundBtn)

//     let createAudio = document.createElement('audio');
//     createAudio.src = `./audio/${elem}.mp3`;
//     container.appendChild(createAudio)

//     checkSoundBtn.addEventListener('click', () => createAudio.play());
//     // function playSound() {
//     //     createAudio.play();
//     // };
// });

function createButton(buttonName) {
    const generatedElement = document.createElement(buttonName);
    return generatedElement
};

function createDrums(drumItems) {
    drumItems.forEach((item) => {
        const button = createButton('button');
        button.classList.add('sound');
        button.innerText = item;
        button.style.backgroundImage = `url(./img/${item}.png)`;
        button.style.backgroundSize = 'cover';
        container.appendChild(butt)

        const audioElement = createButton('audio');
        audioElement.src = `./audio/${item}.mp3`;
        container.appendChild(audioElement)

        button.addEventListener('click', () => audioElement.play());
    })
};
createDrums(drumItems)