<template>
  <div class="photo col-4">
    <img class="img-fluid" :src="photoData.image" />
    <small>{{photoData.caption}}</small>
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
.photo {
  outline: 1px solid black;
}
</style>