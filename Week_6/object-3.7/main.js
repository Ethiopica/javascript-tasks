/* Task 7
Create an object `weatherApp` with a method `fetchWeather(city)`.
Use `fetch` to get weather data from an API and display it in an HTML element.
(API: OpenWeather or any free weather API)
*/

const weatherApp = {
  apiKey: "ab229e5b55858cfd8d077e367ad79db6", // Replace with your OpenWeather API key
  fetchWeather: function (city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === 200) {
          const weather = data.weather[0].description;
          const temperature = data.main.temp;
          const humidity = data.main.humidity;
          const windSpeed = data.wind.speed;

          const weatherInfo = `
                <h3>Weather in ${city}</h3>
                <p><strong>Weather:</strong> ${weather}</p>
                <p><strong>Temperature:</strong> ${temperature}°C</p>
                <p><strong>Humidity:</strong> ${humidity}%</p>
                <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
              `;

          document.getElementById("weatherInfo").innerHTML = weatherInfo;
        } else {
          document.getElementById(
            "weatherInfo"
          ).innerHTML = `<p>City not found. Please try again.</p>`;
        }
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        document.getElementById(
          "weatherInfo"
        ).innerHTML = `<p>There was an error fetching the weather data.</p>`;
      });
  },
};

// Event listener for the "Get Weather" button
document.getElementById("getWeatherBtn").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value;
  if (city) {
    weatherApp.fetchWeather(city); // Call fetchWeather method with city
  } else {
    document.getElementById("weatherInfo").innerHTML =
      "<p>Please enter a city name.</p>";
  }
});
