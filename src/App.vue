<template>
  <div id="app">
    <Weather />
  </div>
</template>

<script>
import Weather from "@/pages/Weather";

export default {
  name: "App",
  components: {
    Weather
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
