<template>
  <div class="row">
    <photo v-for="photo in photos" :photoData="photo"></photo>
  </div>
</template>

<script>
import Photo from "./Photo.vue";
export default {
  name: "photos",
  data() {
    return {};
  },
  computed: {
    photos() {
      return this.$store.state.photos;
    }
  },
  created() {
    return this.$store.dispatch("getPhotos");
  },
  components: {
    Photo
  }
};
</script>

<style>
</style>