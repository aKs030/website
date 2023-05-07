function getWeather() {
  const city = document.getElementById("city").value;
  const api_key = "32KjL8ffscjaE56SNCysYfJK4dFsag3q";
  const url = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${api_key}&q=${city}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const location_key = data[0].Key;
      const url_forecast = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${location_key}?apikey=${api_key}`;
      return fetch(url_forecast);
    })
    .then(response => response.json())
    .then(data => {
      let forecastHTML = "<h2>Vorhersage für die nächsten 5 Tage</h2>";
      data.DailyForecasts.forEach(day => {
        const date = new Date(day.Date).toLocaleDateString();
        const temperature = day.Temperature.Maximum.Value + "°C";
        const description = day.Day.IconPhrase;
        forecastHTML += `<p><strong>${date}:</strong> ${temperature} - ${description}</p>`;
      });
      document.getElementById("weather").innerHTML = forecastHTML;
    })
    .catch(error => console.log(error));
}
