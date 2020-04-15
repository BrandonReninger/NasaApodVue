<template>
  <div class="home container-fluid">
    <!--Nasa Apod-->
    <div class="row"></div>
    <apods></apods>
    <photos></photos>
  </div>
</template>

<script>
import Apod from "../components/Apod.vue";
import Apods from "../components/Apods.vue";
import Photo from "../components/Photo.vue";
import Photos from "../components/Photos.vue";

export default {
  name: "Home",
  components: { Apods, Photos }
};
</script>
