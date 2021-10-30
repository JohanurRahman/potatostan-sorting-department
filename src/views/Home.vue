<template>
  <div id="home" class="home-container">
    <div class="d-flex justify-end mb-9">
      <v-btn class="button-sorting" v-ripple="false" @click.stop="showDialog = true">
        Start Sorting!
      </v-btn>
    </div>
    <Dialog v-model="showDialog" @peopleCount="submittedPeopleCount($event)"></Dialog>
  </div>
</template>

<script>
import Dialog from "../components/Dialog";

export default {
  name: 'Home',
  components: {
    Dialog,
  },
  data: () => ({
    showDialog: false,
    randomData: [],
  }),
  methods: {
    submittedPeopleCount(value) {
      // this.randomData = this.randomUsers(parseInt(value));
      // if (this.randomData.length > 0) {
      //   this.$refs.stopwatch.start();
      // }
    },
  },
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
