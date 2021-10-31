<template>
  <div id="home" class="home-container">
    <div class="d-flex justify-end mb-9">
      <v-btn class="button-sorting" v-ripple="false" @click.stop="showDialog = true">
        Start Sorting!
      </v-btn>
    </div>
    <Dialog v-model="showDialog" @userCount="generateRandomUser($event)" />
    <SuccessfulDialog v-model="showSuccessfulDialog" :score="score"
                      @userCount="generateRandomUser($event)" />

    <v-card class="card" elevation="3" outlined>

      <div class="card__header">
        <Timer ref="timer" />
        <h3> {{ users.length }} people in the list </h3>
      </div>

      <template v-if="users.length">
        <Table :users="users" :draggable="draggable" @usersSorted="generateScore" />
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
import Timer from "../components/Timer";
import SuccessfulDialog from "../components/SuccessfulDialog";
import scoreMixin from "../mixins/scoreMixin";

export default {
  name: 'Home',
  mixins: [randomUserGeneratorMixin, scoreMixin],
  components: {
    SuccessfulDialog,
    Timer,
    Table,
    Dialog,
  },
  data: () => ({
    startTimer: false,
    showDialog: false,
    showSuccessfulDialog: false,
    draggable: true, // Top stop the dragging row once sorting is complete
    score: 0,
    users: [],
  }),
  methods: {
    generateRandomUser(userCount) {
      this.users = this.randomUsers(parseInt(userCount));
      this.$refs.timer.start();
    },
    generateScore() {
      this.draggable = false;
      this.$refs.timer.stop();
      const completionTime = this.$refs.timer.formattedElapsedTime;
      this.showSuccessfulDialog = true;
      this.score = this.calculateScore(this.users.length, completionTime);
    }
  },
}
</script>

<style lang="scss">
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
