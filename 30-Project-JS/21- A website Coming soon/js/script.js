let countDownDate = new Date("Jan 8, 2024 00:00:00").getTime();

let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(distance / (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(distance / (1000 * 60 * 60 * 24) / (1000 * 60));
    let secounds = Math.floor(distance / (1000 * 60 * 60 * 24) / 1000);

})