<template>
  <div>
    <form>
      <label v-if="!isMobile()" for="search">Search Event</label>
      <input
        @input="searchEvent"
        :search="search"
        placeholder="Search Event"
        type="text"
        id="search"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: "Searchbar",
  props: {
    search: null,
  },
  methods: {
    searchEvent($event) {
      this.$emit("input", $event.target.value);
    },
    isMobile: function () {
      if (this.onSize < 500) {
        return true;
      } else {
        return false;
      }
    },
  },
  computed: {
    onSize: function () {
      return window.innerWidth;
    },
  },
};
</script>

<style>
#search {
  display: flex;
  width: 100%;
  height: 65px;
  border-radius: 20px;
  border: none;
}
</style>
