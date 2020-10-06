<template>
  <div>
    <form>
      <label for="search"></label>
      <input
        @input="searchEvent"
        :search="search"
        placeholder="Search Event or Speaker"
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

<style module="web">
#search {
  display: flex;
  width: 100%;
  height: 65px;
  border-radius: 20px;
  border: none;
}
</style>
