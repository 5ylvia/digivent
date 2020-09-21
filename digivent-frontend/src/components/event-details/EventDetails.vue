<template>
  <div>
    <h3>Event details</h3>
    <img :src="event.image" alt />
    <h1>{{ event.name }}</h1>
    <h4>{{ event.address }}</h4>
    <h4>{{ event.date }}</h4>
    <h4>{{ event.time }}</h4>
    <h4>{{ event.speaker }}</h4>
    <button value="Ask question"></button>
    <h4>Description</h4>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
export default {
  name: "EventDetails",
  data: function () {
    return {
      event: {},
    };
  },
  mounted: function () {
    const id = this.$route.params.eventId;
    this.$http
      .get(`${process.env.VUE_APP_API_URL}events/${id}`)
      .then(function (data) {
        this.event = data.body;
      });
  },
};
</script>

<style>
</style>