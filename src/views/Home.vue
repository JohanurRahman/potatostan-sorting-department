<template>
  <div id="home" class="home-container">
    <div class="d-flex justify-end mb-9">
      <v-btn class="button-sorting" v-ripple="false" @click.stop="showDialog = true">
        Start Sorting!
      </v-btn>
    </div>
    <Dialog v-model="showDialog" @userCount="generateRandomUser($event)" />

    <v-card class="card" elevation="3" outlined>
      <div class="card__header" :class="{'justify-end': !user.length }">
        <Stopwatch v-if="user.length" />
        <h3> {{ user.length }} people in the list </h3>
      </div>
      <template v-if="user.length">
        <Table :user="user" />
      </template>
      <template v-else>
        <div class="card__no-records">
          <h2>Click 'Start Sorting' to generate data</h2>
        </div>
      </template>
    </v-card>
  </div>
</template>

<script>
import Dialog from "../components/Dialog";
import Table from "../components/Table";
import randomUserGeneratorMixin from "../mixins/randomUserGeneratorMixin";
import Stopwatch from "../components/Stopwatch";

export default {
  name: 'Home',
  mixins: [randomUserGeneratorMixin],
  components: {
    Stopwatch,
    Table,
    Dialog,
  },
  data: () => ({
    showDialog: false,
    user: [],
  }),
  methods: {
    generateRandomUser(userCount) {
      this.user = this.randomUsers(parseInt(userCount));
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

.card {
  &__header {
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      line-height: 16px;
      font-size: 14px;
      font-weight: 700;
    }
  }
  &__no-records {
    display: flex ;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 200px;
    h2 {
      font-weight: 500;
      color: rgba(10, 15, 20, 0.75);
    }
  }
}
</style>
