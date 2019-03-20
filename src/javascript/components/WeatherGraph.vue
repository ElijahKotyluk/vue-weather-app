<template>
  <v-card>
    <v-sparkline
      :value="this.fiveDay.list"
      >

    </v-sparkline>
  </v-card>
</template>

<script>
import FiveDayForecast from '../services/FiveDayForecast';

export default {
  name: 'WeatherGraph',
  data () {
    return {
      fiveDay: new FiveDayForecast
    }
  }
}
</script>
