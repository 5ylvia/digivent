<template>
  <div class="body-main">
    <Searchbar v-model="search" class="search-bar" />
    <div v-if="isSpeaker === 'yes'" class="container--right">
      <h4>Hi Host, {{ speaker.firstName }} {{ speaker.lastName }}</h4>
      <h4>Check <a href="" class="color">your events</a></h4>
      <div class="thumb">
        <img :src="speaker.image" :alt="speaker.firstName" />
      </div>
    </div>
    <div class="container--bottom">
      <h1>Explore</h1>
      <h3>What’s upcoming events</h3>
      <EventThumbList :events="filteredEvents" />
    </div>
  </div>
</template>

<script>
import EventThumbList from "./EventThumbList";
import Searchbar from "../Searchbar";

export default {
  name: "event",
  components: {
    EventThumbList,
    Searchbar,
  },
  data: function () {
    return {
      isSpeaker: "no",
      search: "",
      events: [],
      speaker: {},
    };
  },
  methods: {
    getEvents: function () {
      this.$http
        .get(`${process.env.VUE_APP_API_URL}events`)
        .then(function (data) {
          this.events = data.body;
        });
    },
  },
  created: function () {
    this.getEvents();
    if (localStorage.speakerId) {
      this.isSpeaker = "yes";
      const id = localStorage.speakerId;
      this.$http
        .get(`${process.env.VUE_APP_API_URL}speakers/${id}`)
        .then(function (data) {
          this.speaker = data.body;
        });
    }
  },
  computed: {
    filteredEvents: function () {
      return this.events.filter((event) => {
        let byEvent =
          event.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
        if (byEvent === true) {
          return byEvent;
        }
        let byFirstName =
          event.speaker.firstName
            .toLowerCase()
            .indexOf(this.search.toLowerCase()) > -1;
        if (byFirstName === true) {
          return byFirstName;
        }
        let byLastName =
          event.speaker.lastName
            .toLowerCase()
            .indexOf(this.search.toLowerCase()) > -1;
        if (byLastName === true) {
          return byLastName;
        }
      });
    },
  },
};
</script>

<style lang="scss">
@import "@/style/_variables.scss";

.flexbox {
  display: flex;
  align-items: center;
  overflow: hidden;
}
.thumb {
  @include thumb-img;
}

.search-bar {
  top: 0;
  left: 0;
  padding: 20px;
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.color {
  color: $secondary;
}
.container {
  // display: flex;
  &--bottom {
    padding-top: 80px;
    // display: flex;
    // flex-direction: column;
    // align-self: flex-end;
  }
  &--right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 16px;
    position: absolute;
    right: 0;
  }
}
</style>
