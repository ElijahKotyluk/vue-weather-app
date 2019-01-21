/*
* WeatherForecast is a service that will fetch the weather data of
* the user's current location from openweathermap.org.
*/

// Get weather forecast instance.
class WeatherForecast {
  constructor() {
    this.cloudCover = 0;
    this.windSpeed = 0;
    this.windDirection = 0;
    this.humidity = 0;

    this.temperature = 0;
    this.tempHigh = 0;
    this.tempLow = 0;

    this.location = '';
    this.description = 'Connect to the internet to get your local weather forecast.';

    this.update();
  }

  // Update forecast with data from current location.
  update() {
    if (navigator.onLine) {
      navigator.geolocation.getCurrentPosition(position => this.updateForecast(position));
    }
  }

  // @param {Object} position - Lat & lon coordinates object.
  // Update forecast from current coordinates.
  async updateForecast(position) {
    let data = null;

    try {
      data = await this.getForecast(position.coords);
    } catch(error) {
      data = this.getErrorData();
    }

    this.populate(data);
  }

  // fetch data from openweatherapi.
  async getForecast(coordinates) {
    let appId = '932c95dd5f339bedd5309b0ef65ab28a'
    let endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${appId}&units=metric`

    let response = await fetch(endpoint)

    return await response.json()
  }

  // Populate data incase of error.
  getErrorData() {
    return {
      clouds: { all: 0 },
      wind: {
        speed: 0,
        direction: 0
      },
      main: {
          humidity: 0,
          temp: 0,
          temp_max: 0,
          temp_min: 0,
      },
      weather: [
          {
              id: 0,
              description: `There's a problem at the weather forecast server ¯\\_(ツ)_/¯`
          }
      ],
      name: null,
      sys: {
          country: null
      }
    }
  }

  // @param {object} data - Set new Weather Forecast json data.
  populate(data) {
    this.cloudCover = data.clouds.all;
    this.windSpeed = data.wind.speed;
    this.windDirection = data.wind.deg;
    this.humidity = data.main.humidity;
    this.temperature = data.main.temp;
    this.tempHigh = data.main.temp_max;
    this.tempLow = data.main.temp_min;
    this.location = this.formatLocation(data.name, data.sys.country);
    this.description = data.weather[0].description;
  }

  /*
  * Format location.
  *
  * @param {String} city - Current city.
  * @param {String} country - Current country.
  */
  formatLocation(city, country) {
      if (city === null && country === null) {
          return '';
      }

      return `${city}, ${country}`;
  }
}

export default WeatherForecast;
