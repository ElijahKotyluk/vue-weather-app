<template>
  <v-container>
    <v-layout row justify-space-around>
     <v-flex xs4>
       <p class="title">
         {{ location }}
       </p>
       <p class="subheading">
         {{ description }}
       </p>
       <img :src="icon" :alt="description">
     </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'WeatherDetails',
  props: {
    location: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    icon: {}
  }
}
</script>
