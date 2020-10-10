<template>
  <div id="weather__wrapper">
    <LastWeather />
    <WeatherWeek />
  </div>
</template>

<script>
import LastWeather from "./components/LastWeather";
import WeatherWeek from "./components/WeatherWeek";

import { mapActions } from "vuex";

export default {
  name: "Weater",
  components: {
    LastWeather,
    WeatherWeek
  },

  methods: {
    ...mapActions({
      setWeather: "weather/setWeather"
    })
  },
  mounted: function() {
    this.setWeather();
  }
};
</script>

<style>
#weather__wrapper {
  background-repeat: no-repeat;
  overflow: hidden;
  background-position: top;
  background-image: url("~@/assets/mars.jpg");
}
</style>
