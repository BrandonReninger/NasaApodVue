<template>
  <div class="home container-fluid">
    <!--Nasa Apod-->
    <div class="row"></div>
    <apod></apod>
  </div>
</template>

<script>
import Apod from "../components/Apod.vue";

export default {
  name: "Home",
  components: { Apod }
};
</script>
