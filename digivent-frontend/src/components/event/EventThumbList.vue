<template>
  <keep-alive>
    <div class="contents">
      <div class="contents__box" v-for="(event, i) in events" :key="i">
        <router-link
          v-bind:to="{
            name: 'details',
            params: { eventId: event._id },
          }"
        >
          <div class="contents__img">
            <img :src="event.image" :alt="event.name" />
          </div>
          <h2>{{ event.name }}</h2>
        </router-link>
      </div>
    </div>
  </keep-alive>
</template>

<script>
export default {
  name: "EventThumbList",
  props: ["events"],
  data: function() {
    return {
      myEvents: this.events,
      speaker: {},
    };
  },
  methods: {
    getSpeaker: function() {
      const events = this.myEvents;
      for (const event in events) {
        this.speaker = event.speaker;
        console.log(this.speaker);
      }
    },
  },
  created: function() {
    this.getSpeaker();
  },
};
</script>

<style>
.contents {
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
}
</style>
