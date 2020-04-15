<template>
  <div class="col-12">
    <apod></apod>
  </div>
</template>

<script>
import Apod from "./Apod.vue";
export default {
  name: "apods",
  data() {
    return {};
  },
  computed: {
    apods() {
      return this.$store.state.apods;
    }
  },
  created() {
    return this.$store.dispatch("getApods");
  },
  components: {
    Apod
  }
};
</script>

<style>
</style>