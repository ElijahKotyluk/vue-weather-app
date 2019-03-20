<template>
  <v-container>
    <v-layout row justify-space-around>
     <v-flex xs4>
       <p class="title font-weight-bold">
         {{ location }}
       </p>
       <p class="subheading font-weight-bold">
         {{ description }}
       </p>

       <component :is="weatherId" />
     </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Rain from 'public/icons/weather/rain.svg?inline';
import Snow from 'public/icons/weather/snow.svg?inline';
import Cloud from 'public/icons/weather/cloud.svg?inline';
import Thunderstorm from 'public/icons/weather/thunderstorm.svg?inline';

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
    weatherCode: {
      type: Number,
      required: true
    }
  },
  computed: {
    weatherId() {
      let id = this.weatherCode;

      if(id > 199 && id < 233) {
        return 'thunderstorm';
      } else if (id > 299 && id < 322) {
        return 'rain';
      } else if (id > 499 && id < 532) {
        return 'rain';
      } else if (id > 599 && id < 623) {
        return 'snow';
      } else {
        return 'cloud';
      }
    }
  },
  components: {
    Rain,
    Snow,
    Cloud,
    Thunderstorm
  }
}
</script>
