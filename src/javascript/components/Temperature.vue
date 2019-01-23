<template>
  <v-container class="text-xs-center">
    <p>{{ temp }}</p>
    <p>{{ tempHigh }}</p>
    <p>{{ tempLow }}</p>
  </v-container>
</template>

<script>
export default {
  name: 'Temperature',
  props : {
    temp: {
      type: Number,
      required: true
    },
    tempHigh: {
      type: Number,
      required: true
    },
    tempLow: {
      type: Number,
      required: true
    }
  }
}
</script>
