<template>
  <v-app>
    <Navbar />
    <router-view />
  </v-app>
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
  text-decoration: none;
  font-weight: 300;
  line-height: 1.2;
  box-sizing: border-box !important;
  //   color: black;
}

h1 {
  font-size: 1.7rem;
  font-weight: 600;
  @include desktop {
    font-size: 2.3rem;
  }
}
h2 {
  font-size: 1.4rem;
  font-weight: 600;
  @include desktop {
    font-size: 1.8rem;
  }
}
h3 {
  font-size: 1.2rem;
  @include desktop {
    font-size: 1.6rem;
  }
}
h4 {
  font-size: 1rem;
  @include desktop {
    font-size: 1.2rem;
  }
}
p {
  font-size: 0.9rem;
    @include desktop {
    font-size: 1.2rem;
  }
}
h5 {
  font-size: 0.8rem;
  @include desktop {
    font-size: 1rem;
  }
}
h6 {
  font-size: 0.7rem;
  @include desktop {
    font-size: 0.9rem;
  }
}

</style>
