<template>
  <v-container>
    <Weather
    :location="this.forecast.location"
    :description="this.forecast.description">
    </Weather>
    <Temperature
    :temp="this.forecast.temperature"
    :tempHigh="this.forecast.tempHigh"
    :tempLow="this.forecast.tempLow">
    </Temperature>
  </v-container>
</template>

<script>
import WeatherForecast from '../services/WeatherForecast';
import Weather from './Weather.vue';
import Temperature from './Temperature.vue';

export default {
  name: 'WeatherApp',
  data () {
    return {
      forecast: new WeatherForecast
    }
  },
  components: {
    Weather,
    Temperature
  }
}
</script>
