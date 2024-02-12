const endDate = "23 October 2024 16:05:00";
const enddates = document.getElementById("end-date").innerHTML = endDate;
const inputs = document.querySelectorAll(".col input");

function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;
    // Convert into days
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff % 60);
}

setInterval(clock, 1000); // Update every second