<template>
  <div>
    <MySearchbar v-model="search" />
    <router-link :to="{ name: 'edit' }">New event</router-link>
    
    <keep-alive>
        <EventPageItem :events="filteredEvents"/>
    </keep-alive>
  </div>
</template>

<script>
import MySearchbar from "../MySearchbar";
import EventPageItem from "../event/EventPageItem";

export default {
  name: "event",
  components: {
    EventPageItem,
    MySearchbar
  },
  data: function() {
    return {
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
