let input = document.getElementById('input');
let pera = document.querySelector('.block p')
function tableGenrator(e) {
    e.preventDefault();
    let n = input.value;
    if (n === '') {
        alert('Please enter a number')
    }

    pera.innerHTML = table.join('<br>')
}
input.addEventListener('input', tableGenrator);