<template>
  <v-container>
    <v-card
    color="blue-grey">
      <v-card-title
      class="text-xs-center headline font-weight-medium">
         {{ this.forecast.description }}
         {{ this.forecast.location }}
      </v-card-title>
    </v-card>
  </v-container>
</template>

<script>
import WeatherForecast from '../services/WeatherForecast';

export default {
  name: 'WeatherApp',
  data () {
    return {
      forecast: new WeatherForecast
    }
  }
}
</script>
