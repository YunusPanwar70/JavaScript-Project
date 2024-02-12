const day = document.getElementById("day");
const hour = document.getElementById("hour");
const ampm = document.getElementById("ampm");

function calculateTime() {
    let date = new Date();
    let dayNumber = date.getDay();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let ampm = hour >= 12 ? "PM" : "AM";
    let dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    hour = hour % 12;
    hour + hour ? 12 : "12";
    hour = hour < 10 ? "0" + hour : hour
    minute = minute < 10 ? "0" + minute : minute;
    day.innerHTML = dayName[dayNumber];
    hour.innerHTML = hour;
    ampm.innerHTML = ampm;

    setTimeout(calculateTime, 200);
}
window.addEventListener("load", calculateTime);