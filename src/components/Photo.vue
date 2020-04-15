<template>
  <div class="apod col-6">
    <img class="img-fluid" :src="photoData.image" />
    <small>{{apod.caption}}</small>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    photoData() {
      return this.$store.state.photos;
    }
  }
};
</script>

<style>
.apod {
  outline: 1px solid black;
}
</style>