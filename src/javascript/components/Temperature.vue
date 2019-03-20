<template>
  <v-container fill-height text-xs-center >
    <v-layout class="ml-5"
              align-center
              row>

      <v-flex class="pr-1"
              text-xs-right
              xs6>
        <p class="display-4 mb-0 mt-3">
          {{ (scaleSymbol === 'C')? temperature : fahrenValue }}
        </p>
      </v-flex>

      <div class="pl-1 temp-right"
              text-xs-left
              xs6>

        <a @click.prevent="toggleTemperature"
            class="display-1 mr-5"
            href="#">
              &deg;{{ scaleSymbol }}
        </a>

        <div class="temp-high">
          <temp-high />
          <p class="subheading">
            {{ (scaleSymbol === 'C')? tempHigh : fahrenHigh }}&deg;
          </p>
        </div>

        <div class="temp-low" row>
          <temp-low />
          <p class="subheading">
            {{ (scaleSymbol === 'C')? tempLow : fahrenLow }}&deg;
          </p>
        </div>
      </div>

    </v-layout>
  </v-container>
</template>

<script>
import TempHigh from 'public/icons/temphigh.svg?inline';
import TempLow from 'public/icons/templow.svg?inline';

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
      return this.toFahrenheit(this.tempLow);
    }
  },
  methods: {
    toFahrenheit(temperature) {
      return Math.floor((temperature * 1.8) + 32);
    },
    toggleTemperature() {
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

a.display-1 {
  text-decoration: none;
  color: inherit;
}

a:hover {
  color: rgba(255, 255, 255, 1)
}


.temp-right {
  display: flex;
  flex-direction: column;
}
div.temp-high {
  display: flex;
}

div.temp-low {
  display: flex;
}

</style>
