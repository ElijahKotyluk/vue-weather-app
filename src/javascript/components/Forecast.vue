<template>
  <v-container class="pa-0 mt-2">
    <v-layout row justify-space-around>
     <v-flex xs4 class="forecast-item">
       <cloud-cover class="forecast-icon" />
       <span class="subheading">
         {{ cloudCover }}&percnt;
       </span>
     </v-flex>
     <v-flex xs4 class="forecast-item">
       <wind class="forecast-icon" />
       <span class="subheading">
         {{ windSpeed }}m/s
       </span>
     </v-flex>
     <v-flex xs4 class="forecast-item">
       <humidity class="forecast-icon" />
       <span class="subheading">
         {{ humidity }}&percnt;
       </span>
     </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import CloudCover from 'public/icons/cloudcover.svg';
import Humidity from 'public/icons/humidity.svg';
import Wind from 'public/icons/wind.svg';

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
      type: Number
      //required: true
    },
    humidity: {
      type: Number,
      required: true
    }
  },
  components: {
    CloudCover,
    Humidity,
    Wind
  }
}
</script>

<style lang="scss">
.forecast-item {
  display: flex;
  flex-direction: column;
  align-items: center;

  span.subheading {
    margin-left: 12px;
  }
}
</style>
