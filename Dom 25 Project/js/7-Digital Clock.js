window.addEventListener("load", calculateTime)

function calculateTime() {
    let date = new Date();
    let dayNumber = date.getDay();
    let hour = date.getHours();
    let minute = date.getMinutes();
    screen
    let ampm = hour >= 12 ? "PM" : "AM";
    let dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    hour = hour % 12;
    hour + hour ? 12 : "12";
    hour = hour < 10 ? "0" + hour : hour
    minute = minute < 10 ? "0" + minute : minute;
    document.getElementById("day").innerHTML = dayName[dayNumber];
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("ampm").innerHTML = ampm;

    setTimeout(calculateTime, 200);
}