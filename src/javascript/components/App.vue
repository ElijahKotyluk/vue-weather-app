<template>
  <v-app>
    <h1 :title="title">{{ this.title }}</h1>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        title: 'vue-weather-app'
      }
    }
  }
</script>
