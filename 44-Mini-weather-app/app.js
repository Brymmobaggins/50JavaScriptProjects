/** @format */

const output = document.getElementById("output");

async function fetchWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
      )}&appid=5ef85c479a508121eafb01128e2e4118&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    return await response.json();
  } catch (error) {
    return { error: error.message };
  }
}

async function renderWeather() {
  const city = document.getElementById("input").value.trim();
  if (!city) {
    output.innerHTML = "<p>Please enter a city</p>";
    return;
  }

  // Show spinner immediately
  output.innerHTML = `<div class="spinner"></div>`;

  const cityWeather = await fetchWeather(city);

  // Wait 5 seconds before showing the result
  setTimeout(() => {
    if (cityWeather.error) {
      output.innerHTML = `<p>${cityWeather.error}</p>`;
    } else {
      output.innerHTML = `
        <h2>${cityWeather.name}</h2>
        <p>🌡️ Temp: ${cityWeather.main.temp}°C</p>
        <p>🤔 Feels like: ${cityWeather.main.feels_like}°C</p>
        <p>💧 Humidity: ${cityWeather.main.humidity}%</p>
        <p>🌬️ Wind: ${cityWeather.wind.speed} m/s</p>
        <p>🌥️ Weather: ${cityWeather.weather[0].description}</p>
      `;
    }
  }, 3000); // 5000ms = 5 seconds
}

document
  .getElementById("getWeatherBtn")
  .addEventListener("click", renderWeather);
