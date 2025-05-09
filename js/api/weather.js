import { weatherkey as API_KEY } from "./keys.js";

let iconSection = document.querySelector(".icon img");
let tempSection = document.querySelector(".temp");
let decSection = document.querySelector(".description");
let placeSection = document.querySelector(".place");

//위치 정보 가져올 함수
function getPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

//날씨 정보를 받아올 함수
async function getWeather(lat, lon) {
  const weather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
  const response = await fetch(weather);

  return response.json();
}

//DOM에 날씨 정보 표시
function renderWeather(data) {
  console.log(data);
  const { temp } = data.main;
  const { name: place } = data;
  const { description, icon } = data.weather[0];
  console.log(data.weather);
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  tempSection.innerHTML = temp;
  placeSection.innerHTML = place;
  decSection.innerHTML = description;
  iconSection.setAttribute("src", iconUrl);
  console.log(iconSection);
}

//초기함수

//위치를 받아오는 함수를 호출하여 위치값 받기
async function initWeatherApp() {
  const position = await getPosition();
  const { latitude, longitude } = position.coords;
  console.log(latitude, longitude);

  const weatherData = await getWeather(latitude, longitude);
  renderWeather(weatherData);
}

//초기함수 실행
initWeatherApp();