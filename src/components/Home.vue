<template>
  <div class="jumbotron mt-3 bg-secondary text-white">
    <h1 class="display-4">Easy Stock Trade or View your Portfolio</h1>
    <p class="lead">You can Save & Load your Data</p>
    <p class="lead">Click on "End Day" to begin a New Day</p>
    <hr class="my-3">
    <p class="lead">Your funds: {{ getFunds | currency}}</p>
  </div>
</template>

<script>
export default {
  computed: {
    getFunds() {
      return this.$store.getters.funds;
    }
  }
};
</script>

