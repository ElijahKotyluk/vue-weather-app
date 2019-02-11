<template>
  <v-app>
    <v-toolbar class="text-xs-center align-center">
      <v-toolbar-title class="blue--text" :title="title">{{ this.title }}</v-toolbar-title>
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
