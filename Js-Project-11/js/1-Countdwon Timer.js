const endDate = "23 October 4:05PM";

document.getElementById("end-date").innerHTML = endDate;

const inputs = document.getElementById("input");

// const clock = () => {

// }

function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;
    // Convert into days
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[1].Math.floor(diff / 60) % 60;
}

clock();