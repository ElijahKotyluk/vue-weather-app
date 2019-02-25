<template>
  <v-app dark>
    <v-toolbar>
      <p class="display-1" :title="title">
        {{ this.title }}
      </p>
    </v-toolbar>

    <v-content>
      <weather-app></weather-app>
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
