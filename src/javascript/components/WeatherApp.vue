<template>
  <v-container>
    <v-card>
      <Weather
      :location="this.forecast.location"
      :description="this.forecast.description">
      </Weather>
      <Temperature
      :temp="this.forecast.temperature"
      :tempHigh="this.forecast.tempHigh"
      :tempLow="this.forecast.tempLow">
      </Temperature>
      <Forecast
      :cloudCover="this.forecast.cloudCover"
      :windSpeed="this.forecast.windSpeed"
      :windDirection="this.forecast.windDirection"
      :humidity="this.forecast.humidity">
      </Forecast>
    </v-card>
  </v-container>
</template>

<script>
import WeatherForecast from '../services/WeatherForecast';
import Weather from './Weather.vue';
import Temperature from './Temperature.vue';
import Forecast from './Forecast.vue';

export default {
  name: 'WeatherApp',
  data () {
    return {
      forecast: new WeatherForecast
    }
  },
  components: {
    Weather,
    Temperature,
    Forecast
  }
}
</script>
