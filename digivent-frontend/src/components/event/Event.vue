<template>
  <div>
    <MySearchbar v-model="search" type="text" id="search" />

    <!-- Speaker's view -->
    <!-- <div v-if="isSpeaker" class="flexbox">
      <h3>Hi Host, {{ speaker.firstName }} {{ speaker.lastName }}</h3>
      <h4>Check <a href="">your events</a></h4>
      <div class="thumb--s" v-if="this.$route.path !== '/events'">
        <img :src="speaker.image" :alt="speaker.firstName" />
      </div>
    </div> -->

    <h1>Explore</h1>
    <h2>What’s upcoming events</h2>

    <router-link :to="{ name: 'edit' }">New event</router-link>
    <EventThumbList :events="filteredEvents" />
  </div>
</template>

<script>
import EventThumbList from "./EventThumbList";
import MySearchbar from "../MySearchbar";

export default {
  name: "event",
  components: {
    EventThumbList,
    MySearchbar,
  },
  data: function() {
    return {
      isSpeaker: "no",
      search: "",
      events: [],
    };
  },
  methods: {
    getEvents: function() {
      this.$http
        .get(`${process.env.VUE_APP_API_URL}events`)
        .then(function(data) {
          this.events = data.body;
        });
    },
  },
  created: function() {
    this.getEvents();
  },
  computed: {
    filteredEvents: function() {
      return this.events.filter((event) => {
        let byName =
          event.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
        if (byName === true) {
          return byName;
        }
      });
    },
  },
};
</script>

<style>
.contents {
  display: flex;
}
.contents__box {
  margin: 20px;
}
.contents__img {
  height: 400px;
  width: 300px;
  overflow: hidden;
}
img {
  height: 100%;
  width: auto;
}
</style>
