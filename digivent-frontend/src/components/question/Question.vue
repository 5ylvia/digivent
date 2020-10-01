<template>
  <div>
    <div v-if="isSpeaker === 'yes'">
      <h3>Questions</h3>
      <h1>{{}}</h1>
    </div>
    <div v-else>
      <h1>Questions</h1>
      <div class="thumb thumb--b">
        <img :src="event.speaker.image" :alt="event.speaker.firstName" />
      </div>
      <p>Host name</p>
      <h3>{{ event.speaker.firstName }} {{ event.speaker.lastName }}</h3>
      <h3>{{ event.name }}</h3>
      <div v-for="(question, i) in questions" :key="i">
        <div class="thumb">
          <img :src="question.user.image" :alt="question.user.firstName" />
        </div>
        <div>
          <h3>{{ question.user.userName }}</h3>
          <h4>{{ question.event.name }}</h4>
          <p>{{ question.body }}</p>
        </div>
      </div>
      <router-link
        :to="{ name: 'PostQuestion', params: { eventId: event._id } }"
        >Ask question
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Question",
  data: function() {
    return {
      isSpeaker: "no",
      questions: [],
      event: {
        speaker: {
          firstName: String,
          lastName: String,
          image: String,
        },
      },
    };
  },
  mounted: function() {
    if (localStorage.speakerId) {
      this.isSpeaker = "yes";
    } else if (localStorage.userId) {
      this.isSpeaker = "no";
    }
    const eventId = this.$route.params.eventId;
    this.$http
      .get(`${process.env.VUE_APP_API_URL}events/${eventId}`)
      .then(function(data) {
        this.event = data.body;
      });
  },
  created: function() {
    this.getQuestions();
  },
  methods: {
    getQuestions: function() {
      const eventId = this.$route.params.eventId;
      this.$http
        .get(`${process.env.VUE_APP_API_URL}events/${eventId}/questions`)
        .then(function(data) {
          console.log(this.questions);
          this.questions = data.body;
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
  &--b {
    @include thumb-img--b;
  }
}
</style>
