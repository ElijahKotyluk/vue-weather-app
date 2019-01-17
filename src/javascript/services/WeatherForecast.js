/*
* WeatherForecast is a service that will fetch the weather data of
* the user's current location from openweathermap.org.
*/

// Get weather forecast instance.
class WeatherForecast {
  constructor() {
    this.cloudCover = 0,
    this.windSpeed = 0,
    this.windDirection = 0,

    this.temperature = 0,
    this.tempHigh = 0,
    this.tempLow = 0,

    this.location = '',
    this.message = 'Connect to the internet to get your local weather forecast.',
  }
}

// Update forecast with data from current location.
update() {
  if (navigator.onLine) {
    navigator.geolocation.getCurrentPosition(position => this.updateForecast(position));
  }
}
