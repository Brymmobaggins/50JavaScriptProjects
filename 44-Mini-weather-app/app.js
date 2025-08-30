/** @format */

const output = document.getElementById("output");

async function fetchWeather() {
  const city = document.getElementById("input").value.trim();

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5ef85c479a508121eafb01128e2e4118&units=metric`
  );

  const weather = await response.json();
  return weather;
}

async function renderWeather() {
  const cityWeather = await fetchWeather();
  output.innerHTML = `
         <p>${cityWeather.name}</p>
         <p>${cityWeather.main.temp}</p>
   `;
}
document
  .getElementById("getWeatherBtn")
  .addEventListener("click", renderWeather);
