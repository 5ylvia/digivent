<template>
  <v-main>
    <div aspect-ratio="1.4" class="header"></div>
    <v-layout column>
      <v-flex class="title">
        <img
          src="@/assets/Frame 12.svg"
          alt="Frame"
          @click.prevent="closePage(question.event._id)"
        />
        <h2>Question about..</h2>
      </v-flex>
      <v-flex class="rounded-xl rounded-box">
        <v-flex ma-4 class="thumb-speaker">
          <v-img
            class="rounded-circle thumb-img--large"
            aspect-ratio="1"
            :src="question.speaker.image" :alt="question.speaker.firstName"          />
        </v-flex>
        <v-flex>
          <v-col cols="12" sm="6" class="pa-0">
            <h5 class="text--secondary mb-1">Host Name</h5>
            <h2 class="font-weight-medium">
              {{ question.speaker.firstName }} {{ question.speaker.lastName }}
            </h2>
            <h4 class="text--secondary my-1">{{ question.event.name }}</h4>
          </v-col>
        </v-flex>
      </v-flex>
      <v-list three-line class="mt-10 left-box">
          <v-list-item class="flex-row pa-0">
            <v-list-item-content class="border-box">
              <v-list-item-subtitle class="text-break"
                >User Name</v-list-item-subtitle
              >
              <v-list-item-title v-text="question.user.userName"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item class="flex-row pa-0">
            <v-list-item-content class="border-box">
              <v-list-item-subtitle
                >Question</v-list-item-subtitle
              >
              <v-list-item-title
                v-text="question.body"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item class="flex-row pa-0">
            <v-list-item-content class="border-box">
              <div v-if="isSpeaker === 'yes'" class="response response--yes">
                <v-list-item-subtitle
                >Response</v-list-item-subtitle>
                <v-form v-on:submit.prevent="checkForm">
                  <v-col class="pa-0">
                    <v-textarea
                      v-model="question.response"
                      id="response"
                      name="response"
                      label="Type response here.."
                      clearable
                    ></v-textarea>
                  </v-col>
                  <v-col>
                    <input type="submit" class="primary--text btn btn--light" value="Submit" />
                  </v-col>
                </v-form>
              </div>
              <v-flex v-else>
                <v-card-title primary-title class="pa-0 mb-10">
                  <div>
                    <h5>Response</h5>
                    <h4> {{question.response}} </h4>
                  </div>
                </v-card-title>
              </v-flex>
            </v-list-item-content>
          </v-list-item>
        </v-list>
    </v-layout>
  </v-main>
</template>

<script>
export default {
  name: "user-reply-question",
  data: function() {
    return {
      question: {
        speaker: {},
        event: {},
        body: null,
        response: null,
        user: {}
      },
      isEmpty: "no",
      isSpeaker: "no"
    };
  },

  // mounted: function() {
  //   if (localStorage.speakerId) {
  //     const speakerId = localStorage.speakerId;
  //     this.getQuestions(speakerId, "speakers");
  //   } else if (localStorage.userId) {
  //     const userId = localStorage.userId;
  //     // const questionId = "5f7cd17e806e9c0978c5b9c7";
  //     this.getQuestions(userId, "users");
  //   } else {
  //     this.$router.push({ path: "/login" });
  //     alert("Need to login");
  //   }

  // },

  mounted: function() {
    if (localStorage.speakerId) {
      this.isSpeaker = "yes";
    }
  },

  methods: {
    closePage: function(eventId) {
      this.$router.push({ name: "question", params: { eventId: eventId } });
    },
    getQuestion: function() {
      const id = this.$route.params.questionId;
      this.$http
        .get(`${process.env.VUE_APP_API_URL}questions/${id}`)

        .then(function(data) {
          this.question = data.body;
        });
    },

    checkForm: function() {
      if (this.question.response) {
        this.responseQuestion(this.question);
      }
    },

    responseQuestion: function(question) {
      const questionId = question._id;
      console.log(questionId);
      this.$http
        .put(
          `${process.env.VUE_APP_API_URL}questions/${questionId}/response`,
          question
        )
        .then(function() {
          this.$router.push({
            name: "question",
            params: { eventId: this.question.event._id }
          });
        });
    }
  },

  created: function() {
    this.getQuestion();
  }
};
</script>

<style lang="scss">
@import "@/style/_variables.scss";

.response {
  visibility: hidden;

  &--yes {
    visibility: visible;
  }
}

.header {
  width: 100%;
  height: 30%;
  background: $primary;
}
.thumb {
  &-speaker {
    @include thumb-speaker;
  }
  &-img--large {
    @include thumb-img--large;
  }
}

.title {
  position: absolute;
  left: 30px;
  top: 50px;
  color: white;
  font-weight: 400;
  @include desktop {
    left: 5%;
  }
}
.rounded-box {
  @include rounded-box;
}

.scrollbar {
  padding: 0 20px;
  max-width: 700px;
  max-height: 450px;
  overflow-y: scroll;
  overflow-x: hidden;
  &-speaker {
    @include desktop {
      max-height: 400px;
      position: absolute;
      // top: 40%;
      left: 40%;
          z-index: 1;

    }
  }
}

.btn {
  @include buttonprimary;
  &--light {
    @include buttonlight;
  }
  &-group {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
.left-box {
  margin: 15%;
  @include desktop {
    width: 50%;
    margin-left: 40%;
  }
}
.wrap-text {
  -webkit-line-clamp: unset !important;
}
// .multi-line {
//   height: 5rem;
//   overflow: scroll;
//   -webkit-line-clamp: unset !important;
//   white-space: normal;
// }
</style>