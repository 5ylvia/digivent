<template>
  <v-main>
    <v-img aspect-ratio="1.4" :src="event.image" :alt="event.name"></v-img>
    <v-layout column>
      <v-flex class="title">
        <img src="@/assets/chevron-left.svg" alt="chevron-left" />
        <h2>Event Details</h2>
      </v-flex>

      <v-flex class="rounded-t-xl rounded-box">
        <h1>{{ event.name }}</h1>

        <v-row>
          <img src="@/assets/pin.svg" alt="pin" />
          <h4 class="hightlight" @click.prevent="googleMap(event.address)">
            {{ event.address }}
          </h4>
        </v-row>
        <v-row>
          <img src="@/assets/dates.svg" alt="dates" />
          <h4>{{ event.date }}</h4>
        </v-row>
        <v-row>
          <img src="@/assets/time.svg" alt="time" />
          <h4>{{ event.time }}</h4>
        </v-row>
        <v-flex>
          <h3>Host</h3>
          <v-img
            class="rounded-xl thumb-img"
            aspect-ratio="1"
            :src="event.speaker.image"
            :alt="event.speaker.firstName"
          />
          <h3>{{ event.speaker.firstName }} {{ event.speaker.lastName }}</h3>
        </v-flex>

        <v-flex v-if="isSpeaker === 'yes'">
          <a @click.prevent="checkSpeaker(event.speaker._id)"> Edit event </a>
          <a @click.prevent="deleteEvent(event._id, event.speaker._id)">
            Delete Event
          </a>

          <h4>Event description</h4>
          <p>{{ event.description }}</p>
        </v-flex>

        <v-flex v-else>
          <div class="flexbox">
            <router-link
              :to="{
                name: 'speaker-detail',
                params: { speakerId: event.speaker },
              }"
            >
              <h6 class="link">About host</h6>
            </router-link>
            <router-link
              :to="{ name: 'question', params: { eventId: event._id } }"
              >View Questions
            </router-link>
          </div>
          <h4>Event description</h4>
          <p>{{ event.description }}</p>
          <div @click.prevent="bookEvent()">
            <router-link
              class="btn"
              :to="{ name: 'book', params: { event: event } }"
              >Book
            </router-link>
          </div>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-main>

  <!-- <div class="body-main">
    <div class="flexbox">
      <img class="flexbox__main" :src="event.image" :alt="event.name" />
    </div>
    <div class="title">
      <div class="flexbox">
        <img src="@/assets/chevron-left.svg" alt="chevron-left" />
      </div>
      <h2 class="header">Event Details</h2>
    </div>

    <div class="body-round">
      <h1>{{ event.name }}</h1>
      <div class="flexbox">
        <img src="@/assets/pin.svg" alt="pin" />
        <h4 class="link" @click.prevent="googleMap(event.address)">
          {{ event.address }}
        </h4>
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
          <div class="thumb">
            <img :src="event.speaker.image" :alt="event.speaker.firstName" />
          </div>
          <h3>{{ event.speaker.firstName }} {{ event.speaker.lastName }}</h3>
        </div>
      </div>
      <div v-if="isSpeaker === 'yes'">
        <a @click.prevent="checkSpeaker(event.speaker._id)"> Edit event </a>
        <a @click.prevent="deleteEvent(event._id, event.speaker._id)">
          Delete Event
        </a>

        <h4>Event description</h4>
        <p>{{ event.description }}</p>
      </div>

      <div v-else>
        <div class="flexbox">
          <router-link
            :to="{
              name: 'speaker-detail',
              params: { speakerId: event.speaker },
            }"
          >
            <h6 class="link">About host</h6>
          </router-link>
          <router-link
            :to="{ name: 'question', params: { eventId: event._id } }"
            >View Questions
          </router-link>
        </div>
        <h4>Event description</h4>
        <p>{{ event.description }}</p>
        <div @click.prevent="bookEvent()">
          <router-link
            class="btn"
            :to="{ name: 'book', params: { event: event } }"
            >Book
          </router-link>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
export default {
  name: "detail",
  data: function() {
    return {
      event: {
        speaker: {
          // firstName: String,
          // lastName: String,
          // image: String,
        },
      },
      isSpeaker: "no",
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
    if (localStorage.speakerId) {
      this.isSpeaker = "yes";
    }
  },
  methods: {
    deleteEvent: function(eventId, speakerId) {
      if (localStorage.speakerId !== speakerId) {
        alert("You don't have permission to do.");
      } else {
        const choice = confirm("Want to delete?");
        if (choice) {
          this.$http
            .delete(`${process.env.VUE_APP_API_URL}events/${eventId}`)
            .then(function() {
              this.$router.push({ path: "/events" });
            });
        }
      }
    },
    bookEvent: function() {
      const event = this.event;
      const id = localStorage.userId;
      this.$http
        .put(`${process.env.VUE_APP_API_URL}users/${id}/event`, event)
        .then(function() {
          alert("Booking confirmed!");
        });
    },

    checkSpeaker: function(speakerId) {
      if (localStorage.speakerId !== speakerId) {
        alert("You don't have permission to do.");
      } else {
        this.$router.push({
          name: "edit",
          params: { eventId: this.event._id },
        });
      }
    },
    googleMap: function(address) {
      const place = address.replace(" ", "+");
      window.open(
        `https://www.google.com/maps/place/${place},christchurch`,
        "_blank"
      );
    },
  },
};
</script>

<style lang="scss">
@import "@/style/_variables.scss";
.thumb {
  &-img {
    border: 3px solid white;
    height: 60px;
    width: 60px;
  }
}

.rounded-box {
  background: white;
}

.hightlight {
  &:hover {
    color: $secondary !important;
    font-weight: 600;
  }
}

.title {
  position: absolute;
  left: 30px;
  top: 70px;
  color: white;
  font-weight: 400;
}
// .text-white {
//   @include desktop {
//     color: white;
//     font-weight: 400;
//   }
// }
// .thumb {
//   height: 60px;
//   width: 60px;
//   border-radius: 20px;
//   overflow: hidden;
//   position: relative;
//   margin: 5px 0;
//   img {
//     position: absolute;
//     object-fit: cover;
//     width: 100%;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//   }
// }
// .btn {
//   @include buttonprimary;
// }
// .link {
//   &:hover {
//     color: $secondary;
//   }
// }
</style>
