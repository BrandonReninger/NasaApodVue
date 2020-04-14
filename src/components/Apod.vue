<template>
  <div class="apod col-6">
    <img :src="apodData.imgUrl" />
  </div>
</template>

<script>
export default {
  name: "apod",
  props: [apodData],
  data() {
    return {};
  },
  methods: {
    getApod() {
      return this.$store.state.apod;
    }
  }
};
</script>

<style>
.apod {
  outline: 1px solid black;
}
</style>