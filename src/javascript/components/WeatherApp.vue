<template>
  <v-container color="blue"
               fill-height
               fluid>

    <v-layout row
              flex
              align-center
              justify-center>

        <v-card class="text-xs-center darken-1"
                color="grey"
                elevation="12"
                width="350px"
                min-height="525px">

          <forecast :cloudCover="this.forecast.cloudCover"
                    :windSpeed="this.forecast.windSpeed"
                    :humidity="this.forecast.humidity" />

          <temperature :temperature="this.forecast.temperature"
                       :tempHigh="this.forecast.tempHigh"
                       :tempLow="this.forecast.tempLow" />

          <weather-details :location="this.forecast.location"
                           :description="this.forecast.description"
                           :weatherCode="this.forecast.weatherCode"/>
        </v-card>

    </v-layout>
  </v-container>
</template>

<script>
import WeatherForecast from '../services/WeatherForecast';
import FiveDayForecast from '../services/FiveDayForecast';

import Forecast from './Forecast.vue';
import Temperature from './Temperature.vue';
import WeatherDetails from './WeatherDetails.vue';

export default {
  name: 'WeatherApp',
  data () {
    return {
      forecast: new WeatherForecast,
      fiveDay: new FiveDayForecast
    }
  },
  components: {
    Forecast,
    Temperature,
    WeatherDetails
  }
}
</script>

<style lang="scss">
.v-card {
  color: rgba(255, 255, 255, .6) !important;
}

.row {
  width: 100%;
  display: inline-block;
}

svg.forecast-icon {
  height: 3em;
  width: 3em;
}
</style>
