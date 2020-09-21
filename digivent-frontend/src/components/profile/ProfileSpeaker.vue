<template>
  <div>
    <h1>Profile</h1>
    <img>
    <div class="info">
      <div class="info-row">
        <p>First name:</p>
      </div>
      <div class="info-row">
        <p>Last name:</p>
        <p>chur</p>
      </div>
      <div class="info-row">
        <p>Username:</p>
      </div>
      <div class="info-row">
        <p>Email:</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>


.info {
  position: fixed;
  display: flex;
  flex-direction: column;
}
.info-row {
  flex-direction: row;
}
</style>