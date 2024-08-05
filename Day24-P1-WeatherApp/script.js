let form = document.querySelector(".form");
let searchBtn = document.querySelector(".search-btn");

let cityInput = document.querySelector(".searchCity");
let cityNameElement = document.querySelector(".city-name");
let temperatureElement = document.querySelector(".temperature");

let hoursElement = document.querySelector(".hour");
let minutesElement = document.querySelector(".minute");
let meridiemElement = document.querySelector(".meridiem");

let dayElement = document.querySelector(".day");
let dateElement = document.querySelector(".date");
let monthElement = document.querySelector(".month");
let yearElement = document.querySelector(".year");

const apiId = `d617f9e2b85c1b5e9e8394fba8836928`;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let city = cityInput.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiId}`;
  fetch(url)
    .then((data) => data.json())
    .then((data) => {
      return displayWeather(data);
    })
    .catch((err) => console.log(err));
});

function displayWeather(data) {
  console.log(data);
  let {
    name,
    main: { temp },
  } = data;
  cityNameElement.textContent = name;
  temp = temp - 273.15;
  temperatureElement.textContent = temp.toFixed(0);
}

function displayTimeAndDate() {
  let timeNow = new Date();
  let hours = timeNow.getHours();

  let meridiem = hours >= 12 ? "PM" : "AM";
  meridiemElement.textContent = meridiem;

  hours = hours % 12 || 12;
  hoursElement.textContent = hours.toString().padStart(2, "0");

  let minutes = timeNow.getMinutes();
  minutesElement.textContent = minutes.toString().padStart(2, "0");



  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = timeNow.getDay();
  dayElement.textContent = daysOfWeek[day];

  let date = timeNow.getDate();
  dateElement.textContent = date;

  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = timeNow.getMonth();
  monthElement.textContent = monthsOfYear[month];

  let year = timeNow.getFullYear();
  yearElement.textContent = year;
}
setInterval(displayTimeAndDate, 1000);
