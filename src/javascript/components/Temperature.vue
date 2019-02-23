<template>
  <v-container fill-heigh text-xs-center >
    <v-layout row align-center>

      <v-flex xs6 text-xs-right>
        <p class="headline">
          {{ temperature }}&deg;
        </p>
      </v-flex>

      <v-flex xs6 text-xs-left>
        
        <temp-high />
        <p class="subheading">
          {{ tempHigh }}&deg;
        </p>

        <temp-low />
        <p class="subheading">
          {{ tempLow }}&deg;
        </p>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import TempHigh from 'public/icons/temphigh.svg';
import TempLow from 'public/icons/templow.svg';

export default {
  name: 'Temperature',
  props : {
    temperature: {
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
  },
  data () {
    return {
      scale: 'Celcius'
    }
  },
  computed: {
    scaleSymbol() {
      return this.scale.charAt(0);
    },
    fahrenValue() {
      return this.toFahrenheit(this.value);
    },
    fahrenHigh() {
      return this.toFahrenheit(this.high);
    },
    fahrenLow() {
      return this.toFahrenheight(this.low);
    }
  },
  methods: {
    toFahrenheit(value) {
      return Math.floor((value * 1.8) + 32);
    },
    toggleTemp() {
      (this.scale === 'Celcius')? this.scale = 'Fahrenheit' : this.scale = 'Celcius';
    }
  },
  components: {
    TempHigh,
    TempLow
  }
}
</script>
