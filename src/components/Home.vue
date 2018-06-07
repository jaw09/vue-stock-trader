<template>
  <div class="jumbotron mt-3 bg-secondary text-white">
    <h1 class="display-4">Easy Stock Trader</h1>
    <p class="lead">You can Save & Load your data or view your portfolio</p>
    <p class="lead">Click on "End Day" to get a New Day Price</p>
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

