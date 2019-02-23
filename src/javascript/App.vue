<template>
  <v-app>
    <v-toolbar text-xs-center>
      <p class="blue--text display-1" :title="title">
        {{ this.title }}
      </p>
    </v-toolbar>

    <v-content>
      <WeatherApp></WeatherApp>
    </v-content>
  </v-app>
</template>

<script>
import WeatherApp from './components/WeatherApp.vue';

  export default {
    name: 'App',
    data () {
      return {
        title: 'vue-weather-app'
      }
    },
    components: {
      WeatherApp
    }
  }
</script>
