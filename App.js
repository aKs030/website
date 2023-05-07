$(document).ready(function() {
	const API_KEY = '32KjL8ffscjaE56SNCysYfJK4dFsag3q';
	const CITY = 'Berlin';
	const URL = `https://api.accuweather.com/forecasts/v1/daily/5day/295015?apikey=${API_KEY}&metric=true`;
	
	$.ajax({
		method: 'GET',
		url: URL,
		success: function(response) {
			const data = response.DailyForecasts;
			let html = '<h1>5-Day Weather Forecast for Berlin</h1><table><thead><tr><th>Date</th><th>Minimum Temperature (°C)</th><th>Maximum Temperature (°C)</th><th>Daytime Weather</th><th>Nighttime Weather</th></tr></thead><tbody>';
			
			data.forEach(function(forecast) {
				const date = new Date(forecast.Date);
				const minTemp = forecast.Temperature.Minimum.Value;
				const maxTemp = forecast.Temperature.Maximum.Value;
				const dayWeather = forecast.Day.IconPhrase;
				const nightWeather = forecast.Night.IconPhrase;
				
				html += `<tr><td>${date.toDateString()}</td><td>${minTemp}</td><td>${maxTemp}</td><td>${dayWeather}</td><td>${nightWeather}</td></tr>`;
			});
			
			html += '</tbody></table>';
			$('#weather').html(html);
		},
		error: function(error) {
			console.log(error);
		}
	});
});
