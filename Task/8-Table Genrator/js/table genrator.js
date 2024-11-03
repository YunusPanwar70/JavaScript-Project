let input = document.getElementById('input');
let pera = document.querySelector('.block p')
let block = document.querySelector('.block');
let button = document.getElementById('btn')
function tableGenrator(e) {
    e.preventDefault();
    let n = input.value;
    if (n === '') {
        alert('Please enter a number')
    } else {
        let table = [];
        let div = document.createElement('div')
        div.setAttribute("class", 'one');
        for (let i = 1; i <= 10; i++) {
            table.push(n * i);
        }
        div.innerHTML = table.join('<br>')
        console.log(div);
        // div.append(pera);
        block.append(div);
        input.value = '';
    }
}
button.addEventListener('click', tableGenrator);
function checkBtns(e) {
    let n = input.value;
    if (e.key === 'Enter') {
        let table = [];
        let div = document.createElement('div')
        div.setAttribute("class", 'one');
        for (let i = 1; i <= 10; i++) {
            table.push(n * i);
        }
        div.innerHTML = table.join('<br>')
        console.log(div);       
        block.append(div);
        input.value = '';
    }
}
input.addEventListener('keydown', checkBtns);