const [inp, btn] = [document.getElementById('input'), document.getElementById('button')];
btn.addEventListener('click', (e) => {
    e.preventDefault();
    randomPassword();
});
function randomPassword() {
    
    let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    let charters = "~!@#$%^&*()-_,.;' /\][{ }";
    let numbers = Math.floor(Math.random() * 10);
    for (let i = 0; i < 8; i++) {
        let upperRandom = Math.floor(Math.random() * upperCase.length)
    }
}