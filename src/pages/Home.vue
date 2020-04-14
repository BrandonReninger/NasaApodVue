<template>
  <div class="home container-fluid">
    <!--Nasa Apod-->
    <div class="row"></div>
    <apods></apods>
  </div>
</template>

<script>
import Apod from "../components/Apod.vue";
import Apods from "../components/Apods.vue";

export default {
  name: "Home",
  components: { Apods }
};
</script>
