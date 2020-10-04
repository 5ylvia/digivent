<template>
  <div>
    <div>
      <div class="thumb thumb--b">
        <img :src="question.speaker.image" :alt="question.speaker.firstName" />
      </div>
      <p>Host name</p>
      <h3>{{ question.speaker.firstName }} {{ question.speaker.lastName }}</h3>

      <div v-for="(question, i) in questions" :key="i">
        <div>
          <h4>User Name</h4>
          <h3>{{ question.user.userName }}</h3>
          <!-- <h4>{{ question.event.name }}</h4> -->
          <h4>Question</h4>
          <p>{{ question.body }}</p>
          <hr />
          <h4>Response</h4>
          <!-- question response -->
        </div>
        <div>
          <h4>Comments</h4>
          <form v-on:submit.prevent="checkForm">
            <div>
              <!-- <label for="body"></label> -->
              <input
                v-model="question.comment"
                id="question"
                name="question"
                type="text"
                placeholder="Type here.."
              />
            </div>
            <div>
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user-reply-question",
  data: function() {
    return {
      userName: String,
      question: {
        speaker: {
          firstName: String,
          lastName: String,
          image: String
        },
        event: {
          name: String
        },
        body: null
      },
      isEmpty: "no",
      questions: []
    };
  },

  mounted: function() {
    if (localStorage.speakerId) {
      const speakerId = localStorage.speakerId;
      this.getQuestions(speakerId, "speakers");
    } else if (localStorage.userId) {
      const userId = localStorage.userId;
      this.getQuestions(userId, "users");
    } else {
      this.$router.push({ path: "/login" });
      alert("Need to login");
    }

    this.userName = localStorage.userName;
    // const eventId = this.$route.params.eventId;
    const eventId = "5f69c2bb1ab71685d1bc7609";
    this.$http
      .get(`${process.env.VUE_APP_API_URL}events/${eventId}`)
      .then(function(data) {
        this.question.event = data.body;
        this.question.speaker = data.body.speaker;
      });
  },

  methods: {
    getQuestions: function(id, person) {
      this.$http
        .get(`${process.env.VUE_APP_API_URL}${person}/${id}/questions`)
        .then(function(data) {
          this.questions = data.body;
        });
    }
  }
};
</script>

<style lang="scss">
@import "@/style/_variables.scss";

.thumb {
  @include thumb-img;
  &--b {
    @include thumb-img--b;
  }
}

</style>