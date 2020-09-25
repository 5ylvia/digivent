<template>
  <div>
    <div class="flexbox">
      <img src="@/assets/chevron-left.svg" alt="chevron-left" />
    </div>

    <h2>Event details</h2>
    <div class="flexbox">
      <img class="flexbox__main" :src="event.image" :alt="event.name" />
    </div>

    <h1>{{ event.name }}</h1>
    <div class="flexbox">
      <img src="@/assets/pin.svg" alt="pin" />
      <h4>{{ event.address }}</h4>
    </div>
    <div class="flexbox">
      <img src="@/assets/dates.svg" alt="dates" />
      <h4>{{ event.date }}</h4>
    </div>
    <div class="flexbox">
      <img src="@/assets/time.svg" alt="time" />
      <h4>{{ event.time }}</h4>
    </div>

    <div class="flexbox">
      <div>
        <h3>Host</h3>
        <div class="flexbox__thumb">
          <img :src="speaker.image" :alt="speaker.firstName" />
        </div>
        <h6>About host</h6>
        <h3>{{ speaker.firstName }} {{ speaker.lastName }}</h3>
      </div>
      <input type="button" value="Ask question" />
    </div>

    <!-- Speaker's view-->

    <!-- <div class="flexbox">
      <div>
        <h3>Host</h3>
        <div class="flexbox__thumb">
          <img :src="speaker.image" :alt="speaker.firstName" />
        </div>
        <h3>{{ speaker.firstName }} {{ speaker.lastName }}</h3>
      </div>
    </div> -->
    <h4>Event description</h4>
    <p>{{ event.description }}</p>
    <input type="button" value="Book" />

    <!-- Speaker's view-->

    <!-- <div class="flexbox">
      <router-link :to="{ name: 'edit', params: { eventId: event._id } }">
        Edit event
      </router-link>
      <a href v-on:click.prevent="deleteEvent(event._id)"> Delete Event </a>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "EventDetails",

  data: function() {
    return {
      event: {},
      speaker: {},
    };
  },
  mounted: function() {
    const id = this.$route.params.eventId;
    this.$http
      .get(`${process.env.VUE_APP_API_URL}events/${id}`)
      .then(function(data) {
        this.event = data.body;
      });
  },
  created: function() {
    const id = this.$route.params.eventId;
    this.$http
      .get(`${process.env.VUE_APP_API_URL}events/${id}/speaker`)
      .then(function(data) {
        this.speaker = data.body;
      });
  },
  methods: {
    deleteEvent: function(eventId) {
      this.$http
        .delete(`${process.env.VUE_APP_API_URL}events/${eventId}`)
        .then(function() {
          this.$router.push({ path: "/events" });
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
  &__thumb {
    @include thumb-img;
  }
  &__main {
    width: 100%;
    min-width: 600px;
  }
}
</style>
