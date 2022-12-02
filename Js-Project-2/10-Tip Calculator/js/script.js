const amount = document.getElementById("amount");
const guests = document.getElementById("guest");
const quality = document.getElementById("quality");
const tipAmount = document.getElementById("tip-amount");

calculate = () => {
    const billAmount = parseFloat(amount.value);
    const numOfGuests = parseInt(guests.value);
    const serviceQuality = parseFloat(quality.value);

    if (isNaN(billAmount) || isNaN(numOfGuests) || isNaN(serviceQuality) || serviceQuality === 0) {
        tipAmount.innerHTML = 'Please enter valid values';
        showTipAmount();
        return;
    }

    const tip = ((billAmount * serviceQuality) / numOfGuests).toFixed(2);

    if (isNaN(tip)) {
        tipAmount.innerHTML = 'Tip $0 each';
    } else {
        tipAmount.innerHTML = `Tip: $${tip} each`;
    }

    showTipAmount();
}

showTipAmount = () => {
    tipAmount.classList.add("show");
    setTimeout(() => {
        tipAmount.classList.remove("show");
    }, 3000); // Hide tip amount after 3 seconds
}