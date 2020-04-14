<template>
  <div class="col-12">
    <h5>{{data.date}}</h5>
    <img :src="data.hdurl" />
    <small>{{data.explanation}}</small>
    <h3>{{data.title}}</h3>
  </div>
</template>

<script>
import Apod from "./Apod.vue";
export default {
  name: "apod",
  data() {
    return {};
  },
  computed: {
    apods() {
      return this.$store.state.apods;
    }
  }
};
</script>

<style>
.apod {
  outline: 1px solid black;
}
</style>