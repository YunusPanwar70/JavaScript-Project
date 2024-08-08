let input = document.getElementById('input');
let pera = document.querySelector('.block p')
function tableGenrator(e) {
    e.preventDefault();
    let n = input.value;
    if (n === '') {
        alert('Please enter a number')
    }

    let table = [];
    for (let i = 1; i <= 10; i++) {
        table.push(n * i)
    }
    pera.innerHTML = table.join('<br>')
}
input.addEventListener('input', tableGenrator);