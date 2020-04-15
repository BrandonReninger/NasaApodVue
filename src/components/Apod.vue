<template>
  <div class="apod col-12">
    <h5>{{apod.date}}</h5>
    <img class="img-fluid" :src="apod.hdurl" />
    <small>{{apod.explanation}}</small>
    <h3>{{apod.title}}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    apod() {
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