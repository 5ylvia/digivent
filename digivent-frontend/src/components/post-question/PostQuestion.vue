<template>
  <div>
    <h3>Ask Question</h3>
    <div class="flexbox__thumb">
      <img :src="event.speaker.image" :alt="event.speaker.firstName" />
    </div>
    <p>Host name</p>
    <h3>{{ event.speaker.firstName }} {{ event.speaker.lastName }}</h3>
    <p>User name</p>
    <h3>{{ user.userName }}</h3>

    <form v-on:submit.prevent="checkForm">
      <div>
        <label for="body">Question</label>
        <input
          v-model="question.name"
          id="question"
          name="question"
          type="text"
          placeholder="Type here.."
        />
      </div>
      <div>
        <input type="submit" :value="mode" />
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "PostQuestion",

  data: function() {
    return {
      question: {
        speaker: {},
        user: {},
        event: {},
        body: null,
      },
    };
  },
  methods: {
    checkForm: function() {
      if (this.question.body) {
        this.createQuestion(this.question);
      }
    },
    createQuestion: function(question) {
      console.log(question);
      //   this.$http
      //     .post(`${process.env.VUE_APP_API_URL}events`, question)
      //     .then(function() {
      //       this.$router.push({ path: "/" });
      //     });
    },
  },
  created: function() {
    const eventId = this.$route.params.eventId;
    console.log(eventId);
    // if (eventId) {
    //   this.$http
    //     .get(`${process.env.VUE_APP_API_URL}events/${eventId}`)
    //     .then(function(data) {
    //       this.event = data.body;
    //     });
    // }
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
}
</style>
