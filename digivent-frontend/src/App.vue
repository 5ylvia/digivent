<template>
  <div id="app">
    <div id="header"></div>
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
#header {
  width: 100%;
  height: 100px;
  background: $primary;
}
.body {
  &-main {
    margin-left: 16px;
  }
  &-inner {
    width: 100%;
    padding: 0 16px;
  }
  // &--flex {
  //   flex-direction: column;
  //   display: flex;
  //   align-content: flex-end;
  // }
}
</style>
