<template>
  <div class="container">
    <div class="wrapp">
      <div class="sols" v-for="sol in newSols" :key="sol.id">
        Date of sol: {{ sol.sol }}
        <div class="sols__item">Date: {{ dateConvert(sol.time) }}</div>
        <div class="sols__item">High: {{ sol.max }}</div>
        <div class="sols__item">Low: {{ sol.min }}</div>
        <div class="sols__item">Season: {{ sol.season }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "WeatherWeek",
  data() {
    return {
      sols: {}
    };
  },

  methods: {
    dateConvert(str) {
      let date = new Date(str);
      let options = {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric"
      };
      return date.toLocaleDateString("ru-RU", options);
    }
  },
  computed: {
    ...mapGetters({ newSols: "weather/changeSols" })
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 400px;
}
.wrapp {
  display: flex;
  justify-content: space-around;
}
.sols {
  width: 250px;
  margin-left: 10px;
  margin-right: 10px;
  height: 150px;
  text-align: left;
  border: 1px solid #4aa3cc;
  background-color: rgba(120, 189, 221, 0.3);
  color: #ffffff;
  border-radius: 5px;
  padding-top: 10px;
  padding-left: 5px;
  &__item {
    margin-top: 5px;
  }
}
</style>
