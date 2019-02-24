
// WeatherForecast is a service that will fetch weather data based
// on the user's current location, from OpenWeatherMap.org.

// Require environment variables
require('dotenv').config()

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
    this.weatherIcon = require('public/icons/weather/cloud.svg');

    this.update();
  }

  // Update forecast with data from current location.
  update() {
    if (navigator.onLine) {
      navigator.geolocation.getCurrentPosition(position => this.updateForecast(position));
    }
  }

  //  @param {Object} position - Lat & lon coordinates object.
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
    let appId = process.env.OPEN_WEATHER_KEY;
    let endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${appId}&units=metric`;

    let response = await fetch(endpoint);

    return await response.json();
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
    this.temperature = Math.round(data.main.temp);
    this.tempHigh = data.main.temp_max;
    this.tempLow = data.main.temp_min;
    this.location = this.formatLocation(data.name, data.sys.country);
    this.description = data.weather[0].description;
    this.weatherIcon = this.getWeatherIcon(data.weather[0].id);
  };


  // @param {String} city - Current city / @param {String} country - Current country.
  formatLocation(city, country) {
      if (city === null && country === null) {
          return '';
      };

      return `${city}, ${country}`;
  };

  // @param {Number} id - Weather ID.
  getWeatherIcon(id) {
      if(this.isThunderstorm(id)) {
          return require('public/icons/weather/thunderstorm.svg');
      }

      if(this.isDrizzle(id) || this.isRain(id)) {
          return require('public/icons/weather/rain.svg');
      }

      if(this.isSnow(id)) {
          return require('public/icons/weather/snow.svg');
      }

      return require('public/icons/weather/cloud.svg');
  }

  // @param {Number} id - WeatherID.
  isThunderstorm(id) {
    return id > 199 && id < 233
  }
  // @param {Number} id - Weather ID.
  isDrizzle(id) {
      return id > 299 && id < 322;
  };

  // @param {Number} id - Weather ID.
  isRain(id) {
      return id > 499 && id < 532;
  };

  // @param {Number} id - Weather ID.
  isSnow(id) {
      return id > 599 && id < 623;
  };
}

export default WeatherForecast;
