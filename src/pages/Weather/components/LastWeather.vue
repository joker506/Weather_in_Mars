<template>
  <div class="wrapp">
    <div class="content">
      <h1 class="content__title">Latest Weather in Mars</h1>
      <p class="content__text">
        This app shows the daily measured weather
        <br />(temperature, wind, pressure) on the surface of Mars in Elysium
        Planitia, a flat smooth plain near the equator of Mars.
      </p>
    </div>
    <div class="wrapp__item" v-if="lastSol">
      <p class="container__item">Date of sol: {{ lastSol.sol }}</p>
      <p class="container__item">Date: {{ dateConvert(lastSol.time) }}</p>
      <p class="container__item">
        Temperature: {{ lastSol.max }} ({{ lastSol.min }})
      </p>
      <p class="container__item">Season: {{ lastSol.season }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'LastWeather',

  methods: {
    dateConvert(str) {
      let date = new Date(str);
      let options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
      return date.toLocaleDateString('ru-RU', options);
    },
  },

  computed: {
    ...mapGetters({
      newSols: 'weather/changeSols',
    }),
    lastSol() {
      if (this.newSols) {
        return this.newSols[this.newSols.length - 1];
      } else {
        return null;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapp {
  width: 100%;
  box-sizing: border-box;

  padding-left: 10px;
}
.content {
  margin: 0;
}
.content__title {
  margin-top: 50px;
  line-height: 16px;
  font-weight: 700;
  color: #ffffff;
}
.content__text {
  color: aliceblue;
  width: 350px;
  font-size: 16px;
  letter-spacing: 0.5px;
  line-height: 24px;
}
.container__item {
  text-align: left;
  color: #ffffff;
}
.wrapp__item {
  margin-right: 10px;
  margin-bottom: 30px;
  background-color: rgba(120, 189, 221, 0.3);
  padding: 5px 10px;
  border: 1px solid #4aa3cc;
  border-radius: 5px;
}
</style>
