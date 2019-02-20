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
  }
}
</script>
