<template>
  <div id="home" class="home-container">
    <div class="d-flex justify-end mb-9">
      <v-btn class="button-sorting" v-ripple="false" @click.stop="showDialog = true">
        Start Sorting!
      </v-btn>
    </div>
    <h3>asdsad</h3>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="scss">
@import '../scss/button';

.home-container {
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  padding: 100px 0;
}
</style>
