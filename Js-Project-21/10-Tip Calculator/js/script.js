const amount = document.getElementById("amount");
const guests = document.getElementById("guests");
const quality = document.getElementById("quality");
const tipAmount = document.getElementById("tip-amount");

caluclate = () => {
    const tip = ((amount.value * quality.value) /
        (guests.value)).toFixed(2);

    amount.value = '';
    guests.value = '';
    quality.value = '';
    if (tip === 'Nan') {
        tipAmount.innerHTML = 'Tip $0 each';
        showTipAmount();
    } else {

    }
}