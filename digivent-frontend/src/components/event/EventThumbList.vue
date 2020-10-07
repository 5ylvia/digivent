<template>
    <!-- <v-flex class="contents">
      <div class="contents__box" v-for="(event, i) in events" :key="i">
        <router-link
          v-bind:to="{
            name: 'detail',
            params: { eventId: event._id },
          }"
        >
          <v-img class="contents__img" :src="event.image" :alt="event.name" />
          <h2>{{ event.name }}</h2>
          <h4>{{ event.speaker.firstName }} {{ event.speaker.lastName }}</h4>
        </router-link>
      </div>
    </v-flex> -->

  <v-slide-group
        class="pa-4"
        active-class="success"
        show-arrows
      >
        <v-slide-item
          v-for="(event, i) in events" :key="i"
          v-slot:default="{ active, toggle }"
        >
          <v-card
            class="ma-4"
            height="400"
            width="300"
            @click="toggle"
          >
                  <router-link
          v-bind:to="{
            name: 'detail',
            params: { eventId: event._id },
          }"
        >
            <v-row>
            
            <v-img class="contents__img" :src="event.image" :alt="event.name" />
            <v-card-title>{{ event.name }}</v-card-title>
            <h4>{{ event.speaker.firstName }} {{ event.speaker.lastName }}</h4>

            <v-scale-transition>
              <v-icon
                    v-if="active"
                    size="48"
                    v-text="'mdi-close-circle-outline'"
                  ></v-icon>
            </v-scale-transition>
          </v-row>
        </router-link>

      </v-card>
    </v-slide-item>
  </v-slide-group>
</template>

<script>
export default {
  name: "EventThumbList",
  props: ["events"],
};
</script>

<style lang="scss">
@import "@/style/_variables.scss";
.contents {
  // padding-bottom: 24px;
  // display: flex;
  // white-space: nowrap;
  // overflow-x: auto;
  // overflow-y: hidden;
  // &__box {
  //   margin-right: 20px;
  // }
  &__img {
    border-radius: 20px;
    height: 400px;
    width: 300px;
    margin: 8px 0;
    overflow: hidden;
  }
}
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background-color: white;
}
::-webkit-scrollbar-thumb {
  background-color: $secondary;
  border-radius: 20px;
}
</style>
