<template>
  <div>
    <h1>{{ event.name }}</h1>
    <h3>{{ event.speaker.firstName }} {{ event.speaker.lastName }}</h3>

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
    <div>
      <img src="@/assets/qr-code.svg" alt="" />
    </div>
    <router-link :to="{ name: 'post-question', params: { eventId: event._id } }"
      >Ask question
    </router-link>
  </div>
</template>

<script>
export default {
  name: "book",
  data: function() {
    return {
      event: {
        speaker: {},
      },
    };
  },

  mounted: function() {
    const eventId = this.$route.params.eventId;
    const userId = this.$route.params.userId;
    this.$http
      .get(`${process.env.VUE_APP_API_URL}users/${userId}/events`)
      .then(function(data) {
        const userEvent = data.body.events;
        this.event = userEvent.filter(function(events) {
          return events._id === eventId;
        })[0];
      });
  },
};
</script>

<style></style>
