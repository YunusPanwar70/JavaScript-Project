const apikey = "42d29d638e1ce343af045f356ec282d5";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search Button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "/img/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "/img/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "/img/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "/img/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "/img/mist.png";
    }
  }

  let data = await response.json();

  // console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  document.querySelector(".weather").style.display = "block";
  document.querySelector(".weather").style.display = "none";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

checkWeather();
