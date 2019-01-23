<template>
  <v-container class="text-xs-center">
    <p>{{ cloudCover }}</p>
    <p>{{ windSpeed }}</p>
    <p>{{ windDirection }}</p>
    <p>{{ humidity }}</p>
  </v-container>
</template>

<script>
export default {
  name: 'Forecast',
  props: {
    cloudCover: {
      type: Number,
      required: true
    },
    windSpeed: {
      type: Number,
      required: true
    },
    windDirection: {
      type: Number,
      required: true
    },
    humidity: {
      type: Number,
      required: true
    }
  }
}
</script>
