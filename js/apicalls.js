require('../config');
const url = require("node:url");
const apiKey = process.env.API_TOKEN;
console.log(apiKey)
const weatherApi = {
    apiToken:  apiKey,
    baseUrl: 'http://api.weatherapi.com/v1',
    getWeatherData: function getWeatherData(location) {
      const url = `${this.baseUrl}/current.json?key=${this.apiToken}&q=${encodeURIComponent(location)}`;

      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
          }
          return response.json();
        })
        .then(data => {
          console.log('Weather data:', data);
          displayWeatherData(data);
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
    }
}
function displayWeatherData(data) {
  const location = data.location.name;
  const tempCelsius = data.current.temp_c;
  const condition = data.current.condition.text;
}

weatherApi.getWeatherData('Minneapolis');
