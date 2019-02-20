<template>
  <v-container>
    <v-card
    color="blue-grey">
      <Cloud />
      {{ this.forecast.cloudCover }}%
      <Wind />
      {{ this.forecast.windSpeed }}
      <Humidity />
      {{ this.forecast.humidity }}

      {{ this.forecast.temperature }}
      <temp-high />
      {{ this.forecast.tempHigh }}
      <temp-low />
      {{ this.forecast.tempLow }}


      {{ this.forecast.description }}
      {{ this.forecast.location }}
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
      scale: 'Celcius'
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
      (this.scale === 'Celcius')? this.scale = 'Fahrenheight' : this.scale = 'Celcius';
    }
  }
}
</script>
