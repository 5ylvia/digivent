<template>
  <div>
    <input v-model="search" type="text" id="search" />
    <router-link :to="{ name: 'edit' }">New event</router-link>
    <div class="contents">
      <div class="contents__box" v-for="(event, i) in filteredEvents" :key="i">
        <router-link v-bind:to="{ name: 'details', params: { eventId: event._id} }">
          <div class="contents__img">
            <img :src="event.image" />
          </div>
          <h4>{{ event.name }}</h4>
          <router-link :to="{ name: 'edit', params: { eventId: event._id} }">edit</router-link>
          <a href v-on:click.prevent="deleteEvent(event._id)">Delete Event</a>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "event",

  data: function () {
    return {
      search: "",
      events: [],
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
    deleteEvent: function (eventId) {
      this.$http
        .delete(`${process.env.VUE_APP_API_URL}events/${eventId}`)
        .then(function () {
          this.getEvents();
        });
    },
  },
  created: function () {
    this.getEvents();
  },
  computed: {
    filteredEvents: function () {
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
