<template>
  <div>
    <h1 :title="title">{{ this.title }}</h1>
  </div>
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
