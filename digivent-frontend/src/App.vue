<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
@import "@/style/_variables.scss";

* {
  // border: 1px solid red;
  font-family: "Roboto", sans-serif;
  text-decoration: none;
  font-weight: 300;
  margin: 0;
  box-sizing: border-box;
  color: black;
}
h1,
h2 {
  font-weight: 400;
}
#app {
  width: 100vw;
  height: 100%;
  padding-bottom: 100px;
}
</style>
