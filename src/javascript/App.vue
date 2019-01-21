<template>
  <v-app>
    <v-toolbar>
      <h1 class="text-xs-center" :title="title">{{ this.title }}</h1>
    </v-toolbar>

    <WeatherApp></WeatherApp>
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
