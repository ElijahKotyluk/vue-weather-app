<template>
  <v-app>
    <h1 class="text-xs-center" :title="title">{{ this.title }}</h1>
    <forecast></forecast>
  </v-app>
</template>

<script>
import Forecast from './forecast/Forecast.vue'
  export default {
    name: 'App',
    data () {
      return {
        title: 'vue-weather-app'
      }
    },
    components: {
      Forecast
    }
  }
</script>
