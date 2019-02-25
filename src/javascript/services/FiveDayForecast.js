/* FiveDayForecast is a service that will fetch weather data for the next five days based
 * on the user's current location, from OpenWeatherMap.org.
*/

// Require environment variables
require('dotenv').config()

// Get five day forecast instance.
class FiveDayForecast {
  constructor() {
    this.list = [];

    this.update();
  }

  // Update five day forecast with data from current location.
  update() {
    if (navigator.onLine) {
      navigator.geolocation.getCurrentPosition(position => this.updateFiveDayForecast(position))
    }
  }

  // @param {Object} position - Lat & Lon coordinates object.
  async updateFiveDayForecast(position) {
    let data = null;

    try {
      data = await this.getFiveDayForecast(position.coords);
    } catch(error) {
      data = this.getErrorData();
      console.log(error);
    }

    this.populate(data);
  };

  // Fetch data from openweatherapi.
  async getFiveDayForecast(coordinates) {
    let appId = process.env.OPEN_WEATHER_KEY;
    let endpoint = `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${appId}&units=metric`;

    let response = await fetch(endpoint);

    return await response.json();
  };

  getErrorData() {
    return {
      cod: "400",
      message: 'There was an error with your api request.',
      cnt: 0,
      list: [],
      city: {}
    }
  };

  //@ param {Object} data - Set new Five Day Forecast json data.
  populate(data) {
    this.list = data.list;
  };

  // @param {String} city - Current city / @param {String} country - Current country.
  formatLocation(city, country) {
      if (city === null && country === null) {
          return '';
      };

      return `${city}, ${country}`;
  };
}

export default FiveDayForecast;
