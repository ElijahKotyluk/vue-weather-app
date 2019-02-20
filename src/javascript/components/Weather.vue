<template>
  <v-container
  class="text-xs-center">
    <v-layout
      column
      justify-center>
      <h1>{{ location }}</h1>
      <h2>{{ description }}</h2>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'Weather',
  props: {
    location: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>
