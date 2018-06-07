<template>
  <div id="app" class="container">
    <app-header @notify="success"></app-header>
    <transition name="fade" mode="out-in">
      <div class="alert alert-success mt-3 mb-0"
      v-if="show"
      role="alert">
      Sava Data Successfully!!!
      <button type="button" class="close" @click="show = false">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    </transition>
    <div class="row">
      <div class="col-12">
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  data() {
    return {
      show: false
    };
  },
  components: {
    AppHeader: Header
  },
  methods: {
    success() {
      const vm = this;
      vm.show = true;
    }
  },
  created() {
    return this.$store.dispatch("initStocks");
  }
};
</script>

<style lang="scss">
body {
  padding: 30px;
}

.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}

.fade-enter-active {
  animation: fade-in 200ms ease-in forwards;
}

.fade-leave-active {
  animation: fade-out 1s 200ms ease-in-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
