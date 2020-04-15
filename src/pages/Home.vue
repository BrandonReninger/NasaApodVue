<template>
  <div class="home container-fluid">
    <!--Nasa Apod-->
    <div class="row">
      <apods></apods>
    </div>
    <!--Nasa EPIC-->
    <div class="row">
      <photos></photos>
    </div>
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
