<template>
  <v-app>
    <h1 class="text-xs-center" :title="title">{{ this.title }}</h1>
  </v-app>
</template>

<script>
import WeatherForecast from '../services/WeatherForecast'
  export default {
    name: 'App',
    data () {
      return {
        title: 'vue-weather-app',
        forecast: new WeatherForecast
      }
    },
    components: {
    }
  }
</script>
