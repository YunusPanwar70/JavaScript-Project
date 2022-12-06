function fanIsOn(clickButton) {
    const targetButtons = clickButton.id;
    // console.log(targetButtons);
    switch (true) {
        case targetButtons === 'fanOn':
            fanImg.style.animationDuration = "3s";
            break;

        case targetButtons === 'fanOFF':
            fanImg.style.animationDuration = "0s";
            break;

        case targetButtons === 'one':
            fanImg.style.animationDuration = "1s";
            break;

        case targetButtons === 'two':
            fanImg.style.animationDuration = "0.5s";
            break;

        case targetButtons === 'three':
            fanImg.style.animationDuration = "0.15s";
            break;

        default:
            break;
    }
}
document.querySelector(".buttons").addEventListener("click", (e) => {
    // console.log(e.target);
    fanIsOn(e.target);
});