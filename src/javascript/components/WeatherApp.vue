<template>
  <v-container fill-height fluid>
    <v-layout row align-center>
      <v-flex class="text-xs-center" offset-xs4>
        <v-card class="text-xs-center"
                color="blue-grey"
                elevation="8"
                width="50%">

          <forecast :cloudCover="this.forecast.cloudCover"
                    :windSpeed="this.forecast.windSpeed"
                    :humidity="this.forecast.humidity" />

          <temperature :temperature="this.forecast.temperature"
                       :tempHigh="this.forecast.tempHigh"
                       :tempLow="this.forecast.tempLow" />

          <weather-details :location="this.forecast.location"
                           :description="this.forecast.description"
                           :icon="this.forecast.weatherIcon"/>

        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import WeatherForecast from '../services/WeatherForecast';

import Forecast from './Forecast.vue';
import Temperature from './Temperature.vue';
import WeatherDetails from './WeatherDetails.vue';

export default {
  name: 'WeatherApp',
  data () {
    return {
      forecast: new WeatherForecast
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

.row {
  width: 100%;
  display: inline-block;
}

svg.forecast-icon {
  height: 3em;
  width: 3em;
}
</style>
