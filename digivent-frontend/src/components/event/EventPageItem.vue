<template>
      <div class="contents">
  
        <div class="contents__box" v-for="(event, i) in events" :key="i">
          <router-link
            v-bind:to="{ name: 'details', params: { eventId: event._id } }"
          >
            <div class="contents__img">
              <img :src="event.image" />
            </div>
            <h2>{{ event.name }}</h2>
            <SpeakerName :speakerId="event.speaker" />
          </router-link>
        </div>

</div>

</template>

<script>
import SpeakerName from "./EventPageSpeaker";

export default {
  name: "EventPageItem",
    components: {
    SpeakerName,
  },
    props: ["events"],
};
</script>

<style></style>
