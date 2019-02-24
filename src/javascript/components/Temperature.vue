<template>
  <v-container fill-height text-xs-center >
    <v-layout row align-center>

      <v-flex class="pr-1"
              text-xs-right
              xs6>
        <p class="display-3">
          {{ (scaleSymbol === 'C')? temperature : fahrenValue }}
        </p>
      </v-flex>

      <v-flex class="pl-1"
              text-xs-left
              xs6>

        <a class="title black--text" href="#"
          @click.prevent="toggleTemperature">
          &deg;{{ scaleSymbol }}
        </a>

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
      return this.toFahrenheit(this.temperature);
    },
    fahrenHigh() {
      return this.toFahrenheit(this.tempHigh);
    },
    fahrenLow() {
      return this.toFahrenheight(this.tempLow);
    }
  },
  methods: {
    toFahrenheit(temperature) {
      return Math.floor((temperature * 1.8) + 32);
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

<style lang="scss">
p.subheading {
  margin-bottom: 0;
}

a.title {
  text-decoration: none;
}
</style>
