<template>
  <v-container>
    <v-card class="text-xs-center"
            color="blue-grey"
            width="60%">

      <div class="row">
        <Cloud class="forecast-icon" />
        {{ this.forecast.cloudCover }}%

        <Wind class="forecast-icon" />
        {{ this.forecast.windSpeed }}

        <Humidity class="forecast-icon" />
        {{ this.forecast.humidity }}
      </div>

      <div class="row">
        {{ this.forecast.temperature }}
        <temp-high />
        {{ this.forecast.tempHigh }}
        <temp-low />
        {{ this.forecast.tempLow }}
      </div>

      <div class="row">
        {{ this.forecast.description }}
        {{ this.forecast.location }}
      </div>
    </v-card>
  </v-container>
</template>

<script>
import WeatherForecast from '../services/WeatherForecast';
import Cloud from 'public/icons/cloud.svg';
import Humidity from 'public/icons/humidity.svg';
import TempHigh from 'public/icons/temphigh.svg';
import TempLow from 'public/icons/templow.svg';
import Wind from 'public/icons/wind.svg';

export default {
  name: 'WeatherApp',
  data () {
    return {
      forecast: new WeatherForecast,
      celcius: true
    }
  },
  components: {
    Cloud,
    Humidity,
    TempHigh,
    TempLow,
    Wind
  },
  computed: {
    scaleSymbol() {
      return this.scale.charAt(0);
    },
    fahrenheitValue() {
      return this.toFahrenheit(this.temp);
    },
    fahrenHigh() {
      return this.toFahrenheight(this.tempHigh);
    },
    fahrenLow() {
      return this.toFahrenheight(this.tempLow);
    }
  },
  methods: {
    toFahrenheight(value) {
      return Math.floor((value * 1.8) + 32);
    },
    toggleFahr() {
      // If this.celcius is true blah blah ternary maybes
      (this.scale === 'Celcius')? this.scale = 'Fahrenheight' : this.scale = 'Celcius';
    }
  }
}
</script>

<style lang="scss">

.row {
  width: 100%;
  display: inline-block;
}

svg.forecast-icon {
  height: 5em;
  width: 5em;
}
</style>
